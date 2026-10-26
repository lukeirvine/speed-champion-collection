import { me, type Car } from "@/data";
import { carStats } from "@/lib/units";

export function StatBlock({ car }: { car: Car }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 sm:grid-cols-3 lg:grid-cols-5">
      {carStats(car, me.units).map((s) => (
        <div key={s.title} className="bg-base-200 px-4 py-3">
          <div className="text-xs uppercase tracking-widest text-base-content/50">{s.title}</div>
          <div className="font-display text-2xl text-base-content">
            {s.value == null ? (
              "—"
            ) : (
              <>
                {s.value.toLocaleString("en-US")}
                <span className="ml-1 text-sm text-base-content/50">{s.unit}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
