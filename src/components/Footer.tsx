import Logo from "./Logo";
import { contactEmail } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="bg-ink-900 py-10 text-blush-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <Logo className="text-blush-50" />
        <p className="max-w-md text-sm text-blush-200/70">
          Kismama · Családi · Esküvői · Újszülött · Páros · Kutyás · Lovas
          fotózás – Mezőkövesd és környéke
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="text-sm text-blush-200 underline-offset-4 hover:underline"
        >
          {contactEmail}
        </a>
        <p className="text-xs text-blush-200/50">
          © {new Date().getFullYear()} Marcsi Photo · Minden jog fenntartva
        </p>
      </div>
    </footer>
  );
}
