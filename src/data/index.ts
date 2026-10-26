import { me } from "./me";
import { sets } from "./sets";
import credits from "./image-credits.json";
import type { Car, GTCategory, LegoSet, Region } from "./types";

export { me } from "./me";
export type { Car, GTCategory, LegoSet, Region } from "./types";

export interface ImageCredit {
  author: string | null;
  license: string | null;
  sourceUrl: string;
}

// Fail the build on a mistyped set number rather than silently ignoring it.
const unknown = [...me.owned, ...me.wishlist, ...me.favorites].filter((n) => !sets.some((s) => s.setNum === n));
if (unknown.length) {
  throw new Error(`me.ts lists set numbers that aren't in sets.ts: ${unknown.join(", ")}`);
}

/** Oldest first; within a year, by set number. */
export const allSets: LegoSet[] = sets
  .map((s) => ({
    ...s,
    owned: me.owned.includes(s.setNum),
    wishlist: me.wishlist.includes(s.setNum),
    favorite: me.favorites.includes(s.setNum),
  }))
  .sort((a, b) => a.year - b.year || a.setNum.localeCompare(b.setNum));

/** Full-size sets: completion is measured against these. */
export const mainSets = allSets.filter((s) => !s.polybag);

/** Small promo polybags: tracked as a bonus, outside the headline numbers. */
export const polybags = allSets.filter((s) => s.polybag);

/** What the list views show, per `me.showPolybags`. */
export const visibleSets = me.showPolybags ? allSets : mainSets;

/** The car pinned by `me.heroCar` (a car id, or a set number meaning its first car). */
export const hero: { set: LegoSet; car: Car } | undefined = (() => {
  if (!me.heroCar) return undefined;
  const matches = allSets.filter((s) => s.setNum === me.heroCar || s.cars.some((c) => c.id === me.heroCar));
  // Prefer the full set over a polybag of the same car.
  const set = matches.find((s) => !s.polybag) ?? matches[0];
  if (!set) throw new Error(`me.ts heroCar "${me.heroCar}" isn't a car id or set number in sets.ts`);
  return { set, car: set.cars.find((c) => c.id === me.heroCar) ?? set.cars[0] };
})();

/** "Luke's", "James'"; empty when no name is set. */
export const ownerPossessive = me.firstName
  ? `${me.firstName}${me.firstName.endsWith("s") ? "'" : "'s"}`
  : "";

/** e.g. "Luke's Speed Champions" */
export const siteName = [ownerPossessive, "Speed Champions"].filter(Boolean).join(" ");

export const GT_ORDER: GTCategory[] = [
  "N100",
  "N200",
  "N300",
  "N400",
  "N500",
  "N600",
  "N700",
  "N800",
  "N1000",
  "Gr.4",
  "Gr.3",
  "Gr.2",
  "Gr.1",
  "Gr.B",
  "Gr.X",
];

export const REGIONS: Region[] = ["American", "European", "Japanese"];

export const setImage = (setNum: string) => `/images/sets/${setNum}.webp`;
export const carImage = (carId: string) => `/images/cars/${carId}.webp`;

export function getSet(setNum: string): LegoSet | undefined {
  return allSets.find((s) => s.setNum === setNum);
}

export function neighbors(setNum: string) {
  // A hidden polybag's page still steps through every set.
  const list = visibleSets.some((s) => s.setNum === setNum) ? visibleSets : allSets;
  const i = list.findIndex((s) => s.setNum === setNum);
  return { prev: list[i - 1], next: list[i + 1] };
}

export function imageCredit(carId: string): ImageCredit | undefined {
  return (credits as Record<string, ImageCredit>)[carId];
}

const uniq = <T,>(xs: T[]) => [...new Set(xs)];

export const setBrands = (set: LegoSet) => uniq(set.cars.map((c) => c.make));

export const years = () => uniq(visibleSets.map((s) => s.year));

export const brands = () =>
  uniq(visibleSets.flatMap(setBrands)).sort((a, b) => a.localeCompare(b));

export interface Progress {
  key: string;
  owned: number;
  total: number;
}

/** Counts main sets per group key; a set with cars in two groups counts toward both. */
function progressBy(keysOf: (s: LegoSet) => string[], order?: string[]): Progress[] {
  const map = new Map<string, Progress>();
  for (const set of mainSets) {
    for (const key of uniq(keysOf(set))) {
      const p = map.get(key) ?? { key, owned: 0, total: 0 };
      p.total++;
      if (set.owned) p.owned++;
      map.set(key, p);
    }
  }
  const rows = [...map.values()];
  return order
    ? rows.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key))
    : rows.sort((a, b) => b.total - a.total || a.key.localeCompare(b.key));
}

export const progressByYear = () =>
  progressBy((s) => [String(s.year)], years().map(String));
export const progressByBrand = () => progressBy(setBrands);
export const progressByGT = () =>
  progressBy((s) => s.cars.map((c) => c.gtCategory), GT_ORDER);
export const progressByRegion = () =>
  progressBy((s) => s.cars.map((c) => c.region), REGIONS);

/** Headline numbers cover main sets only; polybags are reported on their own. */
export function stats() {
  const owned = mainSets.filter((s) => s.owned);
  const sum = (xs: LegoSet[], f: (s: LegoSet) => number) =>
    xs.reduce((n, s) => n + f(s), 0);
  return {
    totalSets: mainSets.length,
    ownedSets: owned.length,
    totalCars: uniq(mainSets.flatMap((s) => s.cars.map((c) => c.id))).length,
    ownedCars: uniq(owned.flatMap((s) => s.cars.map((c) => c.id))).length,
    totalPieces: sum(mainSets, (s) => s.pieces),
    ownedPieces: sum(owned, (s) => s.pieces),
    ownedBrands: uniq(owned.flatMap(setBrands)).length,
    totalBrands: uniq(mainSets.flatMap(setBrands)).length,
    ownedPolybags: polybags.filter((s) => s.owned).length,
    totalPolybags: polybags.length,
  };
}

export const pct = (owned: number, total: number) =>
  total ? Math.round((owned / total) * 100) : 0;
