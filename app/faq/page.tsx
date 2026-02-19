import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ | Znajdź Odpowiedzi na Najczęstsze Pytania - Gojed",
  description:
    "Najczęstsze pytania o naszych usługach, procesie realizacji i gwarancjach.",
};

export default function FAQPage() {
  return (
    <main>
      <section className="section pt-24">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1 className="mb-4">Najczęstsze pytania</h1>
          <p className="text-dark text-lg max-w-2xl mb-12">
            Znajdź odpowiedzi na pytania dotyczące naszych usług, procesu
            realizacji i warunków współpracy.
          </p>
        </div>
      </section>
      <FAQ fullWidth />
    </main>
  );
}
