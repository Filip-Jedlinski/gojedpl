"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-line/40">
      <div className="container">
        <nav className="flex items-center justify-between min-h-16 md:min-h-20">
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/iconfull.svg"
              alt="gojed"
              width={90}
              height={90}
              className="w-14 h-14 md:w-20 md:h-20"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/oferta"
              className="text-dark hover:text-primary transition"
            >
              Oferta
            </Link>
            <Link
              href="/o-nas"
              className="text-dark hover:text-primary transition"
            >
              O nas
            </Link>
            <Link
              href="/kontakt"
              className="text-dark hover:text-primary transition"
            >
              Kontakt
            </Link>
            <Link
              href="/faq"
              className="text-dark hover:text-primary transition"
            >
              FAQ
            </Link>
            <Link href="/kontakt" className="btn btn-small">
              Konsultacja
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-line bg-white text-dark"
            aria-label="OtwĂłrz menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="text-2xl leading-none">{isOpen ? "Ă-" : "â°"}</span>
          </button>
        </nav>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="bg-white border border-line rounded-xl p-3 space-y-1">
              <Link
                href="/oferta"
                className="block text-dark text-center py-2 rounded-lg hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                Oferta
              </Link>
              <Link
                href="/o-nas"
                className="block text-dark text-center py-2 rounded-lg hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                O nas
              </Link>
              <Link
                href="/kontakt"
                className="block text-dark text-center py-2 rounded-lg hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <Link
                href="/faq"
                className="block text-dark text-center py-2 rounded-lg hover:bg-surface"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/kontakt"
                className="btn btn-small w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Konsultacja
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
