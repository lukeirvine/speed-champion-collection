import { Suspense } from "react";
import { Garage } from "@/components/Garage";
import { PageHeader } from "@/components/PageHeader";
import { RadialProgress } from "@/components/RadialProgress";
import { SetGrid } from "@/components/SetGrid";
import { allSets, pct, stats } from "@/data";

export default function Home() {
  const s = stats();
  const p = pct(s.ownedSets, s.totalSets);

  return (
    <>
      <PageHeader eyebrow="The Garage" title="Every Speed Champion, 2020 → now">
        <div className="flex items-center gap-4 rounded-box border border-base-300 bg-base-200 px-4 py-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-base-content/50">Collected</div>
            <div className="font-display text-2xl">
              <span className="text-success">{s.ownedSets}</span>
              <span className="text-base-content/40"> / {s.totalSets}</span>
            </div>
          </div>
          <RadialProgress value={p} />
        </div>
      </PageHeader>

      <Suspense fallback={<SetGrid sets={[...allSets].reverse()} />}>
        <Garage />
      </Suspense>
    </>
  );
}
