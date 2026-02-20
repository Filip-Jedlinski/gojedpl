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
  searchParams?:
    | {
        pakiet?: string | string[];
      }
    | Promise<{
        pakiet?: string | string[];
      }>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const resolvedSearchParams = await Promise.resolve(searchParams);

  const requestedPackage = Array.isArray(resolvedSearchParams?.pakiet)
    ? resolvedSearchParams?.pakiet[0]
    : resolvedSearchParams?.pakiet;

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
