import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DecorationCircles from "@/components/DecorationCircles";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gojed | Strony internetowe dla lokalnych firm",
  description:
    "Nowoczesne strony internetowe dla małych firm z Marek, Ząbek, Kobyłki i okolic. Pakiet START, Pakiet BIZNES.",
  keywords:
    "strony internetowe Marki, strona wizytówka Marki, strony internetowe Kobyłka, strony internetowe Ząbki, strony internetowe Zielonka, Gojed",
  metadataBase: new URL("https://gojed.pl"),
  openGraph: {
    title: "Gojed | Strony internetowe dla lokalnych firm",
    description: "Nowoczesne strony internetowe dla małych firm",
    url: "https://gojed.pl",
    images: [{ url: "/iconfull.svg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.variable} bg-white text-dark overflow-x-hidden relative`}
      >
        <DecorationCircles />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
