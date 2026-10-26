import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";
import { GtBadges } from "@/components/GtBadges";
import { OwnedBadge } from "@/components/OwnedBadge";
import { SetImage } from "@/components/SetImage";
import { StatBlock } from "@/components/StatBlock";
import { allSets, carImage, getSet, imageCredit, neighbors, setImage, type Car, type LegoSet } from "@/data";

export function generateStaticParams() {
  return allSets.map((s) => ({ setNum: s.setNum }));
}

export async function generateMetadata({ params }: PageProps<"/sets/[setNum]">): Promise<Metadata> {
  const set = getSet((await params).setNum);
  return { title: set ? `${set.setNum} ${set.name}` : "Not found" };
}

function Frame({ label, children, light }: { label: string; children: ReactNode; light?: boolean }) {
  return (
    <figure className={`relative aspect-[4/3] overflow-hidden rounded-box border border-base-300 ${light ? "bg-white" : "bg-base-300"}`}>
      {children}
      <figcaption className="slant absolute bottom-3 left-3 bg-base-100/90 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest">
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}

const LegoFrame = ({ set }: { set: LegoSet }) => (
  <Frame label="LEGO model" light>
    <SetImage src={setImage(set.setNum)} alt={`LEGO ${set.name}`} className="object-contain p-6" sizes="(min-width: 1024px) 50vw, 100vw" priority />
  </Frame>
);

const CarFrame = ({ car }: { car: Car }) => (
  <Frame label="The real thing">
    <SetImage src={carImage(car.id)} alt={`${car.make} ${car.model}`} className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
  </Frame>
);

/**
 * Radio tabs (no JS). `panes` are [label, content] pairs.
 * `bottom` puts the tabs under bare content, so its top edge lines up with neighbours.
 */
function Tabs({ name, panes, bottom }: { name: string; panes: [string, ReactNode][]; bottom?: boolean }) {
  return (
    <div className={bottom ? "tabs tabs-border tabs-bottom" : "tabs tabs-lift"}>
      {panes.map(([label, content], i) => (
        <Fragment key={label}>
          <input type="radio" name={name} className="tab" aria-label={label} defaultChecked={i === 0} />
          <div className={bottom ? "tab-content pb-1" : "tab-content border-base-300 bg-base-200 p-2"}>
            {content}
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function CarSection({ car }: { car: Car }) {
  const credit = imageCredit(car.id);
  return (
    <section className="card border border-base-300 bg-base-200">
      <div className="card-body gap-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl italic">
            <span className="text-base-content/50">{car.modelYear}</span> {car.make} {car.model}
          </h2>
          <span className="text-sm text-base-content/60">{car.country}</span>
        </div>
        <GtBadges car={car} />
        <p className="max-w-3xl text-base-content/80">{car.description}</p>
        <StatBlock car={car} />
        <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm">
          <div>
            <span className="text-base-content/50">Engine </span>
            {car.engine ?? "—"}
          </div>
          <div>
            <span className="text-base-content/50">Layout </span>
            {car.drivetrain ?? "—"}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-base-300 pt-3 text-xs text-base-content/50">
          <a
            href={`https://en.wikipedia.org/wiki/${car.wikipedia}`}
            target="_blank"
            rel="noreferrer"
            className="link link-hover text-accent"
          >
            Read more on Wikipedia →
          </a>
          {credit && (
            <span>
              Photo:{" "}
              <a href={credit.sourceUrl} target="_blank" rel="noreferrer" className="link link-hover">
                {credit.author ?? "Wikimedia Commons"}
              </a>
              {credit.license && ` · ${credit.license}`}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function SetPage({ params }: PageProps<"/sets/[setNum]">) {
  const { setNum } = await params;
  const set = getSet(setNum);
  if (!set) notFound();
  const { prev, next } = neighbors(setNum);
  const carPanes = set.cars.map((c): [string, ReactNode] => [c.model, <CarFrame key={c.id} car={c} />]);

  return (
    <>
      <div className="breadcrumbs mb-2 text-sm">
        <ul>
          <li>
            <Link href="/">Garage</Link>
          </li>
          <li>
            <Link href={`/?year=${set.year}`}>{set.year}</Link>
          </li>
          <li>{set.setNum}</li>
        </ul>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="badge badge-neutral slant badge-lg font-display">
          <span>{set.setNum}</span>
        </span>
        <h1 className="font-display text-3xl italic sm:text-4xl">{set.name}</h1>
        <OwnedBadge set={set} />
      </div>

      {/* Desktop: LEGO model beside the real car(s) */}
      <div className="mb-8 hidden gap-4 lg:grid lg:grid-cols-2">
        <LegoFrame set={set} />
        {carPanes.length === 1 ? carPanes[0][1] : <Tabs name="car-desktop" panes={carPanes} bottom />}
      </div>

      {/* Mobile: tab between LEGO and real */}
      <div className="mb-8 lg:hidden">
        <Tabs
          name="hero-mobile"
          panes={[
            ["LEGO", <LegoFrame key="lego" set={set} />],
            ...set.cars.map((c): [string, ReactNode] => [
              set.cars.length > 1 ? c.model : "Real car",
              <CarFrame key={c.id} car={c} />,
            ]),
          ]}
        />
      </div>

      <div className="mb-8 grid grid-cols-3 gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 text-center">
        {[
          ["Released", set.year],
          ["Pieces", set.pieces],
          ["Cars", set.cars.length],
        ].map(([label, value]) => (
          <div key={label} className="bg-base-200 py-3">
            <div className="text-xs uppercase tracking-widest text-base-content/50">{label}</div>
            <div className="font-display text-2xl">{value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {set.cars.map((car) => (
          <CarSection key={car.id} car={car} />
        ))}
      </div>

      <div className="kerb mt-10 opacity-60" />
      <nav className="mt-4 flex justify-between gap-4">
        {prev ? (
          <Link href={`/sets/${prev.setNum}`} className="btn btn-ghost max-w-[48%] justify-start truncate">
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/sets/${next.setNum}`} className="btn btn-ghost max-w-[48%] justify-end truncate">
            {next.name} →
          </Link>
        )}
      </nav>
    </>
  );
}
