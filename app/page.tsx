import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";

export const metadata: Metadata = {
  title: "Strona główna",
  description:
    "Tworzymy nowoczesne strony internetowe dla lokalnych firm z Marek, Ząbek, Kobyłki i okolic.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CTA />
    </>
  );
}
