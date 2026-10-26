import { setBrands, type LegoSet } from "@/data";

export type Show = "all" | "owned" | "missing" | "wishlist";
export type Sort = "newest" | "oldest" | "name" | "pieces";

export interface Filters {
  show: Show;
  /** "1" = favorites only */
  fav: string;
  q: string;
  year: string;
  brand: string;
  gt: string;
  region: string;
  sort: Sort;
}

export const DEFAULT_FILTERS: Filters = {
  show: "all",
  fav: "",
  q: "",
  year: "",
  brand: "",
  gt: "",
  region: "",
  sort: "newest",
};

export function parseFilters(params: URLSearchParams): Filters {
  const f = { ...DEFAULT_FILTERS };
  for (const key of Object.keys(f) as (keyof Filters)[]) {
    const v = params.get(key);
    if (v) (f as Record<string, string>)[key] = v;
  }
  return f;
}

/** Only non-default values, so URLs stay short. */
export function toSearchParams(f: Filters): URLSearchParams {
  const p = new URLSearchParams();
  for (const [key, v] of Object.entries(f)) {
    if (v && v !== DEFAULT_FILTERS[key as keyof Filters]) p.set(key, v);
  }
  return p;
}

function matchesQuery(set: LegoSet, q: string) {
  const haystack = [
    set.setNum,
    set.name,
    ...set.cars.flatMap((c) => [c.make, c.model, c.country, ...c.tags]),
  ]
    .join(" ")
    .toLowerCase();
  return q
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word));
}

export function applyFilters(sets: LegoSet[], f: Filters): LegoSet[] {
  const result = sets.filter(
    (s) =>
      (f.show === "all" ||
        (f.show === "owned" && s.owned) ||
        (f.show === "missing" && !s.owned) ||
        (f.show === "wishlist" && s.wishlist)) &&
      (!f.fav || s.favorite) &&
      (!f.q || matchesQuery(s, f.q)) &&
      (!f.year || String(s.year) === f.year) &&
      (!f.brand || setBrands(s).includes(f.brand)) &&
      (!f.gt || s.cars.some((c) => c.gtCategory === f.gt)) &&
      (!f.region || s.cars.some((c) => c.region === f.region)),
  );
  const bySetNum = (a: LegoSet, b: LegoSet) => a.setNum.localeCompare(b.setNum);
  const sorters: Record<Sort, (a: LegoSet, b: LegoSet) => number> = {
    newest: (a, b) => b.year - a.year || bySetNum(b, a),
    oldest: (a, b) => a.year - b.year || bySetNum(a, b),
    name: (a, b) => a.name.localeCompare(b.name),
    pieces: (a, b) => b.pieces - a.pieces,
  };
  return result.sort(sorters[f.sort] ?? sorters.newest);
}
