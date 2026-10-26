import Link from "next/link";
import { setImage, type LegoSet } from "@/data";
import { OwnedBadge } from "./OwnedBadge";
import { SetImage } from "./SetImage";

export function SetCard({ set }: { set: LegoSet }) {
  return (
    <Link
      href={`/sets/${set.setNum}`}
      className={`group card overflow-hidden border bg-base-200 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/10 ${
        set.owned ? "border-success/40" : "border-base-300"
      }`}
    >
      <figure className="relative aspect-[4/3] bg-white">
        <SetImage
          src={setImage(set.setNum)}
          alt={set.name}
          className={`object-contain p-3 transition ${
            set.owned ? "" : "opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0"
          }`}
        />
        <span className="badge badge-neutral slant absolute left-2 top-2 font-display text-xs">
          <span>{set.setNum}</span>
        </span>
        <OwnedBadge owned={set.owned} className="absolute right-2 top-2" />
      </figure>
      <div className={`h-1 ${set.owned ? "bg-success" : "kerb opacity-40 group-hover:opacity-100"}`} />
      <div className="card-body gap-1 p-4">
        <h2 className="card-title text-base leading-tight">{set.name}</h2>
        <div className="flex items-center gap-2 text-xs text-base-content/60">
          <span>{set.year}</span>
          <span>·</span>
          <span>{set.pieces} pcs</span>
          {set.cars.length > 1 && (
            <>
              <span>·</span>
              <span>{set.cars.length} cars</span>
            </>
          )}
          {set.polybag && <span className="badge badge-ghost badge-xs">Polybag</span>}
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          {[...new Set(set.cars.map((c) => c.gtCategory))].map((gt) => (
            <span key={gt} className="badge badge-primary badge-outline badge-sm font-display">
              {gt}
            </span>
          ))}
          {[...new Set(set.cars.map((c) => c.region))].map((r) => (
            <span key={r} className="badge badge-ghost badge-sm">
              {r}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
