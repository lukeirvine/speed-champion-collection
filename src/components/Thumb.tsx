import Link from "next/link";
import { setImage, type LegoSet } from "@/data";
import { SetImage } from "./SetImage";

/** Small set tile: lit when owned, dimmed when missing. */
export function Thumb({ set }: { set: LegoSet }) {
  return (
    <Link
      href={`/sets/${set.setNum}`}
      title={`${set.setNum} ${set.name}${set.owned ? " (owned)" : ""}`}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-md border bg-white transition hover:border-primary ${
        set.owned ? "border-success ring-1 ring-success/50" : "border-base-300"
      }`}
    >
      <SetImage
        src={setImage(set.setNum)}
        alt={set.name}
        sizes="160px"
        className={`object-contain p-1 transition ${set.owned ? "" : "opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}
      />
      {set.owned && <span className="absolute right-1 top-1 size-2.5 rounded-full bg-success ring-2 ring-white" />}
    </Link>
  );
}
