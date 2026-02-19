import type { Metadata } from "next";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "O nas | Poznaj Nas Lepiej! - Gojed",
  description: "Kim jesteśmy, jak pracujemy i jakie projekty zrealizowaliśmy.",
};

export default function ONasPage() {
  return (
    <main>
      <section className="section pt-24">
        <div className="container text-center md:text-left">
          <p className="eyebrow">O nas</p>
          <h1 className="mb-4">Zespół Gojed</h1>
          <p className="text-dark text-lg max-w-2xl mb-12 mx-auto md:mx-0">
            Filip Jedliński, Arkadiusz Goździcki. Tworzymy nowoczesne strony dla
            lokalnych firm. Wpieramy lokalne biznesy w rozwoju i cyfryzacji.
          </p>
        </div>
      </section>
      <Process />
      <Portfolio />
    </main>
  );
}
