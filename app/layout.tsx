import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/_Components/Footer";
import Header from "@/_Components/Header";

export const metadata: Metadata = {
  title: {
    default: "GSAS - Groupe Scolaire",
    template: "%s | GSAS",
  },
  description:
    "GSAS - Groupe Scolaire. Découvrez notre établissement, nos actualités, nos formations et nos espaces primaire et secondaire.",
  keywords: [
    "GSAS",
    "GSAS Mali",
    "EPMS",
    "Lycée LPDJICOUL",
    "LPDJICOUL",
    "Groupe Scolaire Amadou Sidibé",
    "Djinèssira Coulibaly"
  ],
  metadataBase: new URL("https://www.gsas.ml"),
  alternates: {
    canonical: "https://www.gsas.ml",
  },
  openGraph: {
    title: "GSAS - Groupe Scolaire",
    description:
      "Découvrez le Groupe Scolaire",
    url: "https://www.gsas.ml",
    siteName: "GSAS",
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logoModifier.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        <Header />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
