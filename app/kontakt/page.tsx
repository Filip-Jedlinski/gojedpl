import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z nami: +48 575 121 253, kontakt@gojed.pl. Odpowiadamy szybko i konkretnie.",
  alternates: {
    canonical: "/kontakt",
  },
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
