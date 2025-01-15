"use client";

import { Building, Scale, Heart, Users, Brain, Megaphone, Briefcase, Globe } from "lucide-react";
import Image from "next/image";

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
    {
      icon: Users,
      name: "Assembleia Geral",
      description: "Comitê de relações institucionais"
    }
  ];

  return (
    <main className="pt-16">
      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Sobre a ABFN</h1>
            <p className="text-lg text-muted-foreground mb-12">
              A Associação Brasileira de Famílias Numerosas é uma organização dedicada
              a fortalecer e apoiar famílias numerosas em todo o Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-accent/5 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Missão</h2>
              <p className="text-muted-foreground">
              Defender os interesses das famílias numerosas, promovendo políticas e ações que valorizem sua dignidade,
              assegurando seus direitos e fortaleçendo sua contribuição como pilar essencial da sociedade, com base no 
              respeito a vida e a pessoa humana.
              </p>
            </div>
            <div className="text-center p-6 bg-primary/5 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Visão</h2>
              <p className="text-muted-foreground">
              Ser reconhecida como a principal representante e parceira das famílias numerosas no Brasil, 
              promovendo uma cultura que valorize a vida, a solidariedade e o papel fundamental da família no desenvolvimento da sociedade.
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/5 rounded-lg">
              <h2 className="text-xl font-semibold mb-3">Valores</h2>
              <p className="text-muted-foreground">
               Respeitar a vida, dignificar a pessoa, 
               fortalecer a família e promover a solidariedade e cidadania ativa para um bem-estar social duradouro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Nossa História</h2>
              <p className="text-lg text-white mb-4">
              A ABFN nasceu com o propósito de valorizar e defender a vida em todas as suas etapas, desde a concepção até a morte natural, promovendo o pleno respeito à dignidade humana no âmbito das famílias numerosas. Acreditamos que a família é o pilar essencial para a estruturação e o progresso da sociedade, sendo espaço de união entre gerações, solidariedade e partilha de responsabilidades. Nosso compromisso está em criar condições para o bem-estar social e o crescimento das famílias, sempre respeitando os valores fundamentais.
              </p>
              <p className="text-lg text-white">
              Defendemos o direito inalienável dos pais na educação dos filhos, além de incentivar a participação cívica ativa das famílias numerosas na sociedade. Com esses princípios, buscamos fortalecer a cidadania e a liberdade de educação, promovendo uma convivência harmoniosa que respeite as diferenças e garanta um futuro mais solidário e justo para todos.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/familiaABFN.jpg"	
                alt="Família reunida"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Comitês</h2>
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
    </main>
  );
}