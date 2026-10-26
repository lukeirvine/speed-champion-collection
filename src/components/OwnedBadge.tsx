export function OwnedBadge({ owned, className = "" }: { owned: boolean; className?: string }) {
  return owned ? (
    <span className={`badge badge-success slant font-display text-xs ${className}`}>
      <span>✓ In garage</span>
    </span>
  ) : (
    <span className={`badge badge-neutral slant text-xs uppercase tracking-wide ${className}`}>
      <span>Missing</span>
    </span>
  );
}
