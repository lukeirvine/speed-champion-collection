import type { LegoSet } from "@/data";

export function OwnedBadge({ set, className = "" }: { set: LegoSet; className?: string }) {
  if (set.owned) {
    return (
      <span className={`badge badge-success slant font-display text-xs ${className}`}>
        <span>✓ In garage</span>
      </span>
    );
  }
  if (set.wishlist) {
    return (
      <span className={`badge badge-secondary slant font-display text-xs ${className}`}>
        <span>★ Wishlist</span>
      </span>
    );
  }
  return (
    <span className={`badge badge-neutral slant text-xs uppercase tracking-wide ${className}`}>
      <span>Missing</span>
    </span>
  );
}
