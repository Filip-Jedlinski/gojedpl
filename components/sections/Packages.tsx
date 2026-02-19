"use client";

import Link from "next/link";

export default function Packages() {
  const packages = [
    {
      name: "Pakiet START",
      subtitle: "One-page / wizytówka online",
      price: "Wycena Indywidualna",
      features: [
        "Jedna strona przedstawiająca firmę",
        "Sekcje: O nas, Oferta, Kontakt + mapa",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Podpięcie domeny klienta",
      ],
      featured: false,
    },
    {
      name: "Pakiet BIZNES",
      subtitle: "Mini-strona firmowa (4–5 podstron)",
      price: "Wycena Indywidualna",
      features: [
        "Podstrony: O nas, Oferta, Kontakt, Cennik, FAQ",
        "Formularz + mapa Google",
        "Zaawansowane SEO",
        "Podpięcie domeny + SSL",
        "Projekt mobile-first",
      ],
      featured: true,
    },
  ];

  return (
    <section className="section section-soft" id="oferta">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="eyebrow">Oferta</p>
          <h2 className="mb-10 md:mb-12">Wybierz pakiet dla swojej firmy</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition ${
                pkg.featured
                  ? "bg-surface/80 border-primary/30 shadow-lg"
                  : "bg-surface border-line"
              } text-center md:text-left`}
            >
              <p className="text-primary text-sm font-bold mb-2">{pkg.name}</p>
              <h3 className="mb-2">{pkg.subtitle}</h3>
              <p className="text-2xl font-black text-primary mb-6">
                {pkg.price}
              </p>
              <ul className="space-y-2 mb-8 text-dark text-left">
                {pkg.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <Link
                href={{
                  pathname: "/kontakt",
                  query: { pakiet: pkg.name },
                }}
                className="btn btn-small w-full text-center"
              >
                Wybieram {pkg.name.split(" ")[1]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
