// Product data — TriSol Ombrelones 2026 catalog (verified against the printed piece).

export type Finish = {
  label: string; // e.g. "estrutura taupe · cobertura fendi"
  structure: string; // css var name for the structure color
  cover: string; // css var name for the cover color
};

export type Model = {
  slug: string;
  index: string; // catalog number, e.g. "01"
  name: string;
  kind: "Lateral" | "Central";
  kindNote?: string; // e.g. "com e sem LED"
  positioning: string; // one-line role in the range
  description: string;
  image: string;
  imageAlt: string;
  specs: {
    tamanhos: string;
    abertura: string;
    vento: string;
    tecido: string;
    garantia: string;
  };
  material: string;
  highlights: string[];
  finishes: Finish[];
  finishNote?: string;
};

export const MODELS: Model[] = [
  {
    slug: "zuri",
    index: "01",
    name: "Zuri",
    kind: "Lateral",
    positioning: "Lateral com ótimo custo-benefício",
    description:
      "Inclinação lateral e frontal da cobertura, rotação de 360° e abertura por manivela anatômica. Mastro e varetas em alumínio, com componentes em liga de alumínio para mais resistência — ideal para uso residencial, em jardins e piscinas.",
    image: "/models/zuri.jpg",
    imageAlt:
      "Ombrelone lateral Zuri em cobertura cor areia sobre um lounge à beira de piscina de borda infinita com vista para o mar",
    specs: {
      tamanhos: "3,00 × 3,00 m · ø 3,30 m",
      abertura: "Manivela anatômica",
      vento: "35 km/h",
      tecido: "Olefin",
      garantia: "12 meses",
    },
    material:
      "Estrutura completa em alumínio · parafusos e rebites em aço inox 304 · tecido Olefin.",
    highlights: [
      "Inclinação frontal e lateral da cobertura",
      "Rotação de 360°",
      "Ponteiras flexíveis para tensionamento",
      "Compatível com LED móvel magnético (opcional)",
    ],
    finishes: [
      { label: "taupe · fendi", structure: "--color-taupe", cover: "--color-fendi" },
      { label: "taupe · sand", structure: "--color-taupe", cover: "--color-sand" },
      { label: "marrom · sand", structure: "--color-marrom", cover: "--color-sand" },
      { label: "black · black", structure: "--color-black-fab", cover: "--color-black-fab" },
      { label: "wooden · sand", structure: "--color-wooden", cover: "--color-sand" },
    ],
    finishNote: "Coberturas customizadas em Poliéster Pro: marinho, flora, gris.",
  },
  {
    slug: "solene",
    index: "02",
    name: "Solene",
    kind: "Lateral",
    kindNote: "com e sem LED",
    positioning: "O lateral premium da linha",
    description:
      "Desenvolvido para máxima durabilidade e conforto de uso. Alumínio espesso, parafusos em aço inoxidável e reforço em couro na cobertura garantem longa vida útil, mesmo em locais com vento. Inclinação vertical e horizontal, giro de 360° e opção com LED fixo — ideal para jardins, hotéis, restaurantes e piscinas.",
    image: "/models/solene.jpg",
    imageAlt:
      "Ombrelone lateral premium Solene em cor areia sobre deck de madeira com sofás cinza à beira da piscina",
    specs: {
      tamanhos: "3,00 × 3,00 m · ø 3,30 m",
      abertura: "Manivela anatômica",
      vento: "50 km/h",
      tecido: "Poliéster Pro",
      garantia: "36 meses",
    },
    material:
      "Estrutura completa em alumínio espesso · parafusos e rebites em aço inox 304 · tecido Poliéster Pro · reforço em couro na cobertura.",
    highlights: [
      "Alumínio espesso + reforço em couro na cobertura",
      "Opção com LED fixo nas varetas e roseta",
      "Giro de 360° e inclinação vertical e horizontal",
      "Garantia de 36 meses contra desbotamento",
    ],
    finishes: [
      { label: "taupe · khaki", structure: "--color-taupe", cover: "--color-khaki" },
      { label: "marrom · marrom", structure: "--color-marrom", cover: "--color-marrom" },
      { label: "black · black", structure: "--color-black-fab", cover: "--color-black-fab" },
    ],
    finishNote: "Coberturas customizadas em Poliéster Pro: marinho, floresta, gris.",
  },
  {
    slug: "vitta",
    index: "03",
    name: "Vitta",
    kind: "Central",
    positioning: "O central clássico",
    description:
      "Abre e fecha de forma ágil pela manivela — e, ao continuar girando, a cobertura inclina automaticamente. Mastro de 38 mm em alumínio, compatível com praticamente todas as bases do mercado, e sistema de inclinação em zinco, mais resistente que o alumínio. Estável, suporta ventos de até 40 km/h.",
    image: "/models/vitta.jpg",
    imageAlt:
      "Ombrelone central Vitta com cobertura preta aberto sobre um sofá branco em pátio com piscina",
    specs: {
      tamanhos: "ø 2,70 m",
      abertura: "Manivela · inclinação automática",
      vento: "40 km/h",
      tecido: "Olefin",
      garantia: "12 meses",
    },
    material:
      "Estrutura completa em alumínio · mastro de 38 mm · parafusos e rebites em aço inox 304 · sistema de inclinação em zinco · tecido Olefin.",
    highlights: [
      "Inclinação automática contínua pela manivela",
      "Mastro de 38 mm em alumínio",
      "Sistema de inclinação em zinco",
      "Compatível com a maioria das bases do mercado",
    ],
    finishes: [
      { label: "taupe · fendi", structure: "--color-taupe", cover: "--color-fendi" },
      { label: "taupe · sand", structure: "--color-taupe", cover: "--color-sand" },
      { label: "marrom · fendi", structure: "--color-marrom", cover: "--color-fendi" },
      { label: "black · black", structure: "--color-black-fab", cover: "--color-black-fab" },
      { label: "wooden · sand", structure: "--color-wooden", cover: "--color-sand" },
    ],
    finishNote: "Coberturas customizadas em Poliéster Pro: marinho, flora, gris.",
  },
  {
    slug: "pub",
    index: "04",
    name: "Pub",
    kind: "Central",
    positioning: "O central comercial de alta resistência",
    description:
      "Ótimo custo-benefício para o corporativo. Abre e fecha pelo sistema push up — basta deslizar a canopla anatômica e travar, como um guarda-chuva. Varetas em fibra de vidro de 12,3 mm e mastro em alumínio com perfil estriado garantem estabilidade: suporta ventos de até 80 km/h.",
    image: "/models/pub.jpg",
    imageAlt:
      "Ombrelone central Pub em cor areia com mastro de madeira sobre um sofá à beira-mar com coqueiros",
    specs: {
      tamanhos: "2,30 × 2,30 m",
      abertura: "Push up com trava",
      vento: "80 km/h",
      tecido: "Olefin",
      garantia: "12 meses",
    },
    material:
      "Estrutura completa em alumínio · varetas em fibra de vidro de 12,3 mm · mastro com perfil estriado · parafusos e rebites em aço inox 304 · tecido Olefin.",
    highlights: [
      "Sistema push up com trava, como um guarda-chuva",
      "Varetas em fibra de vidro de 12,3 mm",
      "Mastro em alumínio com perfil estriado",
      "A maior resistência ao vento da linha: 80 km/h",
    ],
    finishes: [
      { label: "taupe · sand", structure: "--color-taupe", cover: "--color-sand" },
      { label: "marrom · fendi", structure: "--color-marrom", cover: "--color-fendi" },
      { label: "black · black", structure: "--color-black-fab", cover: "--color-black-fab" },
      { label: "wooden · sand", structure: "--color-wooden", cover: "--color-sand" },
    ],
    finishNote: "Coberturas customizadas em Poliéster Pro: marinho, flora, gris.",
  },
  {
    slug: "brisa",
    index: "05",
    name: "Brisa",
    kind: "Central",
    positioning: "O central econômico",
    description:
      "Econômico para o corporativo. Abre e fecha através de uma manivela de fácil e ágil utilização e inclina a cobertura por botão. Estrutura em alumínio com varetas em aço e pintura eletrostática — ideal para jardins, hotéis, bares, restaurantes e piscinas.",
    image: "/models/brisa.jpg",
    imageAlt:
      "Ombrelone central Brisa em cor areia, com cobertura inclinada, ao lado de um espreguiçadeira à beira da piscina com folhagem tropical ao fundo",
    specs: {
      tamanhos: "ø 2,50 m",
      abertura: "Manivela · inclinação por botão",
      vento: "30 km/h",
      tecido: "Poliéster",
      garantia: "6 meses",
    },
    material:
      "Estrutura em alumínio · varetas em aço · pintura eletrostática · tecido Poliéster.",
    highlights: [
      "Inclinação da cobertura por botão",
      "Varetas em aço com pintura eletrostática",
      "Manivela de fácil e ágil utilização",
      "Ótimo custo para jardins, bares e restaurantes",
    ],
    finishes: [],
    finishNote: "Cores e coberturas sob consulta.",
  },
];
