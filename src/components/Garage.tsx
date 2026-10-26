"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { allSets, brands, GT_ORDER, REGIONS, years } from "@/data";
import { applyFilters, DEFAULT_FILTERS, parseFilters, toSearchParams, type Filters, type Show } from "@/lib/filter";
import { SetGrid } from "./SetGrid";

const ownedCount = allSets.filter((s) => s.owned).length;
const SHOW_TABS: { value: Show; label: string; count: number }[] = [
  { value: "all", label: "All", count: allSets.length },
  { value: "owned", label: "Owned", count: ownedCount },
  { value: "missing", label: "Missing", count: allSets.length - ownedCount },
  { value: "wishlist", label: "Wishlist", count: allSets.filter((s) => s.wishlist).length },
];
const favoriteCount = allSets.filter((s) => s.favorite).length;
const gtOptions = GT_ORDER.filter((gt) => allSets.some((s) => s.cars.some((c) => c.gtCategory === gt)));

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <select
      aria-label={label}
      className={`select select-sm w-auto ${value ? "select-primary" : ""}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function Garage() {
  const router = useRouter();
  const pathname = usePathname();
  const filters = parseFilters(useSearchParams());
  const results = applyFilters(allSets, filters);
  // Local copy so typing isn't fighting the async URL update.
  const [query, setQuery] = useState(filters.q);
  // ...but clear it when the URL drops the query (e.g. the Garage nav link).
  const [hadQuery, setHadQuery] = useState(!!filters.q);
  if (hadQuery !== !!filters.q) {
    setHadQuery(!!filters.q);
    if (!filters.q) setQuery("");
  }

  const update = (patch: Partial<Filters>) => {
    const qs = toSearchParams({ ...filters, ...patch }).toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };
  const isFiltered = toSearchParams({ ...filters, sort: DEFAULT_FILTERS.sort }).size > 0;

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 rounded-box border border-base-300 bg-base-200/80 p-3 backdrop-blur lg:flex-row lg:items-center">
        <div role="tablist" className="tabs tabs-box tabs-sm shrink-0 flex-nowrap bg-base-300 [&>.tab]:px-2.5">
          {SHOW_TABS.map((t) => (
            <button
              key={t.value}
              role="tab"
              className={`tab gap-1.5 font-display ${filters.show === t.value ? "tab-active" : ""}`}
              onClick={() => update({ show: t.value })}
            >
              {t.label}
              <span className="text-xs opacity-60">{t.count}</span>
            </button>
          ))}
        </div>

        <button
          className={`btn btn-sm shrink-0 ${filters.fav ? "btn-primary" : "btn-ghost text-base-content/70"}`}
          aria-pressed={!!filters.fav}
          onClick={() => update({ fav: filters.fav ? "" : "1" })}
        >
          ♥ Favorites <span className="text-xs opacity-60">{favoriteCount}</span>
        </button>

        <label className="input input-sm w-full lg:max-w-56">
          <svg className="size-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search cars, tags, set #"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              update({ q: e.target.value });
            }}
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <Select label="Year" value={filters.year} options={years().map(String)} onChange={(year) => update({ year })} />
          <Select label="Brand" value={filters.brand} options={brands()} onChange={(brand) => update({ brand })} />
          <Select label="GT class" value={filters.gt} options={gtOptions} onChange={(gt) => update({ gt })} />
          <Select label="Region" value={filters.region} options={REGIONS} onChange={(region) => update({ region })} />
          <select
            aria-label="Sort"
            className="select select-sm w-auto"
            value={filters.sort}
            onChange={(e) => update({ sort: e.target.value as Filters["sort"] })}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="name">Name A–Z</option>
            <option value="pieces">Most pieces</option>
          </select>
          {isFiltered && (
            <button className="btn btn-ghost btn-sm text-primary" onClick={() => router.replace(pathname, { scroll: false })}>
              Reset
            </button>
          )}
        </div>
      </div>

      <p className="mb-3 text-sm text-base-content/60">
        Showing <span className="font-display text-base-content">{results.length}</span> of {allSets.length} sets
      </p>

      {results.length ? (
        <SetGrid sets={results} />
      ) : (
        <div className="rounded-box border border-dashed border-base-300 p-12 text-center text-base-content/60">
          No sets match. Box, box — try loosening the filters.
        </div>
      )}
    </>
  );
}
