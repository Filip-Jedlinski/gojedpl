import type { Metadata } from "next";
import Packages from "@/components/sections/Packages";

export const metadata: Metadata = {
  title: "Oferta",
  description:
    "Pakiet START i Pakiet BIZNES - wybierz stronę internetową dopasowaną do potrzeb Twojej firmy.",
  alternates: {
    canonical: "/oferta",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfertaPage() {
  return (
    <main>
      <Packages />
      <section className="section pt-24">
        <div className="container">
          <p className="eyebrow">Oferta</p>
          <h1 className="mb-4">Pakiety dopasowane do Twoich potrzeb</h1>
          <p className="text-dark text-lg max-w-2xl mb-12">
            Wybierz pakiet który spełnia Twoje oczekiwania. Skontaktuj się z
            nami, aby omówić szczegóły. Przez formularz kontaktowy lub
            telefonicznie.
          </p>
        </div>
      </section>
    </main>
  );
}
