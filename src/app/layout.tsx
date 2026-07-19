import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import DemoBanner from "@/components/DemoBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Marcsi Photo – Fotózás Mezőkövesden",
  description:
    "Kismama, családi, esküvői, újszülött, páros, kutyás és lovas fotózás Mezőkövesden és környékén. Pillanatok, amik örökre megmaradnak.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-7">
        {children}
        <DemoBanner />
      </body>
    </html>
  );
}
