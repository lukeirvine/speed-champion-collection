import Link from "next/link";
import { pct, type Progress } from "@/data";

/** Labelled progress bars; each row links to the garage filtered by `param`. */
export function ProgressList({ title, rows, param }: { title: string; rows: Progress[]; param: string }) {
  return (
    <section className="card border border-base-300 bg-base-200">
      <div className="card-body gap-3">
        <h2 className="font-display text-lg uppercase tracking-wider">{title}</h2>
        <ul className="flex flex-col gap-2">
          {rows.map((r) => {
            const p = pct(r.owned, r.total);
            return (
              <li key={r.key}>
                <Link href={`/?${param}=${encodeURIComponent(r.key)}`} className="group block">
                  <div className="mb-0.5 flex justify-between text-sm">
                    <span className="group-hover:text-primary">{r.key}</span>
                    <span className="font-display text-base-content/60">
                      {r.owned}/{r.total}
                    </span>
                  </div>
                  <progress
                    className={`progress h-2 ${p === 100 ? "progress-success" : "progress-primary"}`}
                    value={r.owned}
                    max={r.total}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
