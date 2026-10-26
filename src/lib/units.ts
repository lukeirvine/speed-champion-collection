import type { Car, Profile } from "@/data/types";

export interface Stat {
  title: string;
  value: number | null;
  unit: string;
}

const conv = (n: number | null, factor: number) => (n == null ? null : Math.round(n * factor));

/** The car's headline stats in the chosen units. Catalog values are metric. */
export function carStats(car: Car, units: Profile["units"]): Stat[] {
  const imperial = units === "imperial";
  return [
    { title: "Power", value: car.powerHp, unit: "hp" },
    imperial
      ? { title: "Torque", value: conv(car.torqueNm, 0.73756), unit: "lb-ft" }
      : { title: "Torque", value: car.torqueNm, unit: "Nm" },
    // 100 km/h ≈ 62 mph, so the same time is valid in both systems.
    { title: imperial ? "0–62 mph" : "0–100 km/h", value: car.zeroTo100, unit: "s" },
    imperial
      ? { title: "Top speed", value: conv(car.topSpeedKmh, 0.621371), unit: "mph" }
      : { title: "Top speed", value: car.topSpeedKmh, unit: "km/h" },
    imperial
      ? { title: "Weight", value: conv(car.weightKg, 2.20462), unit: "lb" }
      : { title: "Weight", value: car.weightKg, unit: "kg" },
  ];
}
