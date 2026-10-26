/**
 * Gran Turismo 7 style categories.
 * - N100–N1000: road cars, bucketed by power (N300 = up to ~300 hp, N1000 = 800 hp and up).
 * - Gr.1: prototype / hypercar racers (LMP, LMH, LMDh, Group C).
 * - Gr.2: GT500 / DTM-style touring racers.
 * - Gr.3: GT3 racers.
 * - Gr.4: GT4 and one-make cup racers.
 * - Gr.B: rally cars.
 * - Gr.X: everything else: F1 and other open-wheelers, dragsters, stock cars,
 *   Vision GT concepts, fictional cars and track-only specials. (Real road cars
 *   that starred in films keep their N class.)
 */
export type GTCategory =
  | "N100"
  | "N200"
  | "N300"
  | "N400"
  | "N500"
  | "N600"
  | "N700"
  | "N800"
  | "N1000"
  | "Gr.1"
  | "Gr.2"
  | "Gr.3"
  | "Gr.4"
  | "Gr.B"
  | "Gr.X";

export type Region = "American" | "European" | "Japanese";

/** Engine position + driven wheels, as Gran Turismo abbreviates it. */
export type Drivetrain = "FR" | "MR" | "RR" | "FF" | "4WD";

export type CarType = "Road" | "Race" | "Concept" | "Fictional";

export interface Car {
  /** Kebab-case id, also the image filename: public/images/cars/{id}.webp */
  id: string;
  make: string;
  model: string;
  /** The model year LEGO depicts (or first year of production). */
  modelYear: number;
  country: string;
  region: Region;
  gtCategory: GTCategory;
  carType: CarType;
  drivetrain: Drivetrain | null;
  engine: string | null;
  powerHp: number | null;
  torqueNm: number | null;
  weightKg: number | null;
  topSpeedKmh: number | null;
  /** 0–100 km/h in seconds. */
  zeroTo100: number | null;
  tags: string[];
  /** English Wikipedia article title used for the real-car photo and the "Read more" link. */
  wikipedia: string;
  /** Optional Wikimedia Commons file (e.g. "File:Foo.jpg") to use instead of the article's lead image. */
  photo?: string;
  description: string;
}

/** A set as listed in the catalog (sets.ts). */
export interface CatalogSet {
  setNum: string;
  name: string;
  year: number;
  pieces: number;
  /** Small promotional polybag sets (30xxx). */
  polybag?: boolean;
  cars: Car[];
}

/** A catalog set joined with your personal data (me.ts). */
export interface LegoSet extends CatalogSet {
  owned: boolean;
  wishlist: boolean;
}

/** Preset accent colours; see src/lib/theme.ts. */
export type TeamColor =
  | "racing-red"
  | "ferrari"
  | "mclaren"
  | "mercedes"
  | "red-bull"
  | "aston-martin"
  | "alpine"
  | "williams"
  | "gulf";

export interface Profile {
  /** Shown in the tab title and header, e.g. "Luke's Speed Champions". Leave "" for a generic name. */
  firstName: string;
  /** Set numbers you own. */
  owned: string[];
  /** Set numbers you'd like next. */
  wishlist: string[];
  /** metric: km/h, kg, Nm, 0–100 km/h. imperial: mph, lb, lb-ft, 0–62 mph. */
  units: "metric" | "imperial";
  /** A preset name, or any hex colour like "#ff8000". */
  teamColor: TeamColor | `#${string}`;
}
