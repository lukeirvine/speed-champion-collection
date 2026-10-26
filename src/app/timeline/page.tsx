import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Thumb } from "@/components/Thumb";
import { allSets, years } from "@/data";

export const metadata: Metadata = { title: "Seasons" };

export default function TimelinePage() {
  const seasons = years()
    .reverse()
    .map((year) => ({ year, sets: allSets.filter((s) => s.year === year) }));

  return (
    <>
      <PageHeader eyebrow="Seasons" title="Release calendar" />

      <ol className="relative ml-2 border-l-2 border-base-300">
        {seasons.map(({ year, sets }) => {
          const owned = sets.filter((s) => s.owned).length;
          const complete = owned === sets.length;
          return (
            <li key={year} className="relative pb-10 pl-6 last:pb-0">
              <span
                className={`absolute -left-[9px] top-2 size-4 rounded-full border-2 ${
                  complete ? "border-success bg-success" : owned ? "border-success bg-base-100" : "border-base-content/30 bg-base-100"
                }`}
              />
              <div className="mb-3 flex flex-wrap items-baseline gap-3">
                <Link href={`/?year=${year}`} className="font-display text-3xl italic hover:text-primary">
                  {year}
                </Link>
                <span className="text-sm text-base-content/60">
                  <span className="font-display text-success">{owned}</span> / {sets.length} collected
                </span>
                {complete && <span className="badge badge-success badge-sm font-display">Full season</span>}
              </div>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8">
                {sets.map((set) => (
                  <Thumb key={set.setNum} set={set} />
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
