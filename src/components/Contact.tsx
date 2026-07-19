"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories, contactEmail, location } from "@/lib/categories";
import SectionTitle from "./SectionTitle";

const inputClasses =
  "w-full rounded-xl border border-blush-200 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-ink-500/60 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Érdeklődés – ${type || "fotózás"} (${name})`
    );
    const body = encodeURIComponent(
      `Kedves Marcsi!\n\n${message}\n\nÜdvözlettel:\n${name}\n${email}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kapcsolat" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Írj bátran"
          title="Kapcsolat"
          lead="Kérdésed van, vagy időpontot foglalnál? Töltsd ki az űrlapot, és hamarosan jelentkezem!"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* űrlap */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-blush-50 p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-700">
                  Név *
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Teljes neved"
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-700">
                  E-mail *
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="pl. minta@email.hu"
                  className={inputClasses}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-700">
                Milyen fotózás érdekel?
              </span>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={inputClasses}
              >
                <option value="">Válassz…</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={`${cat.name} fotózás`}>
                    {cat.name} fotózás
                  </option>
                ))}
                <option value="Egyéb">Egyéb</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-ink-700">
                Üzenet *
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Írd le röviden, mire gondoltál – helyszín, időpont, létszám…"
                className={`${inputClasses} resize-none`}
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full rounded-full bg-ink-900 py-3.5 font-medium tracking-wide text-blush-50 transition-colors hover:bg-gold-600"
            >
              Üzenet küldése
            </motion.button>
            <p className="mt-3 text-center text-xs text-ink-500">
              A gomb a levelezőprogramodat nyitja meg, az üzenet innen közvetlenül
              nem kerül elküldésre.
            </p>
          </motion.form>

          {/* elérhetőségek + térkép */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${contactEmail}`}
                className="group rounded-2xl bg-blush-50 p-5 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-gold-600">
                  E-mail
                </p>
                <p className="mt-2 break-all text-sm font-medium text-ink-900 group-hover:text-gold-600">
                  {contactEmail}
                </p>
              </a>
              <div className="rounded-2xl bg-blush-50 p-5">
                <p className="text-xs font-medium uppercase tracking-widest text-gold-600">
                  Helyszín
                </p>
                <p className="mt-2 text-sm font-medium">{location}</p>
                <p className="mt-1 text-xs text-ink-500">
                  és környéke – kültéri helyszíneken is
                </p>
              </div>
            </div>

            <div className="relative min-h-72 flex-1 overflow-hidden rounded-2xl shadow-md">
              <iframe
                title="Mezőkövesd térképen"
                src="https://www.google.com/maps?q=Mez%C5%91k%C3%B6vesd&z=12&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
