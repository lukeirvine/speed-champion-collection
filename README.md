# Speed Champions Garage

A personal tracker for LEGO Speed Champions sets (8-wide era, 2020 onward). It's built with Next.js, Tailwind and daisyUI, in a dark "Pit Lane Night" theme. There is no database: the catalog is one TypeScript file and your collection is another.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out, host it anywhere
```

## Make it yours

Everything personal is in [`src/data/me.ts`](src/data/me.ts). The catalog ([`src/data/sets.ts`](src/data/sets.ts)) is the same for everyone, so you can pull in new sets later without conflicts.

| Field | What it does |
| --- | --- |
| `firstName` | Names the site, e.g. "Luke's LEGO Speed Champions Collection" in the browser tab and header. Leave `""` for a generic title. |
| `owned` | Set numbers you own. Every view updates from this list. |
| `wishlist` | Set numbers you want next. They get a gold ★ badge and a Wishlist tab in the garage. |
| `units` | `"imperial"` (mph, lb, lb-ft, 0–62 mph) or `"metric"` (km/h, kg, Nm, 0–100 km/h). |
| `teamColor` | Accent colour: `racing-red`, `ferrari`, `mclaren`, `mercedes`, `red-bull`, `aston-martin`, `alpine`, `williams`, `gulf`, or any hex such as `"#ff8000"`. |

If `owned` or `wishlist` lists a set number that isn't in the catalog, the build stops with an error, so a typo can't fail silently.

## Views

| Route | What it shows |
| --- | --- |
| `/` | **Garage**: every set with a picture. Filter by Owned/Missing, year, brand, GT class and region, or search. Filters are kept in the URL. |
| `/sets/<number>` | **Set detail**: the LEGO model next to a photo of the real car, plus its description, stats, and Gran Turismo-style tags (Gr.1, N500, European, MR…). |
| `/timeline` | **Seasons**: sets grouped by release year, with owned sets lit up. |
| `/brands` | **Brands**: completion per manufacturer. |
| `/stats` | **Pit Wall**: overall completion, plus a breakdown by season, GT class, region and brand. |

## Adding a new set

Add an entry to `sets.ts`. The field meanings, including the GT class rules, are documented in [`src/data/types.ts`](src/data/types.ts). Then run:

```bash
npm run images
```

## Images

`npm run images` downloads anything missing into `public/images/` as resized WebP files:

- **Set photos** come from Rebrickable's CDN, falling back to Brickset. They go to `public/images/sets/<setNum>.webp`.
- **Real-car photos** are the lead image of the car's Wikipedia article. They go to `public/images/cars/<carId>.webp`. Author and license are recorded in `src/data/image-credits.json` and shown on the detail page.

Existing files are never overwritten. To use your own picture, save it with the same filename. To re-download one:

```bash
npm run images -- --force 76916 porsche-963
```

If Wikipedia's lead image shows the wrong car, set `photo: "File:Something.jpg"` (a Wikimedia Commons file) on that car in `sets.ts` and force a re-fetch.

LEGO® and Speed Champions are trademarks of the LEGO Group. This is a personal, non-commercial project.
