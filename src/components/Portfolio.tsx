"use client";

import { motion } from "framer-motion";
import { categories } from "@/lib/categories";
import FallbackImage from "./FallbackImage";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  return (
    <section id="munkaim" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Portfólió"
          title="Munkáim"
          lead="Minden fotózás egy külön kis történet. Válaszd ki, melyik áll hozzád a legközelebb!"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.slug}
              href="#kapcsolat"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.12 }}
              whileHover="hover"
              className={`group relative block overflow-hidden rounded-2xl shadow-md ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className={i === 0 ? "aspect-[3/4] lg:h-full lg:min-h-full" : "aspect-[4/3]"}>
                <div className="relative h-full w-full">
                  <FallbackImage
                    src={cat.image}
                    alt={`${cat.name} fotózás`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  {cat.description}
                </motion.p>
              </div>

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
