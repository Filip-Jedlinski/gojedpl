import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/iconfull.svg"
              alt="gojed"
              width={65}
              height={65}
              className="mb-3"
            />
            <p className="text-dark">My zbudujemy, Ty działaj.</p>
          </div>
          <div>
            <p className="font-bold mb-2">Szybkie linki</p>
            <Link
              href="/oferta"
              className="block text-dark hover:text-primary text-sm mb-1"
            >
              Oferta
            </Link>
            <Link
              href="/o-nas"
              className="block text-dark hover:text-primary text-sm mb-1"
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="block text-dark hover:text-primary text-sm"
            >
              Kontakt
            </Link>
            <Link
              href="/faq"
              className="block text-dark hover:text-primary text-sm mt-1"
            >
              FAQ
            </Link>
          </div>
          <div>
            <p className="font-bold mb-2">Informacje</p>
            <Link
              href="/polityka-prywatnosci"
              className="block text-dark hover:text-primary text-sm mb-1"
            >
              Polityka prywatności
            </Link>
            <p className="text-dark/70 text-xs mt-3">
              Zespół: Filip Jedliński, Arkadiusz Goździcki
            </p>
            <p className="text-dark/70 text-xs mt-1">© {year} Gojed</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
