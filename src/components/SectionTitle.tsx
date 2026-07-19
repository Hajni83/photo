"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export default function SectionTitle({ eyebrow, title, lead }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-gold-600">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 text-ink-500">{lead}</p>}
      <span className="mx-auto mt-6 block h-px w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
    </motion.div>
  );
}
