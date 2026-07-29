import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Intro } from "./components/Intro";
import { Models } from "./components/Models";
import { Comparison } from "./components/Comparison";
import { Materials } from "./components/Materials";
import { Care } from "./components/Care";
import { Footer } from "./components/Footer";
import { MODELS } from "./lib/models";
import { SITE } from "./lib/site";

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Brand",
        name: "TriSol Ombrelones",
        slogan: "Luz e sombra em equilíbrio.",
        url: SITE.url,
      },
      ...MODELS.map((m) => ({
        "@type": "Product",
        name: `Ombrelone ${m.name}`,
        category: `Ombrelone ${m.kind}`,
        brand: { "@type": "Brand", name: "TriSol" },
        description: m.description,
        image: `${SITE.url}${m.image}`,
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Intro />
        <Models />
        <Comparison />
        <Materials />
        <Care />
      </main>
      <Footer />
    </>
  );
}
