/**
 * Downloads set photos (Rebrickable, falling back to Brickset) and real-car photos
 * (Wikipedia / Wikimedia Commons, or a car's `photo` URL) into public/images as resized WebP.
 *
 *   npm run images                 # fetch anything missing
 *   npm run images -- --force 76916 porsche-963   # re-fetch specific sets / cars
 *
 * Existing files are never overwritten without --force, so dropping your own
 * image at public/images/{sets,cars}/<id>.webp always wins.
 */
import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { sets } from "../src/data/sets";
import type { Car } from "../src/data/types";

const ROOT = process.cwd();
const SET_DIR = path.join(ROOT, "public/images/sets");
const CAR_DIR = path.join(ROOT, "public/images/cars");
const CREDITS_FILE = path.join(ROOT, "src/data/image-credits.json");
const HEADERS = { "User-Agent": "speed-champion-collection/1.0 (personal collection tracker)" };

const forceIdx = process.argv.indexOf("--force");
const forced = new Set(forceIdx >= 0 ? process.argv.slice(forceIdx + 1) : []);

interface Credit {
  author: string | null;
  license: string | null;
  sourceUrl: string;
}

const exists = (p: string) =>
  access(p).then(
    () => true,
    () => false,
  );

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Fetch with backoff on 429/5xx (Wikimedia rate-limits bursts). */
async function fetchOk(url: string, attempt = 0): Promise<Response> {
  const res = await fetch(url, { headers: HEADERS });
  if ((res.status === 429 || res.status >= 500) && attempt < 5) {
    await wait(2 ** attempt * 2000);
    return fetchOk(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}

async function saveWebp(url: string, file: string, width: number) {
  const buf = Buffer.from(await (await fetchOk(url)).arrayBuffer());
  await sharp(buf)
    .resize({ width, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .webp({ quality: 82 })
    .toFile(file);
}

const stripHtml = (s?: string) =>
  s
    ?.replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim() || null;

async function wikiApi(params: Record<string, string>) {
  const qs = new URLSearchParams({ format: "json", formatversion: "2", ...params });
  return (await fetchOk(`https://en.wikipedia.org/w/api.php?${qs}`)).json();
}

/** Resolves the car's photo: explicit `photo` URL or Commons file, else the article's lead image. */
async function resolveCarPhoto(car: Car): Promise<{ url: string; credit: Credit }> {
  if (car.photo && /^https?:\/\//.test(car.photo)) {
    if (!car.photoCredit) throw new Error("photo URL needs a photoCredit");
    const { author, license, sourceUrl } = car.photoCredit;
    return { url: car.photo, credit: { author, license: license ?? null, sourceUrl: sourceUrl ?? car.photo } };
  }
  let fileTitle = car.photo;
  if (!fileTitle) {
    const data = await wikiApi({ action: "query", titles: car.wikipedia, prop: "pageimages", piprop: "name", redirects: "1" });
    let name: string | undefined = data.query?.pages?.[0]?.pageimage;
    if (!name) {
      // pageimages skips non-free files; the REST summary still reports them.
      const summary = await (
        await fetchOk(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(car.wikipedia)}`)
      ).json();
      const src: string | undefined = summary.originalimage?.source;
      name = src && decodeURIComponent(new URL(src).pathname.split("/").pop()!);
    }
    if (!name) throw new Error(`no lead image for ${car.wikipedia}`);
    fileTitle = `File:${name}`;
  }
  const data = await wikiApi({
    action: "query",
    titles: fileTitle,
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "1600",
  });
  const info = data.query?.pages?.[0]?.imageinfo?.[0];
  if (!info) throw new Error(`no imageinfo for ${fileTitle}`);
  const meta = info.extmetadata ?? {};
  return {
    url: info.thumburl ?? info.url,
    credit: {
      author: stripHtml(meta.Artist?.value),
      license: stripHtml(meta.LicenseShortName?.value),
      sourceUrl: info.descriptionurl,
    },
  };
}

async function main() {
  await mkdir(SET_DIR, { recursive: true });
  await mkdir(CAR_DIR, { recursive: true });
  const credits: Record<string, Credit> = JSON.parse(await readFile(CREDITS_FILE, "utf8").catch(() => "{}"));
  const failures: string[] = [];
  let downloaded = 0;

  for (const set of sets) {
    const file = path.join(SET_DIR, `${set.setNum}.webp`);
    if ((await exists(file)) && !forced.has(set.setNum)) continue;
    const sources = [
      `https://cdn.rebrickable.com/media/sets/${set.setNum}-1.jpg`,
      `https://images.brickset.com/sets/images/${set.setNum}-1.jpg`,
    ];
    let ok = false;
    for (const url of sources) {
      try {
        await saveWebp(url, file, 800);
        ok = true;
        break;
      } catch {
        // try the next source
      }
    }
    console.log(`${ok ? "✓" : "✗"} set ${set.setNum} ${set.name}`);
    if (ok) downloaded++;
    else failures.push(`set ${set.setNum}`);
  }

  const seen = new Set<string>();
  for (const car of sets.flatMap((s) => s.cars)) {
    if (seen.has(car.id)) continue;
    seen.add(car.id);
    const file = path.join(CAR_DIR, `${car.id}.webp`);
    if ((await exists(file)) && !forced.has(car.id)) continue;
    try {
      const { url, credit } = await resolveCarPhoto(car);
      await saveWebp(url, file, 1200);
      credits[car.id] = credit;
      downloaded++;
      console.log(`✓ car ${car.id}`);
    } catch (err) {
      failures.push(`car ${car.id}: ${(err as Error).message}`);
      console.log(`✗ car ${car.id}: ${(err as Error).message}`);
    }
  }

  const sorted = Object.fromEntries(Object.entries(credits).sort(([a], [b]) => a.localeCompare(b)));
  await writeFile(CREDITS_FILE, JSON.stringify(sorted, null, 2) + "\n");

  console.log(`\nDownloaded ${downloaded} image(s).`);
  if (failures.length) {
    console.log(`${failures.length} failure(s):\n  ${failures.join("\n  ")}`);
    process.exitCode = 1;
  }
}

main();
