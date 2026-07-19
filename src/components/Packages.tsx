"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

type Package = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

const packages: Package[] = [
  {
    name: "Minicsomag",
    price: "25 000 Ft",
    tagline: "Egy gyors, mégis emlékezetes fotózás",
    features: [
      "kb. 30 perc fotózás",
      "1 helyszín",
      "10 retusált kép",
      "Online galéria",
      "Átadás 1 héten belül",
    ],
  },
  {
    name: "Klasszikus",
    price: "45 000 Ft",
    tagline: "A legkedveltebb választás",
    highlighted: true,
    features: [
      "kb. 60 perc fotózás",
      "1–2 helyszín",
      "25 retusált kép",
      "Online galéria",
      "Ruhaváltási lehetőség",
      "Átadás 2 héten belül",
    ],
  },
  {
    name: "Bővített",
    price: "70 000 Ft",
    tagline: "Amikor minden pillanat számít",
    features: [
      "kb. 2 óra fotózás",
      "Több helyszín",
      "50 retusált kép",
      "Online galéria",
      "Ruhaváltási lehetőség",
      "Az összes sikerült kép átadása",
      "Átadás 2 héten belül",
    ],
  },
];

export default function Packages() {
  return (
    <section id="csomagok" className="scroll-mt-24 bg-blush-100/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Árak"
          title="Csomagok"
          lead="Válaszd ki a hozzátok legjobban illő csomagot – ha kérdésed van, írj bátran, közösen megtaláljuk a megfelelőt!"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-2xl p-7 shadow-md transition-shadow hover:shadow-xl ${
                pkg.highlighted
                  ? "bg-ink-900 text-blush-50 md:-my-4 md:py-11"
                  : "bg-white"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-600 px-4 py-1 text-xs font-medium uppercase tracking-widest text-white shadow">
                  Legnépszerűbb
                </span>
              )}

              <h3 className="font-serif text-2xl">{pkg.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  pkg.highlighted ? "text-blush-200/80" : "text-ink-500"
                }`}
              >
                {pkg.tagline}
              </p>

              <p className="mt-5 font-serif text-4xl text-gold-600">
                {pkg.price}
                <span
                  className={`ml-2 align-middle text-sm font-sans ${
                    pkg.highlighted ? "text-blush-200/70" : "text-ink-500"
                  }`}
                >
                  -tól
                </span>
              </p>

              <ul
                className={`mt-6 flex-1 space-y-2.5 text-sm ${
                  pkg.highlighted ? "text-blush-100/90" : "text-ink-700"
                }`}
              >
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-gold-400">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#kapcsolat"
                className={`mt-8 rounded-full py-3 text-center text-sm font-medium tracking-wide transition-colors ${
                  pkg.highlighted
                    ? "bg-gold-600 text-white hover:bg-gold-400"
                    : "bg-ink-900 text-blush-50 hover:bg-gold-600"
                }`}
              >
                Ezt választom
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-sm text-ink-500"
        >
          Az árak tájékoztató jellegűek – esküvői fotózásra kérj egyedi
          ajánlatot! Az utazás Mezőkövesd 30 km-es körzetében díjmentes.
        </motion.p>
      </div>
    </section>
  );
}
