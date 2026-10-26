import type { LegoSet } from "@/data";
import { SetCard } from "./SetCard";

export function SetGrid({ sets }: { sets: LegoSet[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sets.map((set) => (
        <SetCard key={set.setNum} set={set} />
      ))}
    </div>
  );
}
