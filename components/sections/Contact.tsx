"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact({
  fullWidth = false,
  preselectedPackage,
}: {
  fullWidth?: boolean;
  preselectedPackage?: "Pakiet START" | "Pakiet BIZNES";
}) {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Wysyłanie...");

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/xaqddowe", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("✓ Wiadomość wysłana! Odpowiemy w ciągu 24h.");
        e.currentTarget.reset();
      } else {
        const payload = await response.json().catch(() => null);
        const errorMessage = payload?.errors?.[0]?.message;
        setStatus(
          errorMessage
            ? `Coś poszło nie tak: ${errorMessage}`
            : "Coś poszło nie tak. Skontaktuj się telefonicznie.",
        );
      }
    } catch {
      setStatus(
        "Wiadomość mogła zostać wysłana. Jeśli nie dostaniesz odpowiedzi, zadzwoń do nas.",
      );
    } finally {
      setLoading(false);
    }
  };

  const sectionClass = "section section-soft";
  const wrapperClass = fullWidth ? "max-w-6xl mx-auto" : "";
  const layoutClass = fullWidth
    ? "grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-start"
    : "grid lg:grid-cols-2 gap-12";

  return (
    <section className={sectionClass} id="kontakt">
      <div className="container">
        <div className={wrapperClass}>
          <div className={layoutClass}>
            <div className="space-y-6 text-center lg:text-left">
              <div>
                <p className="eyebrow">Kontakt</p>
                <h1
                  className={fullWidth ? "text-4xl md:text-5xl mb-4" : "mb-4"}
                >
                  Porozmawiajmy o Twojej stronie
                </h1>
                <p className="text-dark text-lg max-w-xl mx-auto lg:mx-0">
                  Napisz, czego potrzebujesz, a zaproponujemy najlepszy pakiet i
                  konkretne kolejne kroki.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <a
                  href="mailto:kontakt@gojed.pl"
                  className="bg-white border border-line rounded-xl p-4 hover:border-primary/40 transition"
                >
                  <p className="text-xs font-semibold text-muted mb-1">
                    E-mail
                  </p>
                  <p className="text-dark font-semibold">kontakt@gojed.pl</p>
                </a>

                <a
                  href="tel:+48575121253"
                  className="bg-white border border-line rounded-xl p-4 hover:border-primary/40 transition"
                >
                  <p className="text-xs font-semibold text-muted mb-1">
                    Telefon
                  </p>
                  <p className="text-dark font-semibold">+48 575 121 253</p>
                </a>
              </div>

              <div className="bg-white border border-line rounded-xl p-4 text-left">
                <p className="text-xs font-semibold text-muted mb-1">
                  Obszar działania
                </p>
                <p className="text-dark">
                  Marki, Kobyłka, Zielonka, Radzymin, Tłuszcz, Ząbki
                </p>
              </div>

              {fullWidth && (
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-left">
                  <p className="text-sm text-dark">
                    Im więcej szczegółów podasz w formularzu, tym szybciej
                    przygotujemy sensowną propozycję i wycenę.
                  </p>
                </div>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className={`bg-white border border-line rounded-2xl p-6 md:p-8 ${fullWidth ? "w-full" : "max-w-2xl mx-auto w-full"}`}
            >
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <input
                type="hidden"
                name="_subject"
                value="Nowe zapytanie z formularza gojed.pl"
              />

              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl mb-2">
                  Formularz kontaktowy
                </h2>
                <p className="text-muted text-sm">
                  Wypełnij pola poniżej - wrócimy z odpowiedzią możliwie szybko.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="text-sm font-semibold mb-1 block">
                    Imię i nazwisko
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold mb-1 block">
                    Firma
                  </span>
                  <input
                    type="text"
                    name="company"
                    maxLength={150}
                    autoComplete="organization"
                    className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <label className="block">
                  <span className="text-sm font-semibold mb-1 block">
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    maxLength={150}
                    autoComplete="email"
                    className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold mb-1 block">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={30}
                    autoComplete="tel"
                    className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                  />
                </label>
              </div>

              <label className="block mb-4">
                <span className="text-sm font-semibold mb-1 block">
                  Wybierz pakiet
                </span>
                <select
                  name="package"
                  defaultValue={preselectedPackage ?? ""}
                  required
                  className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                >
                  <option value="" disabled>
                    Wybierz pakiet
                  </option>
                  <option value="Pakiet START">Pakiet START</option>
                  <option value="Pakiet BIZNES">Pakiet BIZNES</option>
                </select>
              </label>

              <label className="block mb-4">
                <span className="text-sm font-semibold mb-1 block">
                  Opis projektu
                </span>
                <textarea
                  name="message"
                  rows={6}
                  required
                  maxLength={3000}
                  className="w-full bg-surface-soft border border-line rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary/50"
                />
              </label>

              <label className="flex items-start gap-2 text-sm text-dark mb-6">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1"
                />
                <span>
                  Wyrażam zgodę na kontakt w sprawie zapytania. Zapoznałem/am
                  się z{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-primary hover:text-primary-strong"
                  >
                    Polityką prywatności
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="btn w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Wysyłanie..." : "Wyślij zapytanie"}
              </button>

              {status && (
                <p
                  className={`mt-3 text-sm text-center ${
                    status.startsWith("✓") ? "text-primary" : "text-orange-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
