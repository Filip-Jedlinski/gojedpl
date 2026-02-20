import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Polityka prywatności | Gojed",
  description:
    "Polityka prywatności serwisu gojed.pl - informacje o przetwarzaniu danych i kontakcie.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="py-20">
      <article className="container max-w-2xl prose">
        <h1 className="mb-4">Polityka prywatności</h1>
        <p className="text-muted text-sm mb-6">Data aktualizacji: 19.02.2026</p>
        <p className="text-dark mb-6">
          Niniejsza polityka prywatności określa zasady przetwarzania danych
          osobowych przekazywanych przez użytkowników za pośrednictwem
          formularza kontaktowego na stronie gojed.pl.
        </p>

        <h2 className="mt-8 mb-4">1. Administrator danych</h2>
        <p className="text-dark">
          Administratorem danych jest zespół gojed. Kontakt w sprawach danych
          osobowych:{" "}
          <a href="mailto:kontakt@gojed.pl" className="text-primary">
            kontakt@gojed.pl
          </a>
          .
        </p>

        <h2 className="mt-8 mb-4">2. Zakres przetwarzanych danych</h2>
        <p className="text-dark mb-2">
          W formularzu kontaktowym mogą być przetwarzane następujące dane:
        </p>
        <ul className="text-dark space-y-1 mb-6">
          <li>• imię i nazwisko,</li>
          <li>• nazwa firmy,</li>
          <li>• adres e-mail,</li>
          <li>• numer telefonu,</li>
          <li>• treść wiadomości dotycząca projektu.</li>
        </ul>

        <h2 className="mt-8 mb-4">3. Cel i podstawa przetwarzania</h2>
        <p className="text-dark mb-6">
          Dane przetwarzamy wyłącznie w celu kontaktu zwrotnego, przygotowania
          oferty i realizacji współpracy. Podstawą przetwarzania jest zgoda
          użytkownika oraz działania zmierzające do zawarcia umowy.
        </p>

        <h2 className="mt-8 mb-4">4. Odbiorcy danych</h2>
        <p className="text-dark mb-6">
          Dane mogą być przekazywane podmiotom technicznym obsługującym
          formularz kontaktowy i infrastrukturę strony, wyłącznie w zakresie
          niezbędnym do jej działania. Formularz kontaktowy jest obsługiwany
          przez Formspree (podmiot przetwarzający dane na zlecenie).
        </p>

        <h2 className="mt-8 mb-4">5. Czas przechowywania danych</h2>
        <p className="text-dark mb-6">
          Dane przechowywane są przez okres niezbędny do obsługi zapytania i
          dalszego kontaktu handlowego, nie dłużej niż jest to wymagane przez
          przepisy prawa lub uzasadniony interes administratora.
        </p>

        <h2 className="mt-8 mb-4">6. Prawa użytkownika</h2>
        <p className="text-dark mb-6">
          Użytkownik ma prawo dostępu do danych, ich sprostowania, usunięcia,
          ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
          sprzeciwu i cofnięcia zgody.
        </p>

        <h2 className="mt-8 mb-4">7. Pliki cookies</h2>
        <p className="text-dark mb-6">
          Strona wykorzystuje wyłącznie techniczne pliki cookies niezbędne do
          działania serwisu. Obecnie nie używamy zewnętrznych narzędzi
          analitycznych ani reklamowych. Ustawienia cookies możesz kontrolować w
          swojej przeglądarce.
        </p>

        <h2 className="mt-8 mb-4">8. Kontakt</h2>
        <p className="text-dark">
          W razie pytań dotyczących prywatności skontaktuj się pod adresem:{" "}
          <a href="mailto:kontakt@gojed.pl" className="text-primary">
            kontakt@gojed.pl
          </a>
          .
        </p>

        <Link href="/" className="btn mt-8 inline-block">
          Wróć na stronę główną
        </Link>
      </article>
    </main>
  );
}
