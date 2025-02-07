"use client";

import { Building, Scale, Heart, Users, Brain, Megaphone, Briefcase, Globe, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SobrePage() {
  const committees = [
    {
      icon: Scale,
      name: "Jurídico",
      description: "Defesa dos direitos e interesses das famílias numerosas"
    },
    {
      icon: Brain,
      name: "Educacional",
      description: "Promoção de iniciativas educacionais e formativas"
    },
    {
      icon: Heart,
      name: "Saúde",
      description: "Apoio e orientação em questões de saúde familiar"
    },
    {
      icon: Megaphone,
      name: "Comunicação",
      description: "Gestão da comunicação e presença nas redes sociais"
    },
    {
      icon: Globe,
      name: "Relações Institucionais",
      description: "Desenvolvimento de parcerias estratégicas"
    },
    {
      icon: Briefcase,
      name: "Gestão",
      description: "Administração e desenvolvimento organizacional"
    },

  ];
  const founders = [
    {
      name: "Richard e Leila",
      description: "Família com 9 filhos",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      name: "Elias e Regiane",
      description: "Família com 7 filhos",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },

  ];

  return (
    <main className="pt-16">
      {/* History Section */}
      <section className="py-20 bg-accent mt-[10px]">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-white font-bold mt-8 mb-6">Sobre a ABFN</h1>
            <p className="text-center text-lg font-medium text-white text-muted-foreground mb-12">
              A Associação Brasileira de Famílias Numerosas é uma organização dedicada
              a fortalecer e apoiar famílias numerosas em todo o Brasil.
            </p>
          </div>

          <p className="text-lg text-white max-w-3xl mb-4">
            Acreditamos que a força da família numerosa vai além do número de membros:
            ela representa um vínculo de união, amor e comprometimento que transcende gerações.
            Se a sua família é composta por pelo menos seis membros, incluindo pais, filhos e
            outros parentes que coabitam sob o mesmo teto, você já faz parte do que entendemos
            como uma verdadeira <span className="font-semibold">família numerosa</span>.
          </p>
          <p className="text-lg text-white max-w-3xl mb-6">
            Ao se associar à ABFN, você entra para uma rede que compartilha os mesmos valores de
            solidariedade, cuidado mútuo e responsabilidade. Você e sua família terão acesso a
            uma série de vantagens e benefícios e, mais importante ainda, a um espaço de apoio e
            acolhimento que visa fortalecer cada membro de sua família e garantir que seus direito
            s sejam respeitados.
          </p>

          <p className="text-xl font-semibold text-white max-w-3xl mb-6">
            Como Funciona a Associação?
          </p>

          <p className="text-lg text-white max-w-3xl mb-6">
            A adesão à ABFN é por indicação, o que significa que uma família já associada poderá
            apresentar sua família numerosa ao nosso movimento. Isso fortalece nossa rede e garante
            que cada novo membro chegue com a certeza de que faz parte de uma comunidade de confiança,
            unida pela causa da valorização da vida e da família.
          </p>

          <p className="text-lg text-white max-w-3xl mb-6">
            Também pensamos em você que de forma espontânea nos procurou, criamos a categoria de associado afiliado.

          </p>


        </div>
      </section>
      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl  mx-auto">
            <div className="text-center p-6 bg-secondary shadow-lg rounded-lg">
              <h2 className="text-2xl text-white font-semibold mb-3">Missão</h2>
              <p className="text-muted-foreground text-white text-lg ">
              Defender os interesses das famílias numerosas, 
              promovendo políticas e ações que valorizem sua dignidade, assegurem seus direitos 
              e fortaleçam sua contribuição como pilar essencial da sociedade, com base no respeito 
              a vida e a pessoa humana.
              </p>
            </div>
            <div className="text-center p-6 bg-primary shadow-2xl rounded-lg">
              <h2 className="text-2xl text-white font-semibold mb-3">Visão</h2>
              <p className="text-muted-foreground text-white text-lg">
              Ser reconhecida como a principal representante e parceira das famílias numerosas no Brasil, promovendo uma cultura que valorize a vida, 
              a solidariedade e o papel fundamental da família no desenvolvimento da sociedade.
              </p>
            </div>
            <div className="text-center p-6 bg-accent shadow-lg rounded-lg">
              <h2 className="text-2xl text-white font-semibold ">Valores</h2>
              <p className="text-muted-foreground text-white text-lg">
               Respeitar a vida, dignificar a pessoa, fortalecer a família e promover a solidariedade e cidadania ativa para um bem-estar social duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-center">
  {/* Anúncio para telas menores - Fica acima do organograma */}
  <aside className="md:hidden w-full bg-gray-100 p-4 text-center shadow-lg mb-6">
    <h2 className="text-xl font-bold text-gray-800">Anuncie Aqui!</h2>
    <p className="text-gray-600 mt-2">Sua marca pode aparecer neste espaço.</p>
    <Link href="/parcerias">
      <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition">
        Saiba Mais
      </button>
      </Link>
  </aside>

  {/* Coluna Esquerda - Anúncio (somente para md para cima) */}
  <aside className="hidden md:flex md:w-1/5 lg:w-1/4 xl:w-1/5 h-[50vh] sticky top-0 items-center justify-center bg-gray-100 p-4 shadow-lg">
    <div className="text-center">
      <h2 className="text-xl font-bold text-gray-800">Anuncie Aqui!</h2>
      <p className="text-gray-600 mt-2">Sua marca pode aparecer neste espaço.</p>
      <Link href="/parcerias">
      <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition">
        Saiba Mais
      </button>
      </Link>
    </div>
  </aside>

  {/* Conteúdo Principal - Organograma (Aumentado para telas maiores) */}
  <main className="w-full md:w-4/5 lg:w-3/5 xl:w-3/5 p-6 mx-auto">
    <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Organograma da ABFN</h1>
    <Image
      src="/organogramanv.svg"
      alt="Organograma ABFN"
      width={800}
      height={800}
      className="w-full max-w-4xl h-auto object-cover rounded-lg"
    />
  </main>

  {/* Coluna Direita - Anúncio (somente para md para cima) */}
  <aside className="hidden md:flex md:w-1/5 lg:w-1/4 xl:w-1/5 h-[50vh] sticky top-0 items-center justify-center bg-gray-100 p-4 shadow-lg">
    <div className="text-center">
      <h2 className="text-xl font-bold text-gray-800">Anuncie Aqui!</h2>
      <p className="text-gray-600 mt-2">Alcance mais clientes com este espaço exclusivo.</p>
      <Link href="/parcerias">
      <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition">
        Saiba Mais
      </button>
      </Link>
    </div>
  </aside>

  {/* Anúncio para telas menores - Fica abaixo do organograma */}
  <aside className="md:hidden w-full bg-gray-100 p-4 text-center shadow-lg mt-6">
    <h2 className="text-xl font-bold text-gray-800">Anuncie Aqui!</h2>
    <p className="text-gray-600 mt-2">Alcance mais clientes com este espaço exclusivo.</p>
    <Link href="/parcerias">
      <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition">
        Saiba Mais
      </button>
    </Link>
  </aside>
</section>




      {/* Committees Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dos Comitês</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div key={committee.name} className="p-6 border border-accent bg-accent rounded-lg hover:shadow-lg transition-shadow">
                <committee.icon className="w-10 h-10 text-white mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">{committee.name}</h3>
                <p className="text-muted-foreground text-lg text-neutral-300">{committee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Nossos Fundadores
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conheça as famílias que iniciaram este movimento e construíram as bases da ABFN
          </p>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-3">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden bg-primary ">
                <div className="relative h-72 w-full">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{founder.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-neutral-300">{founder.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

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