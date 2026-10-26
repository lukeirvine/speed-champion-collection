import { sets } from "./sets";
import credits from "./image-credits.json";
import type { Car, GTCategory, LegoSet, Region } from "./types";

export type { Car, GTCategory, LegoSet, Region } from "./types";

export interface ImageCredit {
  author: string | null;
  license: string | null;
  sourceUrl: string;
}

/** Oldest first; within a year, by set number. */
export const allSets: LegoSet[] = [...sets].sort(
  (a, b) => a.year - b.year || a.setNum.localeCompare(b.setNum),
);

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
  const i = allSets.findIndex((s) => s.setNum === setNum);
  return { prev: allSets[i - 1], next: allSets[i + 1] };
}

export function imageCredit(carId: string): ImageCredit | undefined {
  return (credits as Record<string, ImageCredit>)[carId];
}

const uniq = <T,>(xs: T[]) => [...new Set(xs)];

export const setBrands = (set: LegoSet) => uniq(set.cars.map((c) => c.make));

export const years = () => uniq(allSets.map((s) => s.year));

export const brands = () =>
  uniq(allSets.flatMap(setBrands)).sort((a, b) => a.localeCompare(b));

export function allCars(): (Car & { set: LegoSet })[] {
  return allSets.flatMap((set) => set.cars.map((car) => ({ ...car, set })));
}

export interface Progress {
  key: string;
  owned: number;
  total: number;
}

/** Counts sets per group key; a set with cars in two groups counts toward both. */
function progressBy(keysOf: (s: LegoSet) => string[], order?: string[]): Progress[] {
  const map = new Map<string, Progress>();
  for (const set of allSets) {
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

export function stats() {
  const owned = allSets.filter((s) => s.owned);
  const sum = (xs: LegoSet[], f: (s: LegoSet) => number) =>
    xs.reduce((n, s) => n + f(s), 0);
  return {
    totalSets: allSets.length,
    ownedSets: owned.length,
    // Unique cars: a polybag and a full set can depict the same car.
    totalCars: uniq(allSets.flatMap((s) => s.cars.map((c) => c.id))).length,
    ownedCars: uniq(owned.flatMap((s) => s.cars.map((c) => c.id))).length,
    totalPieces: sum(allSets, (s) => s.pieces),
    ownedPieces: sum(owned, (s) => s.pieces),
    ownedBrands: uniq(owned.flatMap(setBrands)).length,
    totalBrands: brands().length,
  };
}

export const pct = (owned: number, total: number) =>
  total ? Math.round((owned / total) * 100) : 0;
