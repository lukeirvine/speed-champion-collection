import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Thumb } from "@/components/Thumb";
import { allSets, progressByBrand, setBrands } from "@/data";

export const metadata: Metadata = { title: "Brands" };

export default function BrandsPage() {
  const rows = progressByBrand();

  return (
    <>
      <PageHeader eyebrow="Garage by marque" title="Brands" />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {rows.map(({ key: brand, owned, total }) => {
          const sets = allSets.filter((s) => setBrands(s).includes(brand));
          return (
            <section key={brand} className="card border border-base-300 bg-base-200">
              <div className="card-body gap-3 p-5">
                <div className="flex items-baseline justify-between gap-2">
                  <Link href={`/?brand=${encodeURIComponent(brand)}`} className="font-display text-xl italic hover:text-primary">
                    {brand}
                  </Link>
                  <span className="font-display text-base-content/60">
                    <span className={owned ? "text-success" : ""}>{owned}</span> / {total}
                  </span>
                </div>
                <progress
                  className={`progress h-1.5 ${owned === total ? "progress-success" : "progress-primary"}`}
                  value={owned}
                  max={total}
                />
                <div className="grid grid-cols-4 gap-2">
                  {sets.map((set) => (
                    <Thumb key={set.setNum} set={set} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
