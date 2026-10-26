import type { Metadata } from "next";
import { Russo_One, Titillium_Web } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { me, ownerPossessive, siteName } from "@/data";
import { OG_IMAGE } from "@/lib/og";
import { teamColorVars } from "@/lib/theme";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const russo = Russo_One({
  variable: "--font-russo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: [ownerPossessive, "LEGO Speed Champions Collection"].filter(Boolean).join(" "),
    template: `%s · ${siteName}`,
  },
  description: `${ownerPossessive || "A"} LEGO Speed Champions collection.`,
  openGraph: { images: [OG_IMAGE] },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="pitlane"
      className={`${titillium.variable} ${russo.variable} h-full antialiased`}
      style={teamColorVars(me.teamColor)}
    >
      <body className="carbon-bg flex min-h-full flex-col font-sans">
        <Navbar owner={ownerPossessive} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-24 pt-6 md:pb-12">{children}</main>
        <footer className="hidden md:block">
          <div className="kerb" />
          <p className="bg-base-200 py-3 text-center text-xs text-base-content/40">
            LEGO® and Speed Champions are trademarks of the LEGO Group. Car photos via Wikimedia Commons.
          </p>
        </footer>
      </body>
    </html>
  );
}
