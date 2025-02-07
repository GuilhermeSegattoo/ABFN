"use client";

import { ArrowRight, Users, Heart, Shield, Gift, HandshakeIcon, Target, BadgePercent, ChevronRight, Phone, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import toast from 'react-hot-toast';


export default function Home() {



  const getCardColor = (index: number): string => {
    const colors = [
      "bg-accent",
      "bg-secondary",
      "bg-primary",
      "bg-accent",
    ];
    return colors[index % colors.length]; // Alterna entre as cores
  };

  const features = [
    {
      title: "Defesa dos direitos familiares",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores e desafios.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      title: "Descontos exclusivos",
      description: "Acesse descontos especiais e vantagens únicas com nossa rede de parceiros em todo o Brasil.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80",
    },
    {
      title: "Rede de compartilhamento",
      description: "Juntos, fortalecemos os direitos da sua família em todas as etapas da vida.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Sustentabilidade",
      description: "Trocar e doar, uma forma simples de cuidar do meio ambiente e apoiar famílias.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    },
  ];

  const membershipTypes = [
    {
      title: "Efetivos",
      description: "Famílias com mínimo de 6 filhos e se comprometem com o pagamento de uma joia e da quota anual.",
      benefits: ["Apenas por indicação", "Descontos exclusivos", "Rede de apoio", "Participação em eventos"],
      note: "O candidato a associado seja para a categoria efetivo ou aspirante, deve ser indicado por um associado fundador ou efetivo em pleno gozo dos direitos e será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      highlighted: true,
      icon: Users,
      buttonText: "Sou indicado(a)",
      buttonLink: "/login",
    },
    {
      title: "Aspirantes",
      description: "Famílias com mínimo de 4 filhos e se comprometem com o pagamento de uma joia e da quota anual.",
      benefits: ["Apenas por indicação", "Acesso à rede de apoio", "Participação em eventos", "Descontos selecionados"],
      note: "O candidato a associado seja para a categoria efetivo ou aspirante, deve ser indicado por um associado fundador ou efetivo em pleno gozo dos direitos e será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      icon: Heart,
      buttonText: "Sou indicado(a)",
      buttonLink: "/login",
    },
    {
      title: "Afiliados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "Não possuem direito de votar ou ser votados", "Descontos selecionados"],
      note: "O candidato a associado afiliado, cuja admissão haja sido espontânea mediante cadastramento, pagamento de joia e anuidade regular, será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      icon: Target,
      buttonText: "Se Afiliar",
      buttonLink: "/login",
    },
    {
      title: "Beneméritos",
      description: "Associa-se como beneméritos aquelas pessoas ou instituições que prestam serviços ou realizam contribuições significativas para a ABFN.",
      benefits: ["Reconhecimento especial", "Participação em eventos", "Networking"],
      icon: HandshakeIcon,
      buttonText: "Fazer uma Doação",
      buttonLink: "/doar",
    },
  ];





  return (
    <main className="bg-white ">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-12 md:py-24 relative">
          <div className="max-w-4xl mx-auto mt-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Bem-vindo à Associação Brasileira de Famílias Numerosas
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 text-orange-100">
              Juntos construímos um futuro melhor e fortalecemos as famílias numerosas no Brasil
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Link href="/sobre"
                className="bg-white/90 text-primary hover:bg-white/90 hover:text-secondary px-6 md:px-8 py-3 rounded-full font-semibold  transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Saber Mais</span>
                <ChevronRight className="w-5 h-5" />
              </Link>

            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* Features benefits Grid */}
      <section className="py-20 ">


        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mt-16 mb-16">
            Por que escolher a ABFN?
          </h2>
          <div className="mt-16 grid md:grid-cols-4 mb-10 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bem-estar e Saúde</h3>
              <p className="text-muted-foreground text-xl">
                Cuidado com a saúde das famílias, com iniciativas que vão
                além do cuidado físico, abrangendo também o bem-estar emocional e social
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serviços e Produtos</h3>
              <p className="text-muted-foreground text-xl">
                Conectamos famílias numerosas a soluções acessíveis e exclusivas, garantindo suporte prático para o dia a dia
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educação e Desenvolvimento</h3>
              <p className="text-muted-foreground text-xl">
                Oferecemos oportunidades educacionais e de formação, investindo no crescimento das famílias e no futuro de seus filhos
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alimentação</h3>
              <p className="text-muted-foreground text-xl">
                Apoiamos a segurança alimentar com ações que promovem nutrição adequada e acessível para quem mais precisa
              </p>
            </div>
          </div>



        </div>
      </section>


      {/* Membership Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 tracking-wide">
            Categorias de Associado
          </h2>
          <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha a categoria que melhor se adapta à sua família e comece a desfrutar dos benefícios da ABFN.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {membershipTypes.map((type, index) => (
              <div key={type.title} className="flex flex-col items-center">
                {/* Card Principal */}
                <div
                  className={`relative overflow-hidden transition-transform duration-300 transform hover:scale-105 shadow-lg p-8 flex flex-col items-center justify-between ${getCardColor(index)}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>

                  {/* Ícone */}
                  <type.icon className="w-14 h-14 text-white mb-6" />

                  {/* Título do Plano */}
                  <h3 className="text-2xl font-extrabold text-white mb-3 uppercase text-center">{type.title}</h3>

                  {/* Descrição */}
                  <p className="text-white font-medium mb-6 text-center">{type.description}</p>

                  {/* Benefícios */}
                  <ul className="space-y-3 text-white mb-6">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <Check className="w-6 h-6 text-white" />
                        <span className="text-lg font-semibold">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão para Afiliados e Beneméritos */}
                  {type.buttonText && type.buttonLink && (
                    <a
                      href={type.buttonLink}
                      className="mt-4 inline-block bg-white/90 text-primary hover:bg-white/90 hover:text-secondary px-8 py-3 rounded-full text-lg font-semibold"
                    >
                      {type.buttonText}
                    </a>
                  )}
                </div>

                {/* Nota sobre a categoria (Separada do Card) */}
                {type.note && (
                  <div className="w-full mt-4 p-4 bg-white text-black text-sm font-light text-center italic rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    {type.note}
                  </div>
                )}
              </div>
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