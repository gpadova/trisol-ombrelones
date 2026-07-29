import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});

const SITE_URL = "https://www.trisolombrelones.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TriSol Ombrelones — Alta performance em proteção solar",
    template: "%s · TriSol Ombrelones",
  },
  description:
    "Ombrelones de alta performance para áreas externas. Do lateral premium ao central econômico — Zuri, Solene, Vitta, Pub e Brisa. Alumínio, aço inox 304 e tecidos técnicos com garantia de até 36 meses.",
  keywords: [
    "ombrelone",
    "ombrelone lateral",
    "ombrelone central",
    "guarda-sol",
    "área externa",
    "piscina",
    "TriSol",
  ],
  authors: [{ name: "TriSol" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "TriSol Ombrelones",
    title: "TriSol Ombrelones — Luz e sombra em equilíbrio",
    description:
      "Ombrelones de alta performance para áreas externas. Estrutura em alumínio e aço inox 304, tecidos técnicos e o estilo elegante e atemporal que marca cada modelo.",
    images: [{ url: "/models/zuri.jpg", width: 1318, height: 937, alt: "Ombrelone lateral TriSol Zuri à beira de uma piscina de borda infinita" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Arm JS-only entrance animations before first paint (no FOUC, no-JS stays visible) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-body">{children}</body>
    </html>
  );
}
