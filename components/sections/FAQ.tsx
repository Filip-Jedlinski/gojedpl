"use client";

import { useState } from "react";

export default function FAQ({ fullWidth = false }: { fullWidth?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Ile trwa realizacja strony?",
      a: "Najczęściej 5–10 dni roboczych, zależnie od zakresu i szybkości akceptacji materiałów.",
    },
    {
      q: "Czy podpisujemy umowę?",
      a: "Tak. Pracujemy na jasnych ustaleniach i umowie określającej zakres, termin i warunki współpracy.",
    },
    {
      q: "Czy pomogliście przy domenie i hostingu?",
      a: "Tak, pomagamy kupić domenę i podpiąć ją do gotowej strony.",
    },
    {
      q: "Czy strona będzie dobrze działać na telefonie?",
      a: "Tak, każda realizacja powstaje w podejściu mobile-first i jest testowana na urządzeniach mobilnych.",
    },
    {
      q: "Czy oferujecie wsparcie po wdrożeniu?",
      a: "Tak, można dokupić opiekę techniczną i dalszy serwis strony.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center md:text-left">
          <p className="eyebrow">FAQ</p>
          <h2 className={fullWidth ? "mb-8 md:mb-10" : "mb-10 md:mb-12"}>
            Najczęstsze pytania przed startem
          </h2>
        </div>
        <div
          className={fullWidth ? "space-y-3" : "max-w-2xl mx-auto space-y-3"}
        >
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface border border-line rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 font-semibold flex justify-between items-center hover:bg-surface-soft transition text-left text-dark"
              >
                {faq.q}
                <span
                  className="text-primary transition-transform duration-200"
                  style={{
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </button>
              {open === idx && (
                <div className="px-4 pb-4 border-t border-line/40">
                  <p className="text-dark text-sm leading-relaxed pt-3">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
