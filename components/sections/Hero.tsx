"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="section pt-12 md:pt-20 lg:pt-32">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 text-center lg:text-left">
            <p className="eyebrow mx-auto lg:mx-0">
              Strony internetowe dla lokalnych firm
            </p>
            <h1 className="mb-4">
              Nowoczesna strona, która buduje zaufanie i przyciąga klientów
            </h1>
            <p className="text-dark text-lg max-w-2xl mb-6 mx-auto lg:mx-0">
              Tworzymy szybkie i profesjonalne strony dla mikro i małych
              biznesów. Bez skomplikowanego procesu, za to z jasną ofertą,
              krótkim terminem i wsparciem po wdrożeniu.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8 justify-center lg:justify-start">
              <Link href="/kontakt" className="btn w-full sm:w-auto">
                Bezpłatna konsultacja
              </Link>
              <Link href="/oferta" className="btn btn-ghost w-full sm:w-auto">
                Zobacz pakiety
              </Link>
            </div>
            <ul className="space-y-2 text-dark max-w-md mx-auto lg:mx-0 text-left">
              <li>✓ Umowa i jasne etapy współpracy</li>
              <li>✓ Responsywność mobile-first</li>
              <li>✓ Wsparcie i opieka po publikacji</li>
            </ul>
          </div>

          <div className="bg-surface border border-line rounded-2xl p-6 max-w-xl mx-auto lg:max-w-none w-full">
            <h2 className="text-xl mb-4 text-center lg:text-left">
              Dlaczego klienci wybierają NAS
            </h2>
            <div className="space-y-4">
              <div className="bg-surface-soft border border-line rounded-lg p-3">
                <strong className="block text-primary-strong">
                  Błyskawiczna Realizacja.
                </strong>
                <span className="text-xs text-dark/80">
                  Stawiamy na szybkie i efektywne realizacje.
                </span>
              </div>
              <div className="bg-surface-soft border border-line rounded-lg p-3">
                <strong className="block text-primary-strong">
                  Niskie ceny usług
                </strong>
                <span className="text-xs text-dark/80">
                  Oferujemy konkurencyjne ceny dostosowane do potrzeb lokalnych
                  firm.
                </span>
              </div>
              <div className="bg-surface-soft border border-line rounded-lg p-3">
                <strong className="block text-primary-strong">
                  Obsługa lokalnych firm
                </strong>
                <span className="text-xs text-dark/80">
                  Skupiamy się na potrzebach lokalnych przedsiębiorstw, oferując
                  spersonalizowane rozwiązania.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
