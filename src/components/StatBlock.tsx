import type { Car } from "@/data";

const fmt = (n: number | null) => (n == null ? "—" : n.toLocaleString("en-US"));

export function StatBlock({ car }: { car: Car }) {
  const stats = [
    { title: "Power", value: fmt(car.powerHp), unit: "hp" },
    { title: "Torque", value: fmt(car.torqueNm), unit: "Nm" },
    { title: "0–100 km/h", value: fmt(car.zeroTo100), unit: "s" },
    { title: "Top speed", value: fmt(car.topSpeedKmh), unit: "km/h" },
    { title: "Weight", value: fmt(car.weightKg), unit: "kg" },
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.title} className="bg-base-200 px-4 py-3">
          <div className="text-xs uppercase tracking-widest text-base-content/50">{s.title}</div>
          <div className="font-display text-2xl text-base-content">
            {s.value}
            {s.value !== "—" && <span className="ml-1 text-sm text-base-content/50">{s.unit}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
