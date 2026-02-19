import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt | Skontaktuj Się z Nami - Gojed",
  description:
    "Skontaktuj się z nami. Telefon: +48 575 121 253, Email: kontakt@gojed.pl",
};

type KontaktPageProps = {
  searchParams?: {
    pakiet?: string | string[];
  };
};

export default function KontaktPage({ searchParams }: KontaktPageProps) {
  const requestedPackage = Array.isArray(searchParams?.pakiet)
    ? searchParams?.pakiet[0]
    : searchParams?.pakiet;

  const preselectedPackage =
    requestedPackage === "Pakiet START" || requestedPackage === "Pakiet BIZNES"
      ? requestedPackage
      : undefined;

  return (
    <main>
      <Contact fullWidth preselectedPackage={preselectedPackage} />
    </main>
  );
}
