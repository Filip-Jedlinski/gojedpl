import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Gojed | My zbudujemy, ty działaj.",
  description:
    "Strony internetowe dla lokalnych firm. Nowoczesna strona, która buduje zaufanie i przyciąga klientów. Tworzymy szybkie i profesjonalne strony dla mikro i małych firm. Umów darmową konsultację i ciesz się swoją stroną.",
  keywords:
    "strony internetowe Marki, strony internetowe Ząbki, strony internetowe Kobyłka, tworzenie stron dla firm, Gojed",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gojed | My zbudujemy, ty działaj.",
    description:
      "Strony internetowe dla lokalnych firm. Nowoczesna strona, która buduje zaufanie i przyciąga klientów.",
    url: "https://www.gojed.pl",
    siteName: "Gojed",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gojed | My zbudujemy, ty działaj.",
    description:
      "Strony internetowe dla lokalnych firm. Nowoczesna strona, która buduje zaufanie i przyciąga klientów.",
  },
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gojed",
    url: "https://www.gojed.pl",
    description:
      "Strony internetowe dla lokalnych firm. Nowoczesna strona, która buduje zaufanie i przyciąga klientów.",
    hasPart: [
      {
        "@type": "WebPage",
        name: "Oferta",
        url: "https://www.gojed.pl/oferta",
      },
      {
        "@type": "WebPage",
        name: "Kontakt",
        url: "https://www.gojed.pl/kontakt",
      },
      {
        "@type": "WebPage",
        name: "O nas",
        url: "https://www.gojed.pl/o-nas",
      },
      {
        "@type": "WebPage",
        name: "FAQ",
        url: "https://www.gojed.pl/faq",
      },
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.gojed.pl/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <Features />
      <CTA />
    </>
  );
}
