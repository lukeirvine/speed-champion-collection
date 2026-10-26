import type { Profile } from "./types";

/**
 * Everything personal lives here, so the catalog (sets.ts) stays shareable.
 * Cloning this repo? Replace the values below with your own.
 */
export const me: Profile = {
  firstName: "Luke",

  // Set numbers you own. Find them in sets.ts or on the box.
  owned: [
    // 2020
    "76895", // Ferrari F8 Tributo
    "76897", // 1985 Audi Sport quattro S1
    // 2021
    "76900", // Koenigsegg Jesko
    "76901", // Toyota GR Supra
    "76902", // McLaren Elva
    "76903", // Chevrolet Corvette C8.R Race Car and 1968 Chevrolet Corvette
    "76905", // Ford GT Heritage Edition and Bronco R
    // 2022
    "76906", // 1970 Ferrari 512 M
    "76907", // Lotus Evija
    "76908", // Lamborghini Countach
    "76909", // Mercedes-AMG F1 W12 E Performance & Mercedes-AMG Project One
    "76911", // 007 Aston Martin DB5
    "76912", // Fast & Furious 1970 Dodge Charger R/T
    // 2023
    "76915", // Pagani Utopia
    "76916", // Porsche 963
    "76917", // 2 Fast 2 Furious Nissan Skyline GT-R (R34)
    "76918", // McLaren Solus GT & McLaren F1 LM
    // 2024
    "76919", // 2023 McLaren Formula 1 Car
    "76920", // Ford Mustang Dark Horse
    "76921", // Audi S1 e-tron quattro
    "76922", // BMW M4 GT3 & BMW M Hybrid V8
    "76923", // Lamborghini Lambo V12 Vision Gran Turismo
    "76924", // Mercedes-AMG G 63 & Mercedes-AMG SL 63
    "76925", // Aston Martin Vantage Safety Car & AMR23
    "76934", // Ferrari F40
    "76935", // NASCAR Next Gen Chevrolet Camaro ZL1
    // 2025
    "77237", // Dodge Challenger SRT Hellcat
    "77238", // Lamborghini Revuelto & Lamborghini Huracán STO
    "77239", // Porsche 911 GT3 RS
    "77240", // Bugatti Centodieci
    "77241", // 2 Fast 2 Furious Honda S2000
    "77243", // Oracle Red Bull Racing RB20
    // 2026
    "77252", // APXGP Team Race Car
    "77253", // Bugatti Vision Gran Turismo
    "77254", // Ferrari SF90 XX Stradale
    "77255", // Lightning McQueen
    "77256", // Time Machine from Back to the Future
    "77261", // Ferrari 499P
    "77262", // Ken Block's 1965 Ford Mustang Hoonicorn RTR V1
    "77264", // Jaguar F-TYPE Project 7 & Land Rover Defender Classic
  ],

  // Sets you'd like next. They get a gold badge and their own tab in the garage.
  wishlist: [
    "77263",
    "77260",
    "77257",
    "77258",
  ],

  // Your favorite sets. They get a ♥ and a Favorites filter in the garage.
  favorites: [
    "77239", // Porche 911 GT3 RS
    "76923", // Lamborghini Lambo V12 Vision Gran Turismo
    "77253", // Bugatti Vision Gran Turismo
    "77256", // Time Machine from Back to the Future
    "77261", // Ferrari 499P
  ],

  // Featured at the top of the garage. A car id from sets.ts (e.g. "ferrari-f40",
  // handy for two-car sets) or a set number. "" hides it.
  // heroCar: "lamborghini-lambo-v12-vision-gt",

  // Small promo polybags (30xxx): mini builds sold cheaply or given away in promotions.
  // They're tracked as a bonus and never count toward completion. false hides them.
  showPolybags: false,

  units: "imperial",

  // racing-red | ferrari | mclaren | mercedes | red-bull | aston-martin | alpine | williams | gulf, or any hex like "#ff8000"
  teamColor: "ferrari",
};
