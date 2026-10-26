import type { LegoSet } from "./types";

/**
 * The whole catalog. To mark a set as yours, flip `owned: false` → `owned: true`.
 * Field meanings and GT class rules are documented in ./types.ts.
 */
export const sets: LegoSet[] = [
  // ──────────────── 2020 ────────────────
  {
    setNum: "30342", owned: false,
    name: "Lamborghini Huracán Super Trofeo EVO", year: 2020, pieces: 70, polybag: true,
    cars: [
      {
        id: "lamborghini-huracan-super-trofeo-evo", make: "Lamborghini", model: "Huracán Super Trofeo EVO", modelYear: 2019,
        country: "Italy", region: "European", gtCategory: "Gr.4", carType: "Race",
        engine: "5.2L V10", drivetrain: "MR",
        powerHp: 612, torqueNm: 570, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["One-Make Racing","Super Trofeo","V10"],
        wikipedia: "Lamborghini_Huracán", photo: "File:24H Series 2022 Spa Nr. 720.jpg",
        description: "The Super Trofeo EVO is the purpose-built racing Huracán that Lamborghini Squadra Corse developed for its one-make Super Trofeo championships, succeeding the original Huracán Super Trofeo in 2019. Its naturally aspirated 5.2-litre V10 sends 612 hp to the rear wheels alone, and owners can later buy an upgrade kit to bring the car up to EVO2 specification.",
      },
    ],
  },
  {
    setNum: "76895", owned: true,
    name: "Ferrari F8 Tributo", year: 2020, pieces: 275,
    cars: [
      {
        id: "ferrari-f8-tributo", make: "Ferrari", model: "F8 Tributo", modelYear: 2019,
        country: "Italy", region: "European", gtCategory: "N800", carType: "Road",
        engine: "3.9L twin-turbo V8", drivetrain: "MR",
        powerHp: 710, torqueNm: 770, weightKg: 1435, topSpeedKmh: 340, zeroTo100: 2.9,
        tags: ["Supercar","V8","Mid-Engine"],
        wikipedia: "Ferrari_F8",
        description: "Unveiled at the 2019 Geneva Motor Show, the F8 Tributo replaced the 488 GTB and pays homage to four decades of mid-engined Ferrari V8s. It inherits the 488 Pista's 3.9-litre twin-turbo V8, whose 720 PS made it the most powerful V8 road car Ferrari had built, and Maranello quotes 340 km/h flat out with 0–100 km/h in 2.9 seconds.",
      },
    ],
  },
  {
    setNum: "76896", owned: false,
    name: "Nissan GT-R NISMO", year: 2020, pieces: 298,
    cars: [
      {
        id: "nissan-gt-r-nismo", make: "Nissan", model: "GT-R NISMO", modelYear: 2020,
        country: "Japan", region: "Japanese", gtCategory: "N600", carType: "Road",
        engine: "3.8L twin-turbo V6", drivetrain: "4WD",
        powerHp: 592, torqueNm: 652, weightKg: 1750, topSpeedKmh: null, zeroTo100: null,
        tags: ["JDM","Twin-Turbo","Nürburgring"],
        wikipedia: "Nissan_GT-R", photo: "File:2022 Nissan GT-R Nismo SCD 24.jpg",
        description: "The NISMO is the hardest-edged version of Nissan's R35 GT-R, developed with engineers and drivers from the company's GT3 racing programme. Before its 2013 debut it lapped the Nürburgring Nordschleife in 7:08.679, claimed as a record for a mass-produced car. The 2020 update sharpened cornering and braking further, with the twin-turbo V6 rated at 600 PS.",
      },
    ],
  },
  {
    setNum: "76897", owned: true,
    name: "1985 Audi Sport quattro S1", year: 2020, pieces: 250,
    cars: [
      {
        id: "audi-sport-quattro-s1-e2", make: "Audi", model: "Sport quattro S1 E2", modelYear: 1985,
        country: "Germany", region: "European", gtCategory: "Gr.B", carType: "Race",
        engine: "2.1L turbo I5", drivetrain: "4WD",
        powerHp: 473, torqueNm: null, weightKg: 1090, topSpeedKmh: null, zeroTo100: 3.1,
        tags: ["Rally","Group B","Classic","Quattro"],
        wikipedia: "Audi_Quattro", photo: "File:1985 Audi Sport Quattro S1 E2.jpg",
        description: "The S1 E2 was the final, most extreme evolution of Audi's Group B rally car, arriving in 1985 with dramatic wings and spoilers grafted onto the short-wheelbase Sport quattro. Its turbocharged 2.1-litre five-cylinder used an air-recirculation system to keep the turbo spinning off-throttle, and Walter Röhrl drove one to victory on the 1985 Sanremo Rally.",
      },
    ],
  },
  {
    setNum: "76898", owned: false,
    name: "Formula E Panasonic Jaguar Racing GEN2 Car & Jaguar I-PACE eTROPHY", year: 2020, pieces: 565,
    cars: [
      {
        id: "jaguar-i-type-4", make: "Jaguar", model: "I-Type 4", modelYear: 2019,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Electric motor", drivetrain: "MR",
        powerHp: 335, torqueNm: null, weightKg: 900, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula E","Electric","Open Wheel"],
        wikipedia: "Spark_SRT05e", photo: "File:EFLT MexicoCityePrix2020-3.jpg",
        description: "Panasonic Jaguar Racing's I-Type 4 contested the 2019–20 Formula E season on the Spark SRT05e 'Gen2' chassis shared by every team, which is free to fit its own homologated electric motor. Gen2 cars carry a 54 kWh McLaren battery and deliver up to 250 kW, and Mitch Evans drove the I-Type 4 to a dominant victory at the 2020 Mexico City ePrix.",
      },
      {
        id: "jaguar-i-pace-etrophy", make: "Jaguar", model: "I-Pace eTrophy", modelYear: 2018,
        country: "United Kingdom", region: "European", gtCategory: "Gr.4", carType: "Race",
        engine: "Dual electric motors", drivetrain: "4WD",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Electric","One-Make Racing","Formula E"],
        wikipedia: "Jaguar_I-Pace_eTrophy", photo: "File:Jaguar I-Pace eTrophy 2 IMG 0840.jpg",
        description: "Built by Jaguar Land Rover Special Vehicle Operations from the road-going I-Pace, the eTrophy raced in an all-electric one-make series supporting Formula E. Its electric drive technology traces back to Jaguar's I-Type Formula E programme, and the series ran an arrive-and-drive format with a guest VIP driver at every round before COVID-19 ended it after two seasons in 2020.",
      },
    ],
  },
  {
    setNum: "76899", owned: false,
    name: "Lamborghini Urus ST-X & Huracán Super Trofeo EVO", year: 2020, pieces: 663,
    cars: [
      {
        id: "lamborghini-urus-st-x", make: "Lamborghini", model: "Urus ST-X", modelYear: 2020,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "4.0L twin-turbo V8", drivetrain: "4WD",
        powerHp: 641, torqueNm: 850, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Super SUV","One-Make Racing","Twin-Turbo"],
        wikipedia: "Lamborghini_Urus",
        description: "The Urus ST-X is Lamborghini Squadra Corse's racing version of its Urus super SUV, first shown as a concept at the 2018 Lamborghini World Finals. Built to FIA rules with a full roll cage, fire-suppression system and FT3 fuel tank, it keeps the road car's 641 hp twin-turbo V8 while shedding around a quarter of the street-legal Urus's weight.",
      },
      {
        id: "lamborghini-huracan-super-trofeo-evo", make: "Lamborghini", model: "Huracán Super Trofeo EVO", modelYear: 2019,
        country: "Italy", region: "European", gtCategory: "Gr.4", carType: "Race",
        engine: "5.2L V10", drivetrain: "MR",
        powerHp: 612, torqueNm: 570, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["One-Make Racing","Super Trofeo","V10"],
        wikipedia: "Lamborghini_Huracán", photo: "File:24H Series 2022 Spa Nr. 720.jpg",
        description: "The Super Trofeo EVO is the purpose-built racing Huracán that Lamborghini Squadra Corse developed for its one-make Super Trofeo championships, succeeding the original Huracán Super Trofeo in 2019. Its naturally aspirated 5.2-litre V10 sends 612 hp to the rear wheels alone, and owners can later buy an upgrade kit to bring the car up to EVO2 specification.",
      },
    ],
  },

  // ──────────────── 2021 ────────────────
  {
    setNum: "30343", owned: false,
    name: "McLaren Elva", year: 2021, pieces: 85, polybag: true,
    cars: [
      {
        id: "mclaren-elva", make: "McLaren", model: "Elva", modelYear: 2020,
        country: "United Kingdom", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "4.0L twin-turbo V8", drivetrain: "MR",
        powerHp: 804, torqueNm: 800, weightKg: 1269, topSpeedKmh: 327, zeroTo100: null,
        tags: ["Hypercar","Speedster","Ultimate Series"],
        wikipedia: "McLaren_Elva",
        description: "The Elva is a roofless, windscreen-free speedster and the fifth member of McLaren's Ultimate Series, named after the lightweight Elva-built sports racers Bruce McLaren campaigned in the 1960s. In place of glass, its Active Air Management System channels air through the nose to form a calm bubble over the occupants, while the 815 PS twin-turbo V8 shared with the Senna carries it to 203 mph.",
      },
    ],
  },
  {
    setNum: "76900", owned: true,
    name: "Koenigsegg Jesko", year: 2021, pieces: 280,
    cars: [
      {
        id: "koenigsegg-jesko", make: "Koenigsegg", model: "Jesko", modelYear: 2020,
        country: "Sweden", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "5.0L twin-turbo V8", drivetrain: "MR",
        powerHp: 1600, torqueNm: 1500, weightKg: 1420, topSpeedKmh: null, zeroTo100: null,
        tags: ["Hypercar","V8","Downforce"],
        wikipedia: "Koenigsegg_Jesko",
        description: "Named in tribute to Christian von Koenigsegg's father, the Agera's successor sold out all 125 build slots before the 2019 Geneva Motor Show had even closed. Its 5.0-litre twin-turbo V8 makes 1,280 hp on petrol and 1,600 hp on E85, shifting through Koenigsegg's nine-speed Light Speed Transmission, and the Attack version generates up to 1,400 kg of downforce.",
      },
    ],
  },
  {
    setNum: "76901", owned: true,
    name: "Toyota GR Supra", year: 2021, pieces: 299,
    cars: [
      {
        id: "toyota-gr-supra", make: "Toyota", model: "GR Supra", modelYear: 2020,
        country: "Japan", region: "Japanese", gtCategory: "N400", carType: "Road",
        engine: "3.0L turbo I6", drivetrain: "FR",
        powerHp: 335, torqueNm: 500, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["JDM","Sports Car","Inline-Six"],
        wikipedia: "Toyota_GR_Supra",
        description: "The fifth-generation Supra, marketed as the A90, revived Toyota's famous nameplate in 2019 as a Gazoo Racing model co-developed with BMW on the platform shared with the G29 Z4 and built by Magna Steyr in Austria. Six-cylinder cars use BMW's B58 3.0-litre turbo straight-six, and Car and Driver recorded 0–60 mph in 3.7 seconds, beating Toyota's own claim.",
      },
    ],
  },
  {
    setNum: "76902", owned: true,
    name: "McLaren Elva", year: 2021, pieces: 263,
    cars: [
      {
        id: "mclaren-elva", make: "McLaren", model: "Elva", modelYear: 2020,
        country: "United Kingdom", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "4.0L twin-turbo V8", drivetrain: "MR",
        powerHp: 804, torqueNm: 800, weightKg: 1269, topSpeedKmh: 327, zeroTo100: null,
        tags: ["Hypercar","Speedster","Ultimate Series"],
        wikipedia: "McLaren_Elva",
        description: "The Elva is a roofless, windscreen-free speedster and the fifth member of McLaren's Ultimate Series, named after the lightweight Elva-built sports racers Bruce McLaren campaigned in the 1960s. In place of glass, its Active Air Management System channels air through the nose to form a calm bubble over the occupants, while the 815 PS twin-turbo V8 shared with the Senna carries it to 203 mph.",
      },
    ],
  },
  {
    setNum: "76903", owned: true,
    name: "Chevrolet Corvette C8.R Race Car and 1968 Chevrolet Corvette", year: 2021, pieces: 512,
    cars: [
      {
        id: "chevrolet-corvette-c8r", make: "Chevrolet", model: "Corvette C8.R", modelYear: 2020,
        country: "United States", region: "American", gtCategory: "Gr.3", carType: "Race",
        engine: "5.5L V8", drivetrain: "MR",
        powerHp: 500, torqueNm: 651, weightKg: 1245, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans","GTLM","Endurance","V8"],
        wikipedia: "Chevrolet_Corvette_C8.R",
        description: "The C8.R was Corvette Racing's first mid-engined Corvette, built by Pratt Miller to GTE rules and debuting at the 2020 24 Hours of Daytona. It swept the IMSA GTLM titles in 2020 and 2021, and its naturally aspirated 5.5-litre V8 later powered the car to a GTE Am class win at the 2023 Le Mans centenary race and that year's WEC GTE Am crown.",
      },
      {
        id: "chevrolet-corvette-1968", make: "Chevrolet", model: "Corvette (C3)", modelYear: 1968,
        country: "United States", region: "American", gtCategory: "N300", carType: "Road",
        engine: "5.4L V8", drivetrain: "FR",
        powerHp: 300, torqueNm: 488, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Classic","Muscle","V8"],
        wikipedia: "Chevrolet_Corvette_(C3)", photo: "File:Chevrolet Corvette 1968 (9193446845) (cropped).jpg",
        description: "The 1968 model launched the third-generation 'Shark' Corvette, an all-new body and interior on a chassis carried over from the Sting Ray. Coupes gained removable T-top roof panels and vacuum-operated hidden headlights, and Hot Wheels revealed the shape weeks early with a GM-authorised die-cast. The base 327 V8 made 300 hp, with 427 big-blocks offering up to 435 hp.",
      },
    ],
  },
  {
    setNum: "76904", owned: false,
    name: "Mopar Dodge//SRT Top Fuel Dragster and 1970 Dodge Challenger T/A", year: 2021, pieces: 627,
    cars: [
      {
        id: "dodge-srt-top-fuel-dragster", make: "Dodge", model: "Mopar Dodge//SRT Top Fuel Dragster", modelYear: 2020,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Race",
        engine: "8.2L supercharged Hemi V8", drivetrain: "MR",
        powerHp: 11000, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Drag Racing","NHRA","Nitromethane"],
        wikipedia: "Top_Fuel", photo: "File:Leah Pruett Sonoma 2023.jpg",
        description: "Top Fuel dragsters are the quickest-accelerating racing cars in the world, with the fastest covering 1,000 feet in about 3.6 seconds at more than 340 mph. Their supercharged 500 cu in engines, based on Chrysler's Hemi and burning up to 90% nitromethane, have been measured at over 11,000 hp, and each one is completely torn down and inspected after every run.",
      },
      {
        id: "dodge-challenger-ta-1970", make: "Dodge", model: "Challenger T/A", modelYear: 1970,
        country: "United States", region: "American", gtCategory: "N300", carType: "Road",
        engine: "5.6L V8", drivetrain: "FR",
        powerHp: 290, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Muscle","Trans-Am","Classic"],
        wikipedia: "Dodge_Challenger_(1970)", photo: "File:Dodge Challenger (9885025066) (cropped).jpg",
        description: "Sold for the 1970 model year only, the Challenger T/A was Dodge's street homologation special for the SCCA Trans-Am series. Its 340 Six Pack V8 breathed through three two-barrel carburettors beneath a fibreglass hood with a huge scoop, exhausts exited just ahead of the rear wheels, and it was one of the first American muscle cars with different-size tyres front and rear.",
      },
    ],
  },
  {
    setNum: "76905", owned: true,
    name: "Ford GT Heritage Edition and Bronco R", year: 2021, pieces: 660,
    cars: [
      {
        id: "ford-gt-heritage-edition", make: "Ford", model: "GT Heritage Edition", modelYear: 2019,
        country: "United States", region: "American", gtCategory: "N700", carType: "Road",
        engine: "3.5L twin-turbo V6", drivetrain: "MR",
        powerHp: 647, torqueNm: 746, weightKg: 1521, topSpeedKmh: 348, zeroTo100: null,
        tags: ["Supercar","Heritage Livery","Gulf","Le Mans"],
        wikipedia: "Ford_GT", photo: "File:2019 Ford GT Heritage Edition SP21.jpg",
        description: "The second-generation Ford GT, built by Multimatic in Ontario, marked 50 years since the GT40's 1966 Le Mans win, and its annual Heritage Editions wear the colours of famous GT40 racers. The 2019–2020 car carries the blue-and-orange Gulf livery honouring the GT40 Mk I's back-to-back Le Mans victories in 1968 and 1969, powered by a 647 hp twin-turbo EcoBoost V6.",
      },
      {
        id: "ford-bronco-r", make: "Ford", model: "Bronco R", modelYear: 2019,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Race",
        engine: "Twin-turbo EcoBoost", drivetrain: "4WD",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Off-road","Baja","Prototype"],
        wikipedia: "Ford_Bronco", photo: "File:Ford Bronco R (Laramie Jubilee Days Parade) (55489977945).jpg",
        description: "Ford built the Bronco R prototype to test the drivetrain of the still-secret sixth-generation Bronco in the brutal 2019 Baja 1000. It ran a twin-turbo EcoBoost engine, long-travel racing suspension, 37-inch tyres and a 70-gallon fuel tank, even stopping to tow rivals out of the mud, before failing cooling fans forced its retirement around mile 580.",
      },
    ],
  },

  // ──────────────── 2022 ────────────────
  {
    setNum: "30434", owned: false,
    name: "Aston Martin Valkyrie AMR Pro", year: 2022, pieces: 97, polybag: true,
    cars: [
      {
        id: "aston-martin-valkyrie-amr-pro", make: "Aston Martin", model: "Valkyrie AMR Pro", modelYear: 2021,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "6.5L naturally aspirated V12", drivetrain: "MR",
        powerHp: 1100, torqueNm: null, weightKg: null, topSpeedKmh: 402, zeroTo100: null,
        tags: ["Hypercar","Track Toy","V12"],
        wikipedia: "Aston_Martin_Valkyrie", photo: "File:2023 Aston Martin Valkyrie AMR Pro 1.jpg",
        description: "The track-only evolution of Adrian Newey's Valkyrie, the AMR Pro ditches the road car's hybrid system and turns up the Cosworth V12 instead. LMP1-derived Michelin slicks, carbon-carbon brakes and a dramatic finned tail let it pull over 3 g in corners, with a targeted top speed of 250 mph. Production grew from a planned 25 cars to 40.",
      },
    ],
  },
  {
    setNum: "76906", owned: true,
    name: "1970 Ferrari 512 M", year: 2022, pieces: 291,
    cars: [
      {
        id: "ferrari-512-m", make: "Ferrari", model: "512 M", modelYear: 1970,
        country: "Italy", region: "European", gtCategory: "Gr.1", carType: "Race",
        engine: "5.0L naturally aspirated V12", drivetrain: "MR",
        powerHp: 610, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans","Classic","Group 5"],
        wikipedia: "Ferrari_512", photo: "File:1970 Ferrari 512 M, no. 1020, front left (Miller).jpg",
        description: "The 512 M (for modificata) was Ferrari's late-1970 rework of the 512 S, reshaped to take on its arch-rival, the Porsche 917. Its 5.0-litre V12 made around 610 hp at a screaming 9,000 rpm. A modified 512 M won the 1970 Kyalami 9 Hours, and Penske's Sunoco car with Mark Donohue took pole at several American tracks in 1971.",
      },
    ],
  },
  {
    setNum: "76907", owned: true,
    name: "Lotus Evija", year: 2022, pieces: 247,
    cars: [
      {
        id: "lotus-evija", make: "Lotus", model: "Evija", modelYear: 2020,
        country: "United Kingdom", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "Quad electric motors (93 kWh battery)", drivetrain: "4WD",
        powerHp: 2011, torqueNm: 1704, weightKg: 1887, topSpeedKmh: 349, zeroTo100: null,
        tags: ["Hypercar","Electric"],
        wikipedia: "Lotus_Evija",
        description: "Lotus's first electric car arrived in 2019 with a headline figure that rewrote the brand's light-is-right playbook: around 2,000 hp from four motors, one at each wheel. Limited to 130 units and built at Hethel, it hits 300 km/h in about nine seconds. The name comes from Eve, meaning 'alive', and Jenson Button took the first delivery in 2023.",
      },
    ],
  },
  {
    setNum: "76908", owned: true,
    name: "Lamborghini Countach", year: 2022, pieces: 262,
    cars: [
      {
        id: "lamborghini-countach-lp400-s", make: "Lamborghini", model: "Countach LP400 S", modelYear: 1978,
        country: "Italy", region: "European", gtCategory: "N400", carType: "Road",
        engine: "3.9L V12", drivetrain: "MR",
        powerHp: 345, torqueNm: 356, weightKg: 1351, topSpeedKmh: 254, zeroTo100: 5.9,
        tags: ["Supercar","Classic","V12"],
        wikipedia: "Lamborghini_Countach",
        description: "Marcello Gandini's wedge-shaped successor to the Miura defined the bedroom-poster supercar. The 1978 LP400 S added the fibreglass wheel-arch flares and ultra-wide Pirelli P7 tyres that gave the Countach its signature stance. An optional V-shaped rear wing, inspired by Walter Wolf's special, cost top speed, yet most owners ticked the box anyway.",
      },
    ],
  },
  {
    setNum: "76909", owned: true,
    name: "Mercedes-AMG F1 W12 E Performance & Mercedes-AMG Project One", year: 2022, pieces: 564,
    cars: [
      {
        id: "mercedes-amg-f1-w12", make: "Mercedes-AMG", model: "F1 W12 E Performance", modelYear: 2021,
        country: "Germany", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.6L turbocharged V6 hybrid", drivetrain: "MR",
        powerHp: 1030, torqueNm: null, weightKg: 752, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","Hybrid"],
        wikipedia: "Mercedes_W12",
        description: "Mercedes' 2021 Formula One challenger, driven by Lewis Hamilton and Valtteri Bottas through one of the sport's most intense title fights. The W12 took nine wins and secured the team's eighth consecutive constructors' championship. Yet it was also the first Mercedes of the turbo-hybrid era not to deliver the drivers' crown, with Hamilton finishing runner-up.",
      },
      {
        id: "mercedes-amg-one", make: "Mercedes-AMG", model: "One", modelYear: 2022,
        country: "Germany", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "1.6L turbocharged V6 plug-in hybrid", drivetrain: "4WD",
        powerHp: 1049, torqueNm: null, weightKg: null, topSpeedKmh: 352, zeroTo100: null,
        tags: ["Hypercar","Hybrid","F1 Tech"],
        wikipedia: "Mercedes-AMG_One",
        description: "Born as Project One, this hypercar puts a genuine Formula One power unit on the road: a 1.6-litre turbo V6 with MGU-H and MGU-K, plus two front-axle motors. The engine is so highly strung that it needs a rebuild at 50,000 km. It set the Nürburgring Nordschleife record for road-legal cars, later becoming the first to lap in under 6:30.",
      },
    ],
  },
  {
    setNum: "76910", owned: false,
    name: "Aston Martin Valkyrie AMR Pro and Aston Martin Vantage GT3", year: 2022, pieces: 592,
    cars: [
      {
        id: "aston-martin-valkyrie-amr-pro", make: "Aston Martin", model: "Valkyrie AMR Pro", modelYear: 2021,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "6.5L naturally aspirated V12", drivetrain: "MR",
        powerHp: 1100, torqueNm: null, weightKg: null, topSpeedKmh: 402, zeroTo100: null,
        tags: ["Hypercar","Track Toy","V12"],
        wikipedia: "Aston_Martin_Valkyrie", photo: "File:2023 Aston Martin Valkyrie AMR Pro 1.jpg",
        description: "The track-only evolution of Adrian Newey's Valkyrie, the AMR Pro ditches the road car's hybrid system and turns up the Cosworth V12 instead. LMP1-derived Michelin slicks, carbon-carbon brakes and a dramatic finned tail let it pull over 3 g in corners, with a targeted top speed of 250 mph. Production grew from a planned 25 cars to 40.",
      },
      {
        id: "aston-martin-vantage-gt3", make: "Aston Martin", model: "Vantage AMR GT3", modelYear: 2018,
        country: "United Kingdom", region: "European", gtCategory: "Gr.3", carType: "Race",
        engine: "4.0L twin-turbo V8", drivetrain: "FR",
        powerHp: 535, torqueNm: 700, weightKg: 1245, topSpeedKmh: null, zeroTo100: null,
        tags: ["GT3","Endurance","V8"],
        wikipedia: "Aston_Martin_Vantage_(2018)", photo: "File:2018 Aston Martin Vantage GT3 FOS19.jpg",
        description: "The customer racing version of the 2018 Vantage replaced the long-serving V12 Vantage GT3 and swapped the old V12 for a Mercedes-AMG-sourced twin-turbo V8. It runs an Xtrac six-speed sequential gearbox, Öhlins dampers and Alcon brakes. Its GTE sibling can even be converted to GT3 spec, and teams like Heart of Racing have campaigned it in IMSA.",
      },
    ],
  },
  {
    setNum: "76911", owned: true,
    name: "007 Aston Martin DB5", year: 2022, pieces: 298,
    cars: [
      {
        id: "aston-martin-db5", make: "Aston Martin", model: "DB5", modelYear: 1964,
        country: "United Kingdom", region: "European", gtCategory: "N300", carType: "Road",
        engine: "4.0L inline-6", drivetrain: "FR",
        powerHp: 282, torqueNm: 390, weightKg: 1502, topSpeedKmh: 233, zeroTo100: null,
        tags: ["Classic","Bond Car","Movie Car","Grand Tourer"],
        wikipedia: "Aston_Martin_DB5",
        description: "Styled by Carrozzeria Touring Superleggera, the DB5 was an elegant grand tourer with an all-aluminium 4.0-litre straight-six. Then Goldfinger happened: fitted with ejector seats and machine guns, it became the most famous movie car of all time. Only 1,059 were built in the 1960s, and Aston Martin later revived it with 25 gadget-laden continuation cars.",
      },
    ],
  },
  {
    setNum: "76912", owned: true,
    name: "Fast & Furious 1970 Dodge Charger R/T", year: 2022, pieces: 345,
    cars: [
      {
        id: "dodge-charger-rt-1970", make: "Dodge", model: "Charger R/T", modelYear: 1970,
        country: "United States", region: "American", gtCategory: "N400", carType: "Road",
        engine: "7.2L V8 (440 Magnum)", drivetrain: "FR",
        powerHp: 375, torqueNm: 651, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Muscle","Classic","Movie Car"],
        wikipedia: "Dodge_Charger_(1966)", photo: "File:Rodz & Bodz Movie Car Museum auction, Fast & Furious Dominic Toretto's Screen Used 1970 Dodge Charger RT 2025-08-22.jpg",
        description: "The 1970 model was the last of the coke-bottle second-generation Chargers, gaining a wraparound chrome bumper and an undivided grille. The R/T came standard with the 440 Magnum V8, with the 426 Hemi optional. Black and menacing, it became Dominic Toretto's signature car in The Fast and the Furious, while on track 1970 Chargers won ten NASCAR races.",
      },
    ],
  },

  // ──────────────── 2023 ────────────────
  {
    setNum: "30657", owned: false,
    name: "McLaren Solus GT", year: 2023, pieces: 95, polybag: true,
    cars: [
      {
        id: "mclaren-solus-gt", make: "McLaren", model: "Solus GT", modelYear: 2023,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "5.2L naturally aspirated V10", drivetrain: "MR",
        powerHp: 829, torqueNm: 650, weightKg: 1000, topSpeedKmh: null, zeroTo100: 2.5,
        tags: ["Track Toy","Vision GT","Hypercar"],
        wikipedia: "McLaren_Solus_GT",
        description: "A Gran Turismo dream made real: the Solus GT is the track-only production version of McLaren's Ultimate Vision Gran Turismo concept from GT Sport. A Judd-based V10 revs to 10,000 rpm behind a single central seat reached through a sliding canopy. Only 25 were built, each sold with a custom-moulded seat, FIA race suit and helmet.",
      },
    ],
  },
  {
    setNum: "76914", owned: false,
    name: "Ferrari 812 Competizione", year: 2023, pieces: 261,
    cars: [
      {
        id: "ferrari-812-competizione", make: "Ferrari", model: "812 Competizione", modelYear: 2021,
        country: "Italy", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "6.5L naturally aspirated V12", drivetrain: "FR",
        powerHp: 819, torqueNm: 692, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Supercar","V12","Limited Edition"],
        wikipedia: "Ferrari_812_Superfast", photo: "File:Ferrari 812 Competizione 1.jpg",
        description: "The hardcore, limited-run take on the 812 Superfast, following in the footsteps of the 599 GTO and F12tdf. Its naturally aspirated 6.5-litre V12 makes 830 PS at 9,250 rpm and revs to 9,500, helped by extensive aero upgrades and independent four-wheel steering. Just 999 coupés and 599 open-top Competizione A models were built, all sold out.",
      },
    ],
  },
  {
    setNum: "76915", owned: true,
    name: "Pagani Utopia", year: 2023, pieces: 249,
    cars: [
      {
        id: "pagani-utopia", make: "Pagani", model: "Utopia", modelYear: 2022,
        country: "Italy", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "6.0L twin-turbo V12", drivetrain: "MR",
        powerHp: 852, torqueNm: 1100, weightKg: 1280, topSpeedKmh: null, zeroTo100: null,
        tags: ["Hypercar","V12","Manual"],
        wikipedia: "Pagani_Utopia",
        description: "Pagani's third model, codenamed C10, succeeded the Huayra after more than six years of development and was unveiled in Milan in 2022. Its Mercedes-AMG twin-turbo V12 delivers 864 PS and 1,100 Nm, and buyers can choose a true manual gearbox, a rarity at this level. Just 99 coupés were planned, and every one was spoken for.",
      },
    ],
  },
  {
    setNum: "76916", owned: true,
    name: "Porsche 963", year: 2023, pieces: 280,
    cars: [
      {
        id: "porsche-963", make: "Porsche", model: "963", modelYear: 2023,
        country: "Germany", region: "European", gtCategory: "Gr.1", carType: "Race",
        engine: "4.6L twin-turbo V8 hybrid", drivetrain: "MR",
        powerHp: 671, torqueNm: null, weightKg: 1030, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans","Hybrid","Endurance"],
        wikipedia: "Porsche_963",
        description: "Porsche's LMDh prototype, built with Multimatic, returned the marque to top-flight endurance racing in both WEC and IMSA. Its name nods to the legendary 956 and 962, and its twin-turbo V8 traces its roots to the 918 Spyder. After debuting at the 2023 Daytona 24, it scored its first win at Long Beach and went on to claim WEC and IMSA titles.",
      },
    ],
  },
  {
    setNum: "76917", owned: true,
    name: "2 Fast 2 Furious Nissan Skyline GT-R (R34)", year: 2023, pieces: 319,
    cars: [
      {
        id: "nissan-skyline-gt-r-r34", make: "Nissan", model: "Skyline GT-R (R34)", modelYear: 1999,
        country: "Japan", region: "Japanese", gtCategory: "N300", carType: "Road",
        engine: "2.6L twin-turbo inline-6", drivetrain: "4WD",
        powerHp: 276, torqueNm: null, weightKg: 1560, topSpeedKmh: null, zeroTo100: null,
        tags: ["JDM","Movie Car","Tuner"],
        wikipedia: "Nissan_Skyline_GT-R",
        description: "The final Skyline GT-R paired the twin-turbo RB26DETT straight-six with the clever ATTESA E-TS Pro all-wheel drive. Officially rated at 276 hp under Japan's gentlemen's agreement, it made considerably more in reality. Paul Walker's Brian O'Conner drove one in 2 Fast 2 Furious, though the screen car was actually a 25GT Turbo dressed up as a GT-R.",
      },
    ],
  },
  {
    setNum: "76918", owned: true,
    name: "McLaren Solus GT & McLaren F1 LM", year: 2023, pieces: 581,
    cars: [
      {
        id: "mclaren-solus-gt", make: "McLaren", model: "Solus GT", modelYear: 2023,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "5.2L naturally aspirated V10", drivetrain: "MR",
        powerHp: 829, torqueNm: 650, weightKg: 1000, topSpeedKmh: null, zeroTo100: 2.5,
        tags: ["Track Toy","Vision GT","Hypercar"],
        wikipedia: "McLaren_Solus_GT",
        description: "A Gran Turismo dream made real: the Solus GT is the track-only production version of McLaren's Ultimate Vision Gran Turismo concept from GT Sport. A Judd-based V10 revs to 10,000 rpm behind a single central seat reached through a sliding canopy. Only 25 were built, each sold with a custom-moulded seat, FIA race suit and helmet.",
      },
      {
        id: "mclaren-f1-lm", make: "McLaren", model: "F1 LM", modelYear: 1995,
        country: "United Kingdom", region: "European", gtCategory: "N700", carType: "Road",
        engine: "6.1L naturally aspirated V12", drivetrain: "MR",
        powerHp: 671, torqueNm: 705, weightKg: 1062, topSpeedKmh: 362, zeroTo100: null,
        tags: ["Supercar","Le Mans","Classic"],
        wikipedia: "McLaren_F1", photo: "File:McLaren F1 LM.jpg",
        description: "Five F1 LMs were built to honour the five F1 GTRs that finished the 1995 24 Hours of Le Mans, led by the overall winner. They ran the GTR's BMW V12 without race restrictors, shed around 76 kg and wore a big fixed rear wing. Most were painted Papaya Orange in tribute to Bruce McLaren, and one once held the 0–100–0 mph record.",
      },
    ],
  },

  // ──────────────── 2024 ────────────────
  {
    setNum: "30683", owned: false,
    name: "McLaren Formula 1 Car", year: 2024, pieces: 58, polybag: true,
    cars: [
      {
        id: "mclaren-mcl60", make: "McLaren", model: "MCL60", modelYear: 2023,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.6L V6 turbo hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","Hybrid","Open Wheel"],
        wikipedia: "McLaren_MCL60",
        description: "McLaren's 2023 Formula One challenger was named to mark 60 years since Bruce McLaren founded the team. It began the season badly off the pace, but a major upgrade package from the Austrian Grand Prix onward transformed it into a regular front-runner, and Lando Norris and rookie Oscar Piastri went on to take nine Grand Prix podiums and a sprint victory.",
      },
    ],
  },
  {
    setNum: "76919", owned: true,
    name: "2023 McLaren Formula 1 Car", year: 2024, pieces: 245,
    cars: [
      {
        id: "mclaren-mcl60", make: "McLaren", model: "MCL60", modelYear: 2023,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.6L V6 turbo hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","Hybrid","Open Wheel"],
        wikipedia: "McLaren_MCL60",
        description: "McLaren's 2023 Formula One challenger was named to mark 60 years since Bruce McLaren founded the team. It began the season badly off the pace, but a major upgrade package from the Austrian Grand Prix onward transformed it into a regular front-runner, and Lando Norris and rookie Oscar Piastri went on to take nine Grand Prix podiums and a sprint victory.",
      },
    ],
  },
  {
    setNum: "76920", owned: true,
    name: "Ford Mustang Dark Horse", year: 2024, pieces: 344,
    cars: [
      {
        id: "ford-mustang-dark-horse", make: "Ford", model: "Mustang Dark Horse", modelYear: 2024,
        country: "United States", region: "American", gtCategory: "N500", carType: "Road",
        engine: "5.0L V8", drivetrain: "FR",
        powerHp: 500, torqueNm: 567, weightKg: 1791, topSpeedKmh: null, zeroTo100: null,
        tags: ["Muscle","Pony Car","V8"],
        wikipedia: "Ford_Mustang_(seventh_generation)", photo: "File:2024 Ford Mustang Dark Horse.jpg",
        description: "The Dark Horse is the track-focused flagship of the seventh-generation S650 Mustang, created to bridge the gap between the Mach 1 and the departed Shelby GT350. Its 5.0-litre Coyote V8 gains a unique crankshaft and forged connecting rods from the Shelby GT500 for 500 hp, and at launch it was the only Mustang offered with Tremec's six-speed manual.",
      },
    ],
  },
  {
    setNum: "76921", owned: true,
    name: "Audi S1 e-tron quattro", year: 2024, pieces: 274,
    cars: [
      {
        id: "audi-s1-e-tron-quattro-hoonitron", make: "Audi", model: "S1 e-tron quattro Hoonitron", modelYear: 2021,
        country: "Germany", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Dual electric motors", drivetrain: "4WD",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Electric","Gymkhana","One-Off"],
        wikipedia: "Audi_e-tron", photo: "File:Audi S1 HOONITRON (53048160356) (cropped).jpg",
        description: "The Hoonitron is a one-of-a-kind electric car Audi built for Ken Block's Elektrikhana video, reimagining the Sport quattro S1 that Audi once took up Pikes Peak. Audi Sport in Neckarsulm engineered it with two electric motors, all-wheel drive and a carbon-fibre chassis built to FIA safety standards, while Audi's designers had just four weeks to go from first sketch to final design.",
      },
    ],
  },
  {
    setNum: "76922", owned: true,
    name: "BMW M4 GT3 & BMW M Hybrid V8", year: 2024, pieces: 676,
    cars: [
      {
        id: "bmw-m4-gt3", make: "BMW", model: "M4 GT3", modelYear: 2022,
        country: "Germany", region: "European", gtCategory: "Gr.3", carType: "Race",
        engine: "3.0L twin-turbo I6", drivetrain: "FR",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["GT3","Endurance","Turbo"],
        wikipedia: "BMW_M4", photo: "File:Nick Yelloly BMW M4 GT3 GT World Challenge Hockenheim 2022.jpg",
        description: "The racing version of the G82 M4, built to FIA GT3 rules as the successor to the M6 GT3, has competed since 2022 in SRO, IMSA and ADAC championships. It runs a race-prepped version of the road car's twin-turbo inline-six beneath widened bodywork and a gooseneck rear wing, and its steering wheel even plugs straight into racing simulators without modification.",
      },
      {
        id: "bmw-m-hybrid-v8", make: "BMW", model: "M Hybrid V8", modelYear: 2023,
        country: "Germany", region: "European", gtCategory: "Gr.1", carType: "Race",
        engine: "4.0L twin-turbo V8 hybrid", drivetrain: "MR",
        powerHp: 671, torqueNm: 650, weightKg: 1030, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans","Hypercar","Hybrid","Prototype"],
        wikipedia: "BMW_M_Hybrid_V8",
        description: "BMW's LMDh prototype, designed by BMW M and built by Dallara, brought the brand back to top-class sports-prototype racing for the first time since the Le Mans-winning V12 LMR of 1999. It pairs a twin-turbo V8 developed from BMW's DTM engine with a spec hybrid system, and claimed its maiden victory at Watkins Glen in 2023.",
      },
    ],
  },
  {
    setNum: "76923", owned: true,
    name: "Lamborghini Lambo V12 Vision Gran Turismo", year: 2024, pieces: 230,
    cars: [
      {
        id: "lamborghini-lambo-v12-vision-gt", make: "Lamborghini", model: "Lambo V12 Vision Gran Turismo", modelYear: 2019,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Concept",
        engine: "6.5L V12 hybrid", drivetrain: "4WD",
        powerHp: 808, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Vision GT","Hybrid","V12"],
        wikipedia: "Lamborghini_Lambo_V12_Vision_Gran_Turismo",
        description: "Lamborghini's entry in the Vision Gran Turismo programme was revealed in November 2019 on the day of the FIA Gran Turismo World Finals. The single-seat concept borrows the Sián FKP 37's supercapacitor-assisted 6.5-litre V12 for a combined 819 PS, while its hexagonal side windows nod to the 1968 Marzal and its Y-shaped lights reinterpret a classic Lamborghini signature.",
      },
    ],
  },
  {
    setNum: "76924", owned: true,
    name: "Mercedes-AMG G 63 & Mercedes-AMG SL 63", year: 2024, pieces: 808,
    cars: [
      {
        id: "mercedes-amg-g-63", make: "Mercedes-AMG", model: "G 63", modelYear: 2018,
        country: "Germany", region: "European", gtCategory: "N600", carType: "Road",
        engine: "4.0L twin-turbo V8", drivetrain: "4WD",
        powerHp: 577, torqueNm: 850, weightKg: null, topSpeedKmh: 220, zeroTo100: 4.5,
        tags: ["SUV","Off-Road","Luxury","V8"],
        wikipedia: "Mercedes-Benz_G-Class", photo: "File:Mercedes-AMG G 63 (2018) IMG 4370.jpg",
        description: "The AMG G 63 is the high-performance version of the second-generation G-Class launched in 2018, a near-total redesign that carried over only three parts from its boxy predecessor. A 4.0-litre twin-turbo V8 with 577 hp and 850 Nm turns the off-road icon into a 4.5-second sprinter, backed by AMG suspension, side-exit exhausts and wheels up to 22 inches.",
      },
      {
        id: "mercedes-amg-sl-63", make: "Mercedes-AMG", model: "SL 63 4MATIC+", modelYear: 2022,
        country: "Germany", region: "European", gtCategory: "N600", carType: "Road",
        engine: "4.0L twin-turbo V8", drivetrain: "4WD",
        powerHp: 577, torqueNm: 800, weightKg: null, topSpeedKmh: 315, zeroTo100: 3.6,
        tags: ["Roadster","Grand Tourer","V8"],
        wikipedia: "Mercedes-Benz_SL_(R232)", photo: "File:Mercedes-AMG SL 63 (R232) IMG 0213.jpg",
        description: "The seventh-generation R232 SL was developed by AMG and sold exclusively under the AMG badge at launch, replacing both the previous SL and the AMG GT Roadster. The range-topping SL 63 swaps the old folding metal roof for a lighter fabric top, brings back 2+2 seating, and sends 577 hp from its twin-turbo V8 to all four wheels on the way to 315 km/h.",
      },
    ],
  },
  {
    setNum: "76925", owned: true,
    name: "Aston Martin Vantage Safety Car & AMR23", year: 2024, pieces: 564,
    cars: [
      {
        id: "aston-martin-vantage-safety-car", make: "Aston Martin", model: "Vantage F1 Safety Car", modelYear: 2021,
        country: "United Kingdom", region: "European", gtCategory: "N600", carType: "Road",
        engine: "4.0L twin-turbo V8", drivetrain: "FR",
        powerHp: 528, torqueNm: 685, weightKg: null, topSpeedKmh: 314, zeroTo100: 3.5,
        tags: ["Safety Car","Formula 1","Sports Car"],
        wikipedia: "Aston_Martin_Vantage_(2018)", photo: "File:Aston Martin Vantage V8 F1 Safety Car.jpg",
        description: "In 2021 the Vantage became an official Formula One safety car, sharing duties with Mercedes-AMG and debuting at the Bahrain Grand Prix in British Racing Green with neon-yellow accents. To celebrate the brand's return to F1 after 61 years, Aston Martin also sold a road-going Vantage F1 Edition with a fixed rear wing and its Mercedes-AMG-sourced V8 uprated to 535 PS.",
      },
      {
        id: "aston-martin-amr23", make: "Aston Martin", model: "AMR23", modelYear: 2023,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.6L V6 turbo hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","Hybrid","Open Wheel"],
        wikipedia: "Aston_Martin_AMR23",
        description: "The Mercedes-powered AMR23 made Aston Martin a surprise front-runner in 2023, with new signing Fernando Alonso finishing third on its debut in Bahrain for only the team's second-ever podium. Alonso went on to collect eight podiums with it alongside Lance Stroll, before rivals' upgrades saw the green car's form stagnate in the second half of the season.",
      },
    ],
  },
  {
    setNum: "76934", owned: true,
    name: "Ferrari F40", year: 2024, pieces: 318,
    cars: [
      {
        id: "ferrari-f40", make: "Ferrari", model: "F40", modelYear: 1987,
        country: "Italy", region: "European", gtCategory: "N500", carType: "Road",
        engine: "2.9L twin-turbo V8", drivetrain: "MR",
        powerHp: 471, torqueNm: null, weightKg: 1254, topSpeedKmh: 321, zeroTo100: 4.7,
        tags: ["Supercar","Classic","Turbo"],
        wikipedia: "Ferrari_F40",
        description: "Built to celebrate Ferrari's 40th anniversary, the F40 was the last car personally approved by Enzo Ferrari and, at launch, the fastest, most powerful and most expensive Ferrari on sale. Its twin-turbo V8 and spartan, race-bred construction made it a legend, and Pirelli developed the original P Zero tyre specifically to cope with its power.",
      },
    ],
  },
  {
    setNum: "76935", owned: true,
    name: "NASCAR Next Gen Chevrolet Camaro ZL1", year: 2024, pieces: 328,
    cars: [
      {
        id: "chevrolet-camaro-zl1-nascar-next-gen", make: "Chevrolet", model: "Camaro ZL1 (NASCAR Next Gen)", modelYear: 2022,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Race",
        engine: "5.86L V8", drivetrain: "FR",
        powerHp: 670, torqueNm: null, weightKg: 1451, topSpeedKmh: null, zeroTo100: null,
        tags: ["Stock Car","NASCAR","V8"],
        wikipedia: "Next_Gen_(NASCAR)", photo: "File:Kyle Larson 5 Las Vegas 2023.jpg",
        description: "NASCAR's seventh-generation Cup car debuted at the 2022 Daytona 500, bringing a modular steel-tube chassis, a five-speed sequential gearbox and the series' first rear diffuser, with Chevrolet teams running the Camaro ZL1 body. A Next Gen Camaro ZL1 1LE also contested the 2023 24 Hours of Le Mans as the Garage 56 entry, the first NASCAR stock car there since 1976.",
      },
    ],
  },

  // ──────────────── 2025 ────────────────
  {
    setNum: "30709", owned: false,
    name: "Ferrari 499P - Hypercar", year: 2025, pieces: 62, polybag: true,
    cars: [
      {
        id: "ferrari-499p", make: "Ferrari", model: "499P", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "Gr.1", carType: "Race",
        engine: "3.0 L F163CG twin-turbo V6 hybrid", drivetrain: "4WD",
        powerHp: 671, torqueNm: 786, weightKg: 1030, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans winner","Hypercar","Hybrid","Endurance"],
        wikipedia: "Ferrari_499P",
        description: "The 499P marked Ferrari's return to top-class sports-prototype racing after 50 years, and it won the 24 Hours of Le Mans on its very first attempt in 2023, Ferrari's first overall win there since 1965. It went on to complete a Le Mans hat trick in 2024 and 2025, pairing a stressed-member twin-turbo V6 with a front-axle electric motor.",
      },
    ],
  },
  {
    setNum: "77237", owned: true,
    name: "Dodge Challenger SRT Hellcat", year: 2025, pieces: 390,
    cars: [
      {
        id: "dodge-challenger-srt-hellcat", make: "Dodge", model: "Challenger SRT Hellcat", modelYear: 2015,
        country: "United States", region: "American", gtCategory: "N800", carType: "Road",
        engine: "6.2L supercharged V8", drivetrain: "FR",
        powerHp: 707, torqueNm: 881, weightKg: 2027, topSpeedKmh: 320, zeroTo100: 3.9,
        tags: ["Muscle","Supercharged","V8"],
        wikipedia: "Dodge_Challenger_(2008)", photo: "File:Dodge Challenger SRT Hellcat 2015-20180909-RM-171853.jpg",
        description: "The SRT Hellcat turned Dodge's retro-styled Challenger into a 707 hp brute when it arrived for 2015, courtesy of a supercharged 6.2-litre Hemi V8. Owners got two key fobs: the black one caps output at 500 hp, while the red one unleashes everything. Car and Driver clocked 0–60 mph in 3.6 seconds, and Dodge claimed a 199 mph top speed.",
      },
    ],
  },
  {
    setNum: "77238", owned: true,
    name: "Lamborghini Revuelto & Lamborghini Huracán STO", year: 2025, pieces: 607,
    cars: [
      {
        id: "lamborghini-revuelto", make: "Lamborghini", model: "Revuelto", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "6.5L V12 plug-in hybrid", drivetrain: "4WD",
        powerHp: 1001, torqueNm: null, weightKg: 1772, topSpeedKmh: 350, zeroTo100: 2.5,
        tags: ["Supercar","Hybrid","V12"],
        wikipedia: "Lamborghini_Revuelto",
        description: "Lamborghini's successor to the Aventador and the brand's first plug-in hybrid, the Revuelto teams an all-new naturally aspirated 6.5-litre V12 with three electric motors for a combined 1,015 PS. It rides on an all-carbon-fibre monocoque 10% lighter than its predecessor's, takes its name from a Spanish fighting bull of the 1880s, and hits 100 km/h in 2.5 seconds.",
      },
      {
        id: "lamborghini-huracan-sto", make: "Lamborghini", model: "Huracán STO", modelYear: 2021,
        country: "Italy", region: "European", gtCategory: "N700", carType: "Road",
        engine: "5.2L V10", drivetrain: "MR",
        powerHp: 631, torqueNm: 565, weightKg: 1339, topSpeedKmh: 310, zeroTo100: 3,
        tags: ["Supercar","Track Toy","V10"],
        wikipedia: "Lamborghini_Huracán", photo: "File:Lamborghini Huracan STO 1X7A0297.jpg",
        description: "The Huracán STO (Super Trofeo Omologato) is a road-legal take on Lamborghini's one-make Super Trofeo racers. It keeps the 640 PS naturally aspirated V10 but sends it to the rear wheels only, adding rear-wheel steering, F1-inspired carbon-ceramic brakes and bodywork that's 75% carbon fibre. A roof snorkel, shark fin and towering rear wing give it pure race-car presence.",
      },
    ],
  },
  {
    setNum: "77239", owned: true,
    name: "Porsche 911 GT3 RS", year: 2025, pieces: 348,
    cars: [
      {
        id: "porsche-911-gt3-rs", make: "Porsche", model: "911 GT3 RS (992)", modelYear: 2022,
        country: "Germany", region: "European", gtCategory: "N600", carType: "Road",
        engine: "4.0L flat-6", drivetrain: "RR",
        powerHp: 518, torqueNm: 465, weightKg: 1450, topSpeedKmh: 296, zeroTo100: 3.2,
        tags: ["Track Toy","Sports Car","Nürburgring"],
        wikipedia: "Porsche_911_GT3", photo: "File:Porsche 911 GT3 RS (2022) 1X7A7164.jpg",
        description: "The 992-generation GT3 RS is Porsche's most aero-obsessed road car yet, generating 860 kg of downforce at 285 km/h, twice its predecessor's figure, with a DRS-style active rear wing. Its 4.0-litre flat-six screams to 9,000 rpm and makes 525 PS. In 2022 it lapped the Nürburgring in 6:44.848, a record for any naturally aspirated production car.",
      },
    ],
  },
  {
    setNum: "77240", owned: true,
    name: "Bugatti Centodieci", year: 2025, pieces: 291,
    cars: [
      {
        id: "bugatti-centodieci", make: "Bugatti", model: "Centodieci", modelYear: 2022,
        country: "France", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "8.0L quad-turbo W16", drivetrain: "4WD",
        powerHp: 1578, torqueNm: null, weightKg: 1976, topSpeedKmh: 380, zeroTo100: 2.4,
        tags: ["Hypercar","Limited Edition","Homage"],
        wikipedia: "Bugatti_Centodieci",
        description: "Built to celebrate Bugatti's 110th birthday (centodieci is Italian for 110), the Centodieci is a modern homage to the wedge-shaped EB 110 of the early 1990s, right down to its five round air intakes. Underneath it's a Chiron with the 8.0-litre quad-turbo W16 turned up to 1,600 PS. Just ten were built at €8 million apiece, the last delivered in December 2022.",
      },
    ],
  },
  {
    setNum: "77241", owned: true,
    name: "2 Fast 2 Furious Honda S2000", year: 2025, pieces: 300,
    cars: [
      {
        id: "honda-s2000-2-fast-2-furious", make: "Honda", model: "S2000 (AP1)", modelYear: 2001,
        country: "Japan", region: "Japanese", gtCategory: "N300", carType: "Road",
        engine: "2.0L inline-4 VTEC", drivetrain: "FR",
        powerHp: 237, torqueNm: 208, weightKg: 1274, topSpeedKmh: null, zeroTo100: null,
        tags: ["JDM","Movie Car","Fast & Furious","Roadster"],
        wikipedia: "Honda_S2000", photo: "File:2001 Honda S2000 2 Fast 2 Furious Petersen Automotive Museum.jpg",
        description: "Suki's hot-pink 2001 Honda S2000 is one of the scene-stealers of 2 Fast 2 Furious, decked out in a wide body kit and airbrushed anime-style graphics. Underneath is Honda's AP1 roadster, whose F20C four-cylinder revs to 9,000 rpm and claimed the highest specific output of any naturally aspirated production engine. Actress Devon Aoki had no driver's licence and took lessons during filming.",
      },
    ],
  },
  {
    setNum: "77242", owned: false,
    name: "Ferrari SF-24", year: 2025, pieces: 275,
    cars: [
      {
        id: "ferrari-sf-24", make: "Ferrari", model: "SF-24", modelYear: 2024,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Ferrari 066/12 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season","Race winner"],
        wikipedia: "Ferrari_SF-24",
        description: "Ferrari's 2024 challenger, known internally as Project 676, was raced by Charles Leclerc and Carlos Sainz, with Oliver Bearman impressing on debut when Sainz needed appendicitis surgery. Sainz bounced back to win in Australia, Leclerc conquered Monaco and Monza, and Sainz added Mexico City. Five wins and 22 podiums carried Ferrari to second in the Constructors' Championship, just 14 points behind McLaren.",
      },
    ],
  },
  {
    setNum: "77243", owned: true,
    name: "Oracle Red Bull Racing RB20", year: 2025, pieces: 251,
    cars: [
      {
        id: "red-bull-rb20", make: "Red Bull Racing", model: "RB20", modelYear: 2024,
        country: "Austria", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Honda RBPT 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season","Drivers' champion"],
        wikipedia: "Red_Bull_Racing_RB20",
        description: "The RB20 opened 2024 with the same crushing pace as its record-breaking predecessor, but McLaren and Ferrari reeled it in as the season wore on. Max Verstappen still took all nine of its Grand Prix wins and clinched the drivers' title in Las Vegas, yet Sergio Pérez's struggles left Red Bull third among constructors. It was the last Red Bull penned by Adrian Newey.",
      },
    ],
  },
  {
    setNum: "77244", owned: false,
    name: "Mercedes-AMG PETRONAS F1 Team W15 E Performance", year: 2025, pieces: 267,
    cars: [
      {
        id: "mercedes-w15", make: "Mercedes-AMG", model: "F1 W15 E Performance", modelYear: 2024,
        country: "Germany", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Mercedes-AMG M15 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season","Race winner"],
        wikipedia: "Mercedes_W15",
        description: "Mercedes tore up its car concept for 2024, and the W15 brought the Silver Arrows back to winning ways. George Russell triumphed in Austria and Las Vegas, while Lewis Hamilton, in his farewell season with the team, won his home race at Silverstone and then Spa. Inconsistency still left Mercedes fourth in the Constructors' Championship, its lowest finish since 2012.",
      },
    ],
  },
  {
    setNum: "77245", owned: false,
    name: "Aston Martin Aramco F1 AMR24", year: 2025, pieces: 269,
    cars: [
      {
        id: "aston-martin-amr24", make: "Aston Martin", model: "AMR24", modelYear: 2024,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Mercedes-AMG M15 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "Aston_Martin_AMR24",
        description: "Aston Martin's fourth Formula One car since returning to the sport carried double world champion Fernando Alonso and Lance Stroll through 2024. After the podium-hunting AMR23, the AMR24 proved a step backwards and failed to score a single podium all season. The team still held on to fifth in the Constructors' Championship with 94 points, its livery showing more bare carbon to save weight.",
      },
    ],
  },
  {
    setNum: "77246", owned: false,
    name: "Visa Cash App VCARB 01", year: 2025, pieces: 248,
    cars: [
      {
        id: "rb-vcarb-01", make: "RB", model: "VCARB 01", modelYear: 2024,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Honda RBPT 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "RB_VCARB_01",
        description: "The first car built after Red Bull's sister team dropped the AlphaTauri name, the VCARB 01 leaned more heavily on Red Bull hardware, borrowing its suspension and gearbox. Yuki Tsunoda raced it all season, while Daniel Ricciardo gave way to Liam Lawson for the final six rounds after Singapore, where he set the fastest lap. RB finished eighth in the constructors' standings with 46 points.",
      },
    ],
  },
  {
    setNum: "77247", owned: false,
    name: "KICK Sauber F1 Team C44", year: 2025, pieces: 259,
    cars: [
      {
        id: "kick-sauber-c44", make: "Sauber", model: "C44", modelYear: 2024,
        country: "Switzerland", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Ferrari 066/12 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "Kick_Sauber_C44",
        description: "The first car to carry the Sauber name again after the Alfa Romeo partnership ended, the C44 was driven by Valtteri Bottas and Zhou Guanyu in their final year with the Swiss team. Poor reliability and upgrades that missed the mark kept it rooted at the back, and its only points came from Zhou's eighth place in Qatar. Sauber finished last in the Constructors' Championship.",
      },
    ],
  },
  {
    setNum: "77248", owned: false,
    name: "BWT Alpine F1 Team A524", year: 2025, pieces: 258,
    cars: [
      {
        id: "alpine-a524", make: "Alpine", model: "A524", modelYear: 2024,
        country: "France", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Renault E-Tech RE24 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "Alpine_A524",
        description: "Alpine's 2024 car began the season as arguably the slowest on the grid, partly because it was around 11 kg over the minimum weight. Pierre Gasly and Esteban Ocon kept chipping away as upgrades arrived, and the payoff came at the São Paulo Grand Prix, where they delivered the team's first-ever double podium. Alpine climbed to sixth in the Constructors' Championship.",
      },
    ],
  },
  {
    setNum: "77249", owned: false,
    name: "Williams Racing FW46", year: 2025, pieces: 263,
    cars: [
      {
        id: "williams-fw46", make: "Williams", model: "FW46", modelYear: 2024,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Mercedes-AMG M15 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "Williams_FW46",
        description: "Williams overhauled its manufacturing process for 2024, but stopgap metal parts left the FW46 over the weight limit and an estimated 0.45 seconds a lap off its potential. Alexander Albon led the line, while Franco Colapinto replaced Logan Sargeant for the final nine races. A season riddled with crashes yielded just 17 points and ninth in the Constructors' Championship.",
      },
    ],
  },
  {
    setNum: "77250", owned: false,
    name: "MoneyGram Haas F1 Team VF-24", year: 2025, pieces: 242,
    cars: [
      {
        id: "haas-vf-24", make: "Haas", model: "VF-24", modelYear: 2024,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Race",
        engine: "Ferrari 066/10 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season"],
        wikipedia: "Haas_VF-24",
        description: "A clear step up from its predecessor, the VF-24 gave Kevin Magnussen and Nico Hülkenberg, both in their final year with Haas, a regular shot at points. Hülkenberg's sixth places in Austria and Britain were its best results, and reserve Oliver Bearman made two starts when Magnussen was banned and later unwell. Haas finished seventh in the Constructors' Championship with 58 points.",
      },
    ],
  },
  {
    setNum: "77251", owned: false,
    name: "McLaren F1 Team MCL38", year: 2025, pieces: 269,
    cars: [
      {
        id: "mclaren-mcl38", make: "McLaren", model: "MCL38", modelYear: 2024,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "Mercedes-AMG M15 1.6L turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 798, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","2024 season","Constructors' champion"],
        wikipedia: "McLaren_MCL38",
        description: "The car that ended McLaren's 26-year wait for a Constructors' Championship. An early upgrade cured the team's long-standing weakness in slow corners, and both Lando Norris and Oscar Piastri took their maiden Grand Prix wins with it. Six victories and 21 podiums made the MCL38 the first title-winning F1 car to use customer engines since the Brawn BGP 001.",
      },
    ],
  },

  // ──────────────── 2026 ────────────────
  {
    setNum: "30734", owned: false,
    name: "Mini F1 ACADEMY Car", year: 2026, pieces: 58, polybag: true,
    cars: [
      {
        id: "f1-academy-tatuus-f4-t421", make: "Tatuus", model: "F4-T421 (F1 Academy)", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.4 L Autotecnica turbo I4", drivetrain: "MR",
        powerHp: 174, torqueNm: null, weightKg: 570, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 4","Open-wheeler","Spec Series","F1 Academy"],
        wikipedia: "Tatuus_F4-T421", photo: "File:F1 Academy 2023 Spielberg Nr. 15 García (side 2).jpg",
        description: "The Tatuus F4-T421 is the carbon-monocoque Formula 4 car that F1 Academy, Formula One's all-female junior championship, has raced since its 2023 debut. Every team runs an identical chassis with a unique wing package, Pirelli tyres and a 174 hp turbocharged Autotecnica four-cylinder, so results come down to driver skill on F1 support-race weekends.",
      },
    ],
  },
  {
    setNum: "77252", owned: true,
    name: "APXGP Team Race Car", year: 2026, pieces: 268,
    cars: [
      {
        id: "apxgp-f1-movie-car", make: "APXGP", model: "Race Car (F1 The Movie)", modelYear: 2025,
        country: "United Kingdom", region: "European", gtCategory: "Gr.X", carType: "Fictional",
        engine: "3.4 L Mecachrome V634 turbo V6 (Dallara F2 base)", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Movie Car","Formula 1","Open-wheeler"],
        wikipedia: "F1_(film)", photo: "File:Sonny Hayes APXGP Car.jpg",
        description: "APXGP is the struggling fictional team Brad Pitt's Sonny Hayes rescues in the 2025 film F1. The black-and-gold cars are real: Dallara F2 2018 chassis stretched, widened and fitted with an F1-style aero kit by Mercedes Applied Science, run by Carlin. They even had their own garage at real Grands Prix, where footage was shot between sessions.",
      },
    ],
  },
  {
    setNum: "77253", owned: true,
    name: "Bugatti Vision Gran Turismo", year: 2026, pieces: 284,
    cars: [
      {
        id: "bugatti-vision-gran-turismo", make: "Bugatti", model: "Vision Gran Turismo", modelYear: 2015,
        country: "France", region: "European", gtCategory: "Gr.X", carType: "Concept",
        engine: "8.0 L quad-turbo W16", drivetrain: "4WD",
        powerHp: 1479, torqueNm: null, weightKg: 1724, topSpeedKmh: 447, zeroTo100: null,
        tags: ["Vision GT","Concept","Hypercar","W16"],
        wikipedia: "Bugatti_Vision_Gran_Turismo",
        description: "Bugatti's contribution to the Vision Gran Turismo program, unveiled at the 2015 Frankfurt Motor Show, blends road-car looks with LMP1 prototype aero and a livery honouring the Le Mans-winning Type 57G Tank. It previewed the Chiron's design, and only one example exists. Its simulated top speed of roughly 447 km/h comes from a virtual Circuit de la Sarthe rather than a real run.",
      },
    ],
  },
  {
    setNum: "77254", owned: true,
    name: "Ferrari SF90 XX Stradale", year: 2026, pieces: 339,
    cars: [
      {
        id: "ferrari-sf90-xx-stradale", make: "Ferrari", model: "SF90 XX Stradale", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "4.0 L F154 twin-turbo V8 + 3 electric motors (PHEV)", drivetrain: "4WD",
        powerHp: 1016, torqueNm: 804, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Hypercar","Hybrid","Track Toy","Limited Edition"],
        wikipedia: "Ferrari_SF90_Stradale", photo: "File:2024 Ferrari SF90 XX Stradale in Bianco Artico, front left (cropped).jpg",
        description: "The SF90 XX Stradale is the track-focused evolution of Ferrari's plug-in hybrid flagship, and unlike the FXX and 599XX programs before it, it is fully road legal. Its twin-turbo V8 and three electric motors combine for 1,030 PS, and Ferrari built just 799 coupés, every one of them pre-allocated to customers.",
      },
    ],
  },
  {
    setNum: "77255", owned: true,
    name: "Lightning McQueen", year: 2026, pieces: 270,
    cars: [
      {
        id: "lightning-mcqueen", make: "Disney/Pixar", model: "Lightning McQueen", modelYear: 2006,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Fictional",
        engine: null, drivetrain: null,
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Movie Car","Stock Car","Piston Cup"],
        wikipedia: "Lightning_McQueen",
        description: "Lightning McQueen, the cocky No. 95 rookie voiced by Owen Wilson, is the star of Pixar's Cars franchise. Unlike most of the films' characters, he isn't based on a single real model: designers blended favourite details from cars like the Ford GT40 and Dodge Charger. Over his career he wins seven Piston Cups before mentoring Cruz Ramirez in Cars 3.",
      },
    ],
  },
  {
    setNum: "77256", owned: true,
    name: "Time Machine from Back to the Future", year: 2026, pieces: 357,
    cars: [
      {
        id: "delorean-time-machine", make: "DeLorean", model: "DMC-12 Time Machine", modelYear: 1981,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Fictional",
        engine: "2.85 L PRV V6", drivetrain: "RR",
        powerHp: 130, torqueNm: 207, weightKg: 1233, topSpeedKmh: 209, zeroTo100: null,
        tags: ["Movie Car","Classic","Gull-wing","Time Travel"],
        wikipedia: "DeLorean_time_machine",
        description: "Doc Brown's time machine is a stainless-steel DeLorean DMC-12 fitted with a flux capacitor that needs 1.21 gigawatts and a speed of 88 mph to jump through time. The filmmakers picked 88 because it was easy to remember and looked cool on the speedometer, which had to be custom-made since US speedometers of the era stopped at 85 mph.",
      },
    ],
  },
  {
    setNum: "77257", owned: false,
    name: "McLaren W1", year: 2026, pieces: 287,
    cars: [
      {
        id: "mclaren-w1", make: "McLaren", model: "W1", modelYear: 2026,
        country: "United Kingdom", region: "European", gtCategory: "N1000", carType: "Road",
        engine: "4.0 L MHP-8 twin-turbo V8 hybrid", drivetrain: "MR",
        powerHp: 1258, torqueNm: 1340, weightKg: 1399, topSpeedKmh: 350, zeroTo100: 2.7,
        tags: ["Hypercar","Hybrid","Limited Edition"],
        wikipedia: "McLaren_W1",
        description: "Unveiled in October 2024 as the successor to the P1, the W1 is McLaren's latest flagship hypercar. Its MHP-8 twin-turbo V8 and radial-flux electric motor deliver 1,275 PS to the rear wheels, giving 911 PS per tonne at a 1,399 kg dry weight. Ground-effect aero and an active rear wing with a DRS mode come straight from the race team's playbook.",
      },
    ],
  },
  {
    setNum: "77258", owned: false,
    name: "F1 ACADEMY LEGO Race Car", year: 2026, pieces: 201,
    cars: [
      {
        id: "f1-academy-tatuus-f4-t421", make: "Tatuus", model: "F4-T421 (F1 Academy)", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.4 L Autotecnica turbo I4", drivetrain: "MR",
        powerHp: 174, torqueNm: null, weightKg: 570, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 4","Open-wheeler","Spec Series","F1 Academy"],
        wikipedia: "Tatuus_F4-T421", photo: "File:F1 Academy 2023 Spielberg Nr. 15 García (side 2).jpg",
        description: "The Tatuus F4-T421 is the carbon-monocoque Formula 4 car that F1 Academy, Formula One's all-female junior championship, has raced since its 2023 debut. Every team runs an identical chassis with a unique wing package, Pirelli tyres and a 174 hp turbocharged Autotecnica four-cylinder, so results come down to driver skill on F1 support-race weekends.",
      },
    ],
  },
  {
    setNum: "77259", owned: false,
    name: "Audi Revolut F1 Team R26 Race Car", year: 2026, pieces: 215,
    cars: [
      {
        id: "audi-r26", make: "Audi", model: "R26", modelYear: 2026,
        country: "Germany", region: "European", gtCategory: "Gr.X", carType: "Race",
        engine: "1.6 L Audi AFR 26 turbo V6 hybrid", drivetrain: "MR",
        powerHp: null, torqueNm: null, weightKg: 770, topSpeedKmh: null, zeroTo100: null,
        tags: ["Formula 1","Hybrid","Open-wheeler"],
        wikipedia: "Audi_R26",
        description: "The R26 is Audi's first Formula One car, built at Hinwil after the brand's takeover of Sauber and raced in 2026 by Nico Hülkenberg and Gabriel Bortoleto. It runs Audi's own AFR 26 hybrid power unit, making it the first Hinwil-built car without Ferrari power since the BMW Sauber F1.09 of 2009.",
      },
    ],
  },
  {
    setNum: "77260", owned: false,
    name: "Fast & Furious Toyota Supra MK4", year: 2026, pieces: 292,
    cars: [
      {
        id: "toyota-supra-mk4-fast-furious", make: "Toyota", model: "Supra Turbo (A80)", modelYear: 1994,
        country: "Japan", region: "Japanese", gtCategory: "N400", carType: "Road",
        engine: "3.0 L 2JZ-GTE twin-turbo I6", drivetrain: "FR",
        powerHp: 320, torqueNm: 427, weightKg: 1565, topSpeedKmh: 250, zeroTo100: null,
        tags: ["JDM","Movie Car","Tuner","Classic"],
        wikipedia: "Toyota_Supra_(A80)", photo: "File:Toyota Supra (A80) ver.the Fast and the Furious.jpg",
        description: "The fourth-generation Supra's 2JZ-GTE straight-six uses sequential twin turbos for strong low-rpm torque, and its overbuilt internals made it a tuning legend. An orange A80 driven by Brian O'Conner in The Fast and the Furious turned it into a pop-culture icon. Toyota trimmed at least 90 kg compared with the previous generation despite adding airbags and bigger brakes.",
      },
    ],
  },
  {
    setNum: "77261", owned: true,
    name: "Ferrari 499P", year: 2026, pieces: 329,
    cars: [
      {
        id: "ferrari-499p", make: "Ferrari", model: "499P", modelYear: 2023,
        country: "Italy", region: "European", gtCategory: "Gr.1", carType: "Race",
        engine: "3.0 L F163CG twin-turbo V6 hybrid", drivetrain: "4WD",
        powerHp: 671, torqueNm: 786, weightKg: 1030, topSpeedKmh: null, zeroTo100: null,
        tags: ["Le Mans winner","Hypercar","Hybrid","Endurance"],
        wikipedia: "Ferrari_499P",
        description: "The 499P marked Ferrari's return to top-class sports-prototype racing after 50 years, and it won the 24 Hours of Le Mans on its very first attempt in 2023, Ferrari's first overall win there since 1965. It went on to complete a Le Mans hat trick in 2024 and 2025, pairing a stressed-member twin-turbo V6 with a front-axle electric motor.",
      },
    ],
  },
  {
    setNum: "77262", owned: true,
    name: "Ken Block's 1965 Ford Mustang Hoonicorn RTR V1", year: 2026, pieces: 345,
    cars: [
      {
        id: "ford-mustang-hoonicorn-rtr-v1", make: "Ford", model: "Mustang Hoonicorn RTR V1", modelYear: 1965,
        country: "United States", region: "American", gtCategory: "Gr.X", carType: "Race",
        engine: "6.7 L Roush Yates V8 (naturally aspirated, ITBs)", drivetrain: "4WD",
        powerHp: 845, torqueNm: 976, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Gymkhana","Muscle Car","Drift","Restomod"],
        wikipedia: "Ken_Block", photo: "File:The Hoonigan (19382791173).jpg",
        description: "Built for Ken Block's Gymkhana Seven video through the streets of Los Angeles, the Hoonicorn is a 1965 Mustang on a full tube chassis with carbon RTR bodywork. A 410-cubic-inch Roush Yates V8 with individual throttle bodies sends 845 hp through a one-off Sadev all-wheel-drive system. The same car later evolved into the Hoonicorn V2 for Block's Climbkhana run up Pikes Peak.",
      },
    ],
  },
  {
    setNum: "77263", owned: false,
    name: "BMW M3 (E30)", year: 2026, pieces: 358,
    cars: [
      {
        id: "bmw-m3-e30", make: "BMW", model: "M3 (E30)", modelYear: 1986,
        country: "Germany", region: "European", gtCategory: "N200", carType: "Road",
        engine: "2.3 L S14 I4", drivetrain: "FR",
        powerHp: 192, torqueNm: null, weightKg: null, topSpeedKmh: 235, zeroTo100: null,
        tags: ["Classic","Homologation Special","DTM","Touring Car"],
        wikipedia: "BMW_M3_(E30)", photo: "File:1987 BMW M3 E30 Silver.jpg",
        description: "The original M3 was a homologation special built so BMW could race the E30 in DTM and Group A touring cars, requiring 5,000 road cars. Its high-revving S14 four-cylinder paired a head derived from the S38 six with an M10 block, while a flattened rear window and raised bootlid cut drag. It remains one of the most celebrated driver's cars ever built.",
      },
    ],
  },
  {
    setNum: "77264", owned: true,
    name: "Jaguar F-TYPE Project 7 & Land Rover Defender Classic", year: 2026, pieces: 740,
    cars: [
      {
        id: "jaguar-f-type-project-7", make: "Jaguar", model: "F-Type Project 7", modelYear: 2015,
        country: "United Kingdom", region: "European", gtCategory: "N600", carType: "Road",
        engine: "5.0 L AJ133 supercharged V8", drivetrain: "FR",
        powerHp: 567, torqueNm: 700, weightKg: null, topSpeedKmh: 299, zeroTo100: null,
        tags: ["Roadster","Limited Edition","D-Type Tribute","Supercharged"],
        wikipedia: "Jaguar_F-Type", photo: "File:2015 Jaguar F-Type Project 7 5.0.jpg",
        description: "The Project 7 began as a skunkworks sketch by designer César Pieri that he showed to Ian Callum by chance. It became a 250-unit speedster based on the F-Type Convertible, with a 575 PS supercharged V8, a fixed rear spoiler an aluminium body and a D-Type-style 'Aero Haunch' behind the driver, a nod to Jaguar's Le Mans-winning past.",
      },
      {
        id: "land-rover-defender-classic", make: "Land Rover", model: "Defender 90", modelYear: 1983,
        country: "United Kingdom", region: "European", gtCategory: "N200", carType: "Road",
        engine: null, drivetrain: "4WD",
        powerHp: null, torqueNm: null, weightKg: null, topSpeedKmh: null, zeroTo100: null,
        tags: ["Off-road","Classic","4x4","Icon"],
        wikipedia: "Land_Rover_Defender",
        description: "The classic Defender traces its lineage to the 1948 Series Land Rover. Launched as the One Ten in 1983 and the Ninety a year later, it took the Defender name in 1990 and stayed in production until 2016. Permanent four-wheel drive, a ladder chassis and aluminium bodywork made it a go-anywhere workhorse, and more than two million Series and Defender models were built.",
      },
    ],
  },
];
