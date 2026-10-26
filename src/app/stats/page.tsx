import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProgressList } from "@/components/ProgressList";
import { RadialProgress } from "@/components/RadialProgress";
import { me, pct, progressByBrand, progressByGT, progressByRegion, progressByYear, stats } from "@/data";

export const metadata: Metadata = { title: "Pit Wall" };

export default function StatsPage() {
  const s = stats();
  const tiles = [
    { label: "Sets", owned: s.ownedSets, total: s.totalSets },
    { label: "Cars", owned: s.ownedCars, total: s.totalCars },
    { label: "Brands", owned: s.ownedBrands, total: s.totalBrands },
    { label: "Pieces", owned: s.ownedPieces, total: s.totalPieces },
  ];

  return (
    <>
      <PageHeader eyebrow="Pit Wall" title="Collection telemetry" />

      <div className="mb-6 grid gap-4 lg:grid-cols-[auto_1fr]">
        <div className="card items-center justify-center border border-base-300 bg-base-200 p-6">
          <RadialProgress
            value={pct(s.ownedSets, s.totalSets)}
            size="9rem"
            thickness="10px"
            className="text-primary text-3xl"
          />
          <p className="mt-3 text-xs uppercase tracking-widest text-base-content/50">Overall completion</p>
          {me.showPolybags && (
            <p className="mt-1 text-xs text-base-content/50">
              + {s.ownedPolybags} / {s.totalPolybags} bonus polybags
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 xl:grid-cols-4">
          {tiles.map((t) => (
            <div key={t.label} className="flex flex-col justify-center bg-base-200 p-5">
              <div className="text-xs uppercase tracking-widest text-base-content/50">{t.label}</div>
              <div className="font-display text-3xl">
                <span className="text-success">{t.owned.toLocaleString("en-US")}</span>
                <span className="text-lg text-base-content/40"> / {t.total.toLocaleString("en-US")}</span>
              </div>
              <progress className="progress progress-success mt-2 h-1.5" value={t.owned} max={t.total} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-4">
        <ProgressList title="By season" rows={progressByYear()} param="year" />
        <ProgressList title="By GT class" rows={progressByGT()} param="gt" />
        <ProgressList title="By region" rows={progressByRegion()} param="region" />
        <ProgressList title="By brand" rows={progressByBrand()} param="brand" />
      </div>
    </>
  );
}
