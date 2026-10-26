import type { Car } from "@/data";

/** Gran Turismo style meta badges: class, region, drivetrain, type, then free tags. */
export function GtBadges({ car, withTags = true }: { car: Car; withTags?: boolean }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <span className="badge badge-primary font-display">{car.gtCategory}</span>
      <span className="badge badge-secondary badge-outline">{car.region}</span>
      {car.drivetrain && <span className="badge badge-accent badge-outline">{car.drivetrain}</span>}
      <span className="badge badge-ghost">{car.carType}</span>
      {withTags &&
        car.tags.map((tag) => (
          <span key={tag} className="badge badge-ghost badge-outline text-base-content/70">
            {tag}
          </span>
        ))}
    </div>
  );
}
