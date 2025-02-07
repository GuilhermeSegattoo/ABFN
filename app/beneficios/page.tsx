"use client";

import { Shield, Percent, Share2, Leaf, Building, Gift, GraduationCap, Heart, UtensilsCrossed, Shirt, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Defesa dos direitos familiares",
    description: "Garantia de maior equidade no tratamento social, fiscal e de consumo, onde famílias com os mesmos valores e desafios se conectam para compartilhar experiências, soluções e recursos. Nossa comunidade está sempre pronta para auxiliar em momentos de necessidade, promovendo segurança e acolhimento.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    icon: Shield,
  },
  {
    title: "Descontos exclusivos",
    description: "Acordos negociados com empresas para obter descontos vantajosos. Nossa rede de parceiros oferece condições especiais para garantir mais economia no dia a dia da sua família.",
    image: "https://plus.unsplash.com/premium_photo-1672082518029-8619a2c1e9dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2NvbnRvc3xlbnwwfHwwfHx8MA%3D%3D",
    icon: Percent,
  },
  {
    title: "Rede de compartilhamento",
    description: "Plataforma online 'Ambiente restrito' para apoio mútuo e troca de informações úteis entre famílias numerosas. Juntos, criamos uma rede colaborativa que fortalece a comunidade e reduz o desperdício.",
    image: "https://media.istockphoto.com/id/1167647136/pt/vetorial/brazil-map-outline-with-stars-and-lines-abstract-framework.jpg?s=612x612&w=0&k=20&c=A7h7IV78tlOJ8zIOjohCPxzG1rwptkJBbqtouPVVBLM=",
    icon: Share2,
  },
  {
    title: "Sustentabilidade",
    description: "Espaço 'trocas & doações' para reutilização de bens... Através de campanhas de doação e troca de produtos em bom estado, ajudamos a reduzir o impacto ambiental e proporcionamos apoio a famílias que necessitam. Pequenas ações podem fazer uma grande diferença para o planeta e para a sociedade.",
    image: "https://media.istockphoto.com/id/1435661954/pt/foto/children-holding-a-planet-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=akt_7b5MIw4JrR6ZBDVwbM1RySanzYn8yggbfPiWPZ4=",
    icon: Leaf,
  },
  {
    title: "Apoio Jurídico",
    description: "Entendemos que questões legais podem ser desafiadoras para muitas famílias. Por isso, oferecemos suporte jurídico especializado para ajudar em situações essenciais para a segurança e o bem-estar da sua família.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    icon: Shield,
  },
  {
    title: "Parcerias Corporativas",
    description: "Através de nossas parcerias estratégicas com empresas de diversos setores, garantimos benefícios exclusivos aos associados. Desde descontos em serviços essenciais até vantagens em programas de fidelidade, nosso objetivo é proporcionar ainda mais valor e oportunidades para cada membro da comunidade.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80",
    icon: Building,
  },
  {
    title: "Programas Exclusivos",
    description: "Participar da nossa rede significa ter acesso a eventos e programas exclusivos desenvolvidos para fortalecer laços familiares e proporcionar momentos inesquecíveis. Desde palestras educativas e workshops até atividades recreativas para todas as idades, sempre buscamos formas de enriquecer a experiência dos nossos associados.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
    icon: Gift,
  },
];



export default function BeneficiosPage() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80"
            alt="Família feliz fazendo compras"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Benefícios Exclusivos para Associados
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Descubra todas as vantagens de fazer parte da maior rede de apoio a famílias numerosas do Brasil
          </p>
        </div>
      </section>

      {/* Seções Dinâmicas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Fazer parte da ABFN é um compromisso com o fortalecimento de sua família e a criação de um futuro melhor para todos. </h1>
        <p className="text-xl text-gray-600">Ao se associar, você terá acesso a uma série de benefícios incríveis, projetados para apoiar e melhorar a vida da sua família. Veja o que você ganha:</p>
      </div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 md:gap-16`}
          >
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">{feature.title}</h2>
              </div>
              <p className="text-xl text-gray-600">{feature.description}</p>
            </div>
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="relative rounded-lg shadow-2xl w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
     {/* Final CTA */}
     <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white mb-[-80px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para fortalecer sua família?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Junte-se a nós e faça parte de uma comunidade que entende e valoriza as famílias numerosas.
          </p>
          <Link href="/associe-se">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-lg font-semibold">
              Começar Agora <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
