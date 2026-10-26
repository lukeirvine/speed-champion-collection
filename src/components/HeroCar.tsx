import Link from "next/link";
import { carImage, me, setImage, type Car, type LegoSet } from "@/data";
import { carStats } from "@/lib/units";
import { GtBadges } from "./GtBadges";
import { SetImage } from "./SetImage";

/** Banner for the car pinned in me.ts: real photo behind, LEGO model in front. */
export function HeroCar({ set, car }: { set: LegoSet; car: Car }) {
  const headline = carStats(car, me.units).filter((s) => s.value != null && s.title !== "Weight").slice(0, 3);

  return (
    <Link
      href={`/sets/${set.setNum}`}
      className="group relative mb-6 block overflow-hidden rounded-box border border-base-300 bg-base-200 transition hover:border-primary"
    >
      <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[3/1]">
        <SetImage
          src={carImage(car.id)}
          alt={`${car.make} ${car.model}`}
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
          sizes="(min-width: 1280px) 1280px, 100vw"
          priority
        />
        {/* Darken toward the text side so it stays readable on any photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/40 to-transparent sm:bg-gradient-to-r sm:from-base-100/95 sm:via-base-100/50" />
      </div>

      <div className="relative -mt-24 flex flex-col gap-3 p-5 sm:absolute sm:inset-y-0 sm:left-0 sm:mt-0 sm:max-w-xl sm:justify-center sm:p-8">
        <span className="slant w-fit bg-primary px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-content">
          <span>{set.favorite ? "♥ " : ""}Hero car</span>
        </span>
        <h2 className="font-display text-3xl italic leading-tight sm:text-5xl">
          <span className="block text-base text-base-content/60 sm:text-xl">
            {car.modelYear} {car.make}
          </span>{" "}
          {car.model}
        </h2>
        <GtBadges car={car} withTags={false} />
        {headline.length > 0 && (
          <dl className="flex gap-6">
            {headline.map((s) => (
              <div key={s.title}>
                <dt className="text-xs uppercase tracking-widest text-base-content/50">{s.title}</dt>
                <dd className="font-display text-2xl">
                  {s.value!.toLocaleString("en-US")}
                  <span className="ml-1 text-sm text-base-content/50">{s.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <figure className="absolute bottom-4 right-4 hidden aspect-[4/3] w-56 overflow-hidden rounded-box border-2 border-white/80 bg-white shadow-xl md:block lg:w-72">
        <SetImage src={setImage(set.setNum)} alt={`LEGO ${set.name}`} className="object-contain p-2" sizes="288px" />
        <figcaption className="absolute bottom-1 left-2 font-display text-xs text-neutral">{set.setNum}</figcaption>
      </figure>
    </Link>
  );
}
