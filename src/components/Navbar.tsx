"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Garage", icon: "M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" },
  { href: "/timeline", label: "Seasons", icon: "M8 3v4M16 3v4M3 9h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" },
  { href: "/brands", label: "Brands", icon: "M4 21V4M4 4h12l-2 4 2 4H4" },
  { href: "/stats", label: "Pit Wall", icon: "M4 20V10M10 20V4M16 20v-7M22 20H2" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" || pathname.startsWith("/sets") : pathname.startsWith(href);
}

export function Navbar({ owner }: { owner: string }) {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100/90 backdrop-blur">
        <div className="checkered" />
        <nav className="navbar mx-auto max-w-7xl px-4">
          <div className="flex-1">
            <Link href="/" className="flex items-center gap-2">
              {owner && <span className="font-display text-lg italic tracking-wider text-base-content/60">{owner.toUpperCase()}</span>}
              <span className="slant bg-primary px-2 py-0.5 font-display text-lg text-primary-content">
                <span>SPEED</span>
              </span>
              <span className="font-display text-lg tracking-wider">CHAMPIONS</span>
            </Link>
          </div>
          <ul className="menu menu-horizontal hidden gap-1 p-0 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`font-display text-sm uppercase ${isActive(pathname, l.href) ? "menu-active" : ""}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="dock dock-sm z-30 border-t border-base-300 bg-base-200 md:hidden">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(pathname, l.href) ? "dock-active text-primary" : ""}>
            <Icon d={l.icon} />
            <span className="dock-label">{l.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
