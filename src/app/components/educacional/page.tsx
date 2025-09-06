// src/app/components/educacional/page.tsx
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

// Imagens locais
import imgCriptomoedas from "./img/criptomoedas.png";
import imgBlockchain from "./img/blockchain.png";
import imgBitcoin from "./img/bitcoin.jpg";
import imgSmartContracts from "./img/ethereum.png";
import imgCarteiras from "./img/carteiras.png";
import imgComoComprar from "./img/como-comprar.png";
import imgNfts from "./img/nfts.png";
import imgRisco from "./img/gestao-risco.png";
import imgStable from "./img/stablecoins.png";

type Topic = { slug: string; title: string; image: StaticImageData };

const topics: Topic[] = [
  { slug: "o-que-sao-criptomoedas", title: "O que são Criptomoedas?", image: imgCriptomoedas },
  { slug: "como-funciona-a-blockchain", title: "Como funciona a Blockchain?", image: imgBlockchain },
  { slug: "saiba-mais-sobre-bitcoin", title: "Saiba mais sobre o Bitcoin", image: imgBitcoin },
  { slug: "smart-contracts", title: "Ethereum e a ideia de “smart contracts”", image: imgSmartContracts },
  { slug: "tipos-de-carteiras", title: "Tipos de carteiras", image: imgCarteiras },
  { slug: "como-comprar-criptomoedas", title: "Como comprar criptomoedas", image: imgComoComprar },
  { slug: "nfts", title: "NFTs", image: imgNfts },
  { slug: "volatilidade-e-gestao-de-risco", title: "Volatilidade e gestão de risco", image: imgRisco },
  { slug: "stablecoins", title: "Stablecoins", image: imgStable },
];

export default function EducacionalView() {
  return (
    <main className="relative py-10 md:py-14 text-foreground">
      {/* Fundo da página (100% viewport) */}
      <div className="fixed inset-0 -z-10 bg-[#151515]" aria-hidden />

      {/* Título + descrição (descrição logo abaixo do título) */}
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Aprenda sobre o mundo cripto
        </h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">
          Conteúdos claros e diretos para começar do zero e avançar com
          segurança: fundamentos, ferramentas e boas práticas para navegar no
          universo cripto.
        </p>
      </header>

      {/* Grade 3x3 no desktop */}
      <section
        aria-label="Lista de tópicos educacionais"
        className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {topics.map((t, i) => (
          <Link
            key={t.slug}
            href={`/educacional/${t.slug}`}
            className="group rounded-2xl overflow-hidden border border-[#2A2A2A]
                       bg-[#1B1B1B] hover:bg-[#242424] hover:border-[#3A3A3A]
                       transition-colors shadow-sm focus-visible:outline-none
                       focus-visible:ring-2 focus-visible:ring-white/20"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority={i < 3}
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium leading-snug">{t.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}