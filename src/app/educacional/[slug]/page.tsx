// src/app/educacional/[slug]/page.tsx
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const title = params.slug
    .split("-")
    .map((w) => (w[0] ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
  return { title: `${title} • Educacional` };
}

export default function EducacionalSlugPage({ params }: Props) {
  return (
    <main className="py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        {params.slug.replaceAll("-", " ")}
      </h1>

      <p className="text-muted-foreground mb-8">
        Conteúdo em breve. Estamos preparando um material completo para você.
      </p>
      
        <Link
        href="/educacional"
        className="inline-flex items-center px-4 py-2 rounded-lg border border-[#2A2A2A]
                    bg-[#1B1B1B] hover:bg-[#242424] hover:border-[#3A3A3A]
                    transition-colors"
        >
        ← Voltar para Educacional
        </Link>

    </main>
  );
}
