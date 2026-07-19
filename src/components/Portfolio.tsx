"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories, type Category } from "@/lib/categories";
import FallbackImage from "./FallbackImage";
import SectionTitle from "./SectionTitle";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  return (
    <section id="munkaim" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Portfólió"
          title="Munkáim"
          lead="Minden fotózás egy külön kis történet. Kattints egy kártyára, és nézz bele a galériába!"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.slug}
              type="button"
              onClick={() => setOpenCategory(cat)}
              aria-label={`${cat.name} fotózás galéria megnyitása`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
              whileHover="hover"
              className={`group relative block cursor-pointer overflow-hidden rounded-2xl text-left shadow-md ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className={i === 0 ? "aspect-[3/4] lg:h-full lg:min-h-full" : "aspect-[4/3]"}>
                <div className="relative h-full w-full">
                  <FallbackImage
                    src={cat.image}
                    alt={`${cat.name} fotózás`}
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 400px"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    }
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-ink-900/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-2xl text-white">
                  {cat.name}{" "}
                  <span className="text-base font-light italic text-blush-200">
                    fotózás
                  </span>
                </h3>
                <motion.p
                  variants={{ hover: { opacity: 1, y: 0 } }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 hidden text-sm text-blush-100/90 sm:block"
                >
                  Galéria megnyitása →
                </motion.p>
              </div>

              {/* nagyító ikon */}
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox category={openCategory} onClose={() => setOpenCategory(null)} />
    </section>
  );
}
