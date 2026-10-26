import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="font-display text-3xl italic sm:text-4xl">{title}</h1>
      </div>
      {children}
    </div>
  );
}
