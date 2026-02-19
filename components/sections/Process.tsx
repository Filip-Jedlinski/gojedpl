"use client";

export default function Process() {
  const steps = [
    "Krótka rozmowa i poznanie potrzeb biznesu.",
    "Wybór pakietu, wycena i termin realizacji.",
    "Umowa i rozpoczęcie prac po wpłacie.",
    "Wersja demo online i poprawki.",
    "Publikacja strony, testy i przekazanie projektu.",
    "Dalsza opieka techniczna jako opcja serwisowa.",
  ];

  return (
    <section className="section section-soft" id="proces">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="eyebrow">Jak pracujemy</p>
          <h2 className="mb-10 md:mb-12">
            Prosty i bezpieczny proces współpracy
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-surface border border-line rounded-xl p-6 text-center md:text-left"
            >
              <div className="grid place-items-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm leading-none mb-4 mx-auto md:mx-0">
                {idx + 1}
              </div>
              <p className="text-dark">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
