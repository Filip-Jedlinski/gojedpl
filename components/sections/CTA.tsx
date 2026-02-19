"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="section section-soft">
      <div className="container text-center">
        <p className="eyebrow">Gotowy na zmianę?</p>
        <h2 className="mb-8">Zacznijmy pracę nad Twoją stroną</h2>
        <p className="text-dark text-lg max-w-2xl mx-auto mb-8">
          Poznaj naszą ofertę, procesy i realizacje. Jesteśmy gotowi na pytania.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <Link href="/oferta" className="btn w-full sm:w-auto">
            Sprawdź ofertę
          </Link>
          <Link href="/kontakt" className="btn btn-ghost w-full sm:w-auto">
            Skontaktuj się
          </Link>
        </div>
      </div>
    </section>
  );
}
