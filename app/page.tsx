import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "Gojed - Strony internetowe dla lokalnych firm",
  description:
    "Strony internetowe dla lokalnych firm: Marki, Ząbki, Kobyłka i okolice. Nowoczesna strona, która buduje zaufanie i przyciąga klientów.",
  keywords:
    "strony internetowe Marki, strony internetowe Ząbki, strony internetowe Kobyłka, tworzenie stron dla firm, Gojed",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gojed - Strony internetowe dla lokalnych firm",
    description:
      "Strony internetowe dla lokalnych firm: Marki, Ząbki, Kobyłka i okolice.",
    url: "https://gojed.pl",
    siteName: "Gojed",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gojed - Strony internetowe dla lokalnych firm",
    description:
      "Strony internetowe dla lokalnych firm: Marki, Ząbki, Kobyłka i okolice.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  );
}
