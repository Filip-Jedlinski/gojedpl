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
  title: {
    default: "Gojed | Strony internetowe dla firm w całej Polsce",
    template: "%s | Gojed",
  },
  description:
    "Nowoczesne strony internetowe dla małych firm z całej Polski. Pakiet START, Pakiet BIZNES.",
  keywords:
    "strony internetowe Polska, strony internetowe dla firm, strona wizytowka dla firmy, tworzenie stron internetowych, Gojed",
  metadataBase: new URL("https://www.gojed.pl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Gojed",
    title: "Gojed | Strony internetowe dla firm w całej Polsce",
    description: "Nowoczesne strony internetowe dla małych firm z całej Polski",
    url: "https://www.gojed.pl",
    images: [
      {
        url: "/iconfull.svg",
        alt: "Gojed - strony internetowe dla firm w całej Polsce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gojed | Strony internetowe dla firm w całej Polsce",
    description: "Nowoczesne strony internetowe dla małych firm z całej Polski",
    images: ["/iconfull.svg"],
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
