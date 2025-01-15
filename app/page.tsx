"use client";

import { ArrowRight, Users, Heart, Shield, Gift,
   HandshakeIcon, Target, BadgePercent, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
   
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);

  const advantages = [
    {
      title: "Comunidade Unida",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores e desafios.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      title: "Benefícios Exclusivos",
      description: "Acesse descontos especiais e vantagens únicas com nossa rede de parceiros em todo o Brasil.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80",
    },
    {
      title: "Suporte Jurídico",
      description: "Conte com orientação especializada para defender os direitos da sua família.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Eventos Especiais",
      description: "Participe de encontros, workshops e atividades exclusivas para associados.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Comunidade",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores",
    },
    {
      icon: Heart,
      title: "Suporte",
      description: "Acesso a recursos e orientação para fortalecer sua família",
    },
    {
      icon: Shield,
      title: "Proteção",
      description: "Defesa dos direitos e interesses das famílias numerosas",
    },
    {
      icon: Gift,
      title: "Benefícios",
      description: "Descontos exclusivos e vantagens com nossos parceiros",
    },
  ];
   
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-primary">
        <div className="text-center text-white px-4 max-w-4xl mt-96">
        <div className="lg:mt-[-500px] md:mt-[-300px] xs:mt-[-400px]">
            <Image
              src="/fm.png"
              alt="ABFN Family"
              width={1440}
              height={400}
              className="object-contain w-full max-w-[90%] md:max-w-4xl lg:max-w-5xl mx-auto mt-[-100px]"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 xs:mt[-100px]">
            Vamos nos unir à ABFN e fortalecer a vida das famílias numerosas
          </h1>
          <p className="text-xl mb-4">
            Juntos construímos um futuro melhor para nossas famílias
          </p>

       
              <Link href="/associe-se">
                <Button size="lg" className="bg-accent hover:bg-secondary text-white px-8 py-6 rounded-full text-lg font-semibold inline-flex items-center mb-3 gap-2">
                  Associe-se Agora <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
             
            
          
          <p className="text-lg mb-4 xs:text-[13px] tracking-tight leading-none">
            A ABFN valoriza a vida desde a concepção até a morte natural, apoiando famílias numerosas que vivem a generosidade do amor e a paternidade responsável.
          </p>
         
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que se juntar à ABFN?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-muted-foreground text-xl">
                Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-muted-foreground text-xl">
                Acesso a recursos e orientação para fortalecer sua família
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proteção</h3>
              <p className="text-muted-foreground text-xl">
                Defesa dos direitos e interesses das famílias numerosas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Benefícios</h3>
              <p className="text-muted-foreground text-xl">
                Descontos exclusivos e vantagens com nossos parceiros
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 lg:mx-40 mx-7 grid grid-cols-2 md:grid-cols-4 gap-8">
              <Link href="/associe-se" className="group">
                <div className="bg-accent backdrop-blur-sm p-6 rounded-lg hover:bg-primary transition-all">
                  <h3 className="text-white font-semibold mb-2">Categorias</h3>
                  <p className="text-white/80 text-sm">Escolha o plano ideal para sua família</p>
                  <ChevronRight className="w-5 h-5 text-white mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link href="/parcerias" className="group">
                <div className="bg-accent backdrop-blur-sm p-6 rounded-lg hover:bg-primary transition-all">
                  <h3 className="text-white font-semibold mb-2">Seja Parceiro</h3>
                  <p className="text-white/80 text-sm">Una-se à nossa rede de parceiros</p>
                  <ChevronRight className="w-5 h-5 text-white mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link href="/sobre" className="group">
                <div className="bg-accent backdrop-blur-sm p-6 rounded-lg hover:bg-primary transition-all">
                  <h3 className="text-white font-semibold mb-2">Sobre Nós</h3>
                  <p className="text-white text-sm">Conheça nossa história e missão</p>
                  <ChevronRight className="w-5 h-5 text-white mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              <Link href="/noticias" className="group">
                <div className="bg-accent backdrop-blur-sm p-6 rounded-lg hover:bg-primary transition-all">
                  <h3 className="text-white font-semibold mb-2">Notícias</h3>
                  <p className="text-white/80 text-sm">Fique por dentro das novidades</p>
                  <ChevronRight className="w-5 h-5 text-white mt-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </div>
      </section>

      

    

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="w-24 h-1 bg-secondary mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Juntos, criamos o amanhã</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transformamos comunidades através do fortalecimento das famílias numerosas,
            construindo um futuro mais solidário e acolhedor.
          </p>
          <Link href="/associe-se">
            <Button size="lg" className="bg-secondary hover:bg-primary">
              Faça Parte dessa História
            </Button>
          </Link>
        </div>
      </section>

      {/* Defending Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Defendendo seus Interesses</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A ABFN atua ativamente na defesa dos direitos das famílias numerosas,
                trabalhando junto a órgãos públicos e privados para garantir políticas
                justas e benefícios adequados.
              </p>
              <Link href="/sobre">
                <Button className="bg-secondary hover:bg-primary">
                  Saiba Mais <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80"
                alt="Defesa de direitos"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Vantagens ABFN</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <Card
                  key={advantage.title}
                  className={`cursor-pointer transition-all ${
                    selectedAdvantage === index
                      ? "border-secondary shadow-lg"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedAdvantage(index)}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.description}</p>
                    {selectedAdvantage === index && (
                      <div className="h-1 bg-secondary mt-4 rounded-full" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src={advantages[selectedAdvantage].image}
                alt={advantages[selectedAdvantage].title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {advantages[selectedAdvantage].title}
                </h3>
                <p className="text-white/90">
                  {advantages[selectedAdvantage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>

  );
}