"use client";

import { motion } from "framer-motion";
import FallbackImage from "./FallbackImage";

const heroImages = [
  { src: "/images/eskuvoi.jpg", alt: "Esküvői fotó", className: "rotate-[-4deg]" },
  { src: "/images/ujszulott.jpg", alt: "Újszülött fotó", className: "rotate-[2deg]" },
  { src: "/images/kismama.jpg", alt: "Kismama fotó", className: "rotate-[5deg]" },
];

export default function Hero() {
  return (
    <section
      id="kezdolap"
      className="relative flex min-h-svh items-center overflow-hidden pt-24"
    >
      {/* háttérdíszek */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blush-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-gold-400/15 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-gold-600"
          >
            Fotográfus · Mezőkövesd
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl"
          >
            Pillanatok,
            <br />
            amik <span className="italic text-gold-600">örökre</span>
            <br />
            megmaradnak
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-md text-ink-500"
          >
            Kismama, családi, esküvői és újszülött fotózás szeretettel,
            természetes fényekkel – hogy a legszebb emlékeitek képeken is
            tovább éljenek.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#munkaim"
              className="rounded-full bg-ink-900 px-7 py-3 font-medium tracking-wide text-blush-50 transition-transform hover:scale-105 hover:bg-gold-600"
            >
              Munkáim megtekintése
            </a>
            <a
              href="#kapcsolat"
              className="rounded-full border border-ink-900/30 px-7 py-3 font-medium tracking-wide transition-colors hover:border-gold-600 hover:text-gold-600"
            >
              Írj nekem
            </a>
          </motion.div>
        </div>

        {/* fotókollázs */}
        <div className="relative mx-auto h-[22rem] w-full max-w-xs sm:h-[30rem] sm:max-w-md">
          {heroImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              className={`absolute overflow-hidden rounded-2xl border-8 border-white shadow-xl ${img.className}`}
              style={{
                width: "62%",
                aspectRatio: "3 / 4",
                left: `${i * 19}%`,
                top: `${i * 8}%`,
              }}
            >
              <FallbackImage src={img.src} alt={img.alt} sizes="(max-width: 640px) 60vw, 300px" priority={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* lefelé görgetés jelző */}
      <motion.a
        href="#rolam"
        aria-label="Görgess tovább"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="block h-10 w-6 rounded-full border-2 border-ink-500/50 p-1"
        >
          <span className="mx-auto block h-2 w-1 rounded-full bg-ink-500/60" />
        </motion.span>
      </motion.a>
    </section>
  );
}
