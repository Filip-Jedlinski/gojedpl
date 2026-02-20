import type { Metadata } from "next";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Najczęstsze pytania o naszych usługach, procesie realizacji i gwarancjach.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ile trwa realizacja strony?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Najczęściej 5-10 dni roboczych, zależnie od zakresu i szybkości akceptacji materiałów.",
        },
      },
      {
        "@type": "Question",
        name: "Czy podpisujemy umowę?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Pracujemy na jasnych ustaleniach i umowie określającej zakres, termin i warunki współpracy.",
        },
      },
      {
        "@type": "Question",
        name: "Czy strona będzie dobrze działać na telefonie?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, każda realizacja powstaje w podejściu mobile-first i jest testowana na urządzeniach mobilnych.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
