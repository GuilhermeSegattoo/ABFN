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
      {/* Mission Section */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl text-white font-bold mt-8 mb-6">Sobre a ABFN</h1>
            <p className="text-lg text-white text-muted-foreground mb-12">
              A Associação Brasileira de Famílias Numerosas é uma organização dedicada
              a fortalecer e apoiar famílias numerosas em todo o Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl  mx-auto">
            <div className="text-center p-6 bg-secondary shadow-lg rounded-lg">
              <h2 className="text-xl text-white font-semibold mb-3">Missão</h2>
              <p className="text-muted-foreground text-white">
              Defender os interesses das famílias numerosas, promovendo políticas e ações que valorizem sua dignidade,
              assegurando seus direitos e fortaleçendo sua contribuição como pilar essencial da sociedade, com base no 
              respeito a vida e a pessoa humana.
              </p>
            </div>
            <div className="text-center p-6 bg-primary shadow-2xl rounded-lg">
              <h2 className="text-xl text-white font-semibold mb-3">Visão</h2>
              <p className="text-muted-foreground text-white">
              Ser reconhecida como a principal representante e parceira das famílias numerosas no Brasil, 
              promovendo uma cultura que valorize a vida, a solidariedade e o papel fundamental da família no desenvolvimento da sociedade.
              </p>
            </div>
            <div className="text-center p-6 bg-secondary shadow-lg rounded-lg">
              <h2 className="text-xl text-white font-semibold mb-3">Valores</h2>
              <p className="text-muted-foreground text-white">
               Respeitar a vida, dignificar a pessoa, 
               fortalecer a família e promover a solidariedade e cidadania ativa para um bem-estar social duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Nossa História</h2>
          <p className="text-lg text-white max-w-3xl mb-4">
            A ABFN nasceu com o propósito de valorizar e defender a vida em todas as suas etapas, desde a concepção até a morte natural, promovendo o pleno respeito à dignidade humana no âmbito das famílias numerosas. Acreditamos que a família é o pilar essencial para a estruturação e o progresso da sociedade, sendo espaço de união entre gerações, solidariedade e partilha de responsabilidades. Nosso compromisso está em criar condições para o bem-estar social e o crescimento das famílias, sempre respeitando os valores fundamentais.
          </p>
          <p className="text-lg text-white max-w-3xl mb-6">
            Defendemos o direito inalienável dos pais na educação dos filhos, além de incentivar a participação cívica ativa das famílias numerosas na sociedade. Com esses princípios, buscamos fortalecer a cidadania e a liberdade de educação, promovendo uma convivência harmoniosa que respeite as diferenças e garanta um futuro mais solidário e justo para todos.
          </p>
          <Image
            src="/organogramanv.svg"
            alt="Organograma ABFN"
            width={400}
            height={400}
            className="w-full max-w-md h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dos Comitês</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div key={committee.name} className="p-6 border border-accent rounded-lg hover:shadow-lg transition-shadow">
                <committee.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{committee.name}</h3>
                <p className="text-muted-foreground">{committee.description}</p>
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
          <div className="grid  md:grid-cols-2 mx-20 gap-8">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription>{founder.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       {/* Final CTA */}
       <section className="py-20 bg-primary text-white mb-[-80px]">
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