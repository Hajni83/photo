"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Category } from "@/lib/categories";
import FallbackImage from "./FallbackImage";

type Props = {
  category: Category | null;
  onClose: () => void;
};

export default function Lightbox({ category, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const count = category?.gallery.length ?? 0;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // új kategória megnyitásakor az első képtől induljon
  useEffect(() => {
    if (category) setIndex(0);
  }, [category]);

  useEffect(() => {
    if (!category) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [category, onClose, prev, next]);

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex flex-col bg-ink-900/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${category.name} fotózás galéria`}
        >
          {/* fejléc */}
          <div
            className="flex items-center justify-between px-5 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-xl text-blush-50">
              {category.name}{" "}
              <span className="italic text-blush-200/70">fotózás</span>
              <span className="ml-3 align-middle text-sm font-sans text-blush-200/60">
                {index + 1} / {count}
              </span>
            </p>
            <button
              onClick={onClose}
              aria-label="Galéria bezárása"
              className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-blush-100 transition-colors hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* nagy kép */}
          <div className="relative flex-1 px-4 pb-2 sm:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.gallery[index]}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                className="relative h-full w-full overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <FallbackImage
                  src={category.gallery[index]}
                  alt={`${category.name} fotózás – ${index + 1}. kép`}
                  sizes="100vw"
                  fit="contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* lapozók */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Előző kép"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-blush-50 backdrop-blur transition-colors hover:bg-white/25 sm:left-5"
            >
              ‹
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Következő kép"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-blush-50 backdrop-blur transition-colors hover:bg-white/25 sm:right-5"
            >
              ›
            </button>
          </div>

          {/* bélyegképek */}
          <div
            className="flex justify-center gap-2.5 px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            {category.gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}. kép megnyitása`}
                className={`relative h-14 w-14 overflow-hidden rounded-lg transition-all sm:h-16 sm:w-16 ${
                  i === index
                    ? "ring-2 ring-gold-400 ring-offset-2 ring-offset-ink-900"
                    : "opacity-50 hover:opacity-90"
                }`}
              >
                <FallbackImage
                  src={src}
                  alt=""
                  sizes="64px"
                  className="text-[0px]"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
