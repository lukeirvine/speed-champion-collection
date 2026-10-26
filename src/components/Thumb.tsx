import Link from "next/link";
import { setImage, type LegoSet } from "@/data";
import { SetImage } from "./SetImage";

/** Small set tile: lit when owned, dimmed when missing, gold-ringed when wishlisted. */
export function Thumb({ set }: { set: LegoSet }) {
  return (
    <Link
      href={`/sets/${set.setNum}`}
      title={`${set.setNum} ${set.name}${set.owned ? " (owned)" : set.wishlist ? " (wishlist)" : ""}`}
      className={`group relative block aspect-[4/3] overflow-hidden rounded-md border bg-white transition hover:border-primary ${
        set.owned
          ? "border-success ring-1 ring-success/50"
          : set.wishlist
            ? "border-secondary ring-1 ring-secondary/50"
            : "border-base-300"
      }`}
    >
      <SetImage
        src={setImage(set.setNum)}
        alt={set.name}
        sizes="160px"
        className={`object-contain p-1 transition ${set.owned ? "" : "opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0"}`}
      />
      {set.favorite && <span className="absolute bottom-0.5 left-1 text-sm leading-none text-primary">♥</span>}
      {(set.owned || set.wishlist) && (
        <span
          className={`absolute right-1 top-1 size-2.5 rounded-full ring-2 ring-white ${set.owned ? "bg-success" : "bg-secondary"}`}
        />
      )}
    </Link>
  );
}
