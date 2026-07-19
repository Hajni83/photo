"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "#rolam", label: "Rólam" },
  { href: "#munkaim", label: "Munkáim" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blush-50/85 shadow-[0_2px_20px_rgba(33,29,28,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#kezdolap" aria-label="Marcsi Photo – kezdőlap">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-widest text-ink-700 transition-colors hover:text-ink-900"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#kapcsolat"
              className="rounded-full bg-ink-900 px-5 py-2 text-sm font-medium tracking-wide text-blush-50 transition-colors hover:bg-gold-600"
            >
              Időpontfoglalás
            </a>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
          aria-expanded={open}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="h-0.5 w-6 bg-ink-900" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-6 bg-ink-900" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="h-0.5 w-6 bg-ink-900" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-blush-200 bg-blush-50/95 backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-sm font-medium uppercase tracking-widest text-ink-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
