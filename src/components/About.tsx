"use client";

import { motion } from "framer-motion";
import FallbackImage from "./FallbackImage";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: "7+", label: "fotózási stílus" },
  { value: "100%", label: "szeretettel készül" },
  { value: "∞", label: "megörökített emlék" },
];

export default function About() {
  return (
    <section id="rolam" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Ismerj meg" title="Rólam" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 -rotate-2 rounded-2xl bg-blush-200" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
              <FallbackImage
                src="/images/rolam.jpg"
                alt="Marcsi, a fotós"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-serif text-3xl">
              Szia, <span className="italic text-gold-600">Marcsi</span> vagyok!
            </h3>
            <p className="mt-5 leading-relaxed text-ink-700">
              Mezőkövesden élek és alkotok, a fényképezőgépem pedig már régóta
              hűséges társam. Számomra a fotózás nem csupán munka, hanem
              szenvedély: hiszem, hogy minden pillanatban ott rejlik valami
              megismételhetetlen szépség, amit érdemes megörökíteni.
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              Legyen szó a várandósság csodájáról, egy újszülött első napjairól,
              az esküvőtök nagy pillanatairól vagy egy önfeledt családi
              délutánról – célom, hogy a képeken keresztül újra és újra
              átélhessétek ezeket az érzéseket. Nálam nincs merev pózolás:
              természetes, őszinte pillanatokat fotózok, sok nevetéssel.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  <p className="font-serif text-4xl text-gold-600">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-ink-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
