"use client";

import { ArrowRight, Users, Heart, Shield, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(1);
  const [progress, setProgress] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Bem-estar e Saúde",
      description:
        "Promovermos o cuidado com a saúde das famílias, com iniciativas que vão além do cuidado físico, abrangendo também o bem-estar emocional e social",
    },
    {
      id: 2,
      title: "Serviços e Produtos",
      description:
        "Conectamos famílias numerosas a soluções acessíveis e exclusivas, garantindo suporte prático para o dia a dia",
    },
    {
      id: 3,
      title: "Educação e Desenvolvimento",
      description:
        "Oferecemos oportunidades educacionais e de formação, investindo no crescimento das famílias e no futuro de seus filhos",
    },
    {
      id: 4,
      title: "Alimentação",
      description:
        "Apoiamos a segurança alimentar com ações que promovem nutrição adequada e acessível para quem mais precisa",
    },
  ];

  const vantagens = [
    {
      id: 1,
      title: "Defesa dos direitos familiares",
      description:
        "Garantia de maior equidade no tratamento social, fiscal e de consumo.",
      imageUrl:
        "https://images.unsplash.com/photo-1718931161119-f4207c149111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Rede de compartilhamento",
      description:
        "Plataforma online 'Ambiente restrito' para apoio mútuo e troca de informações úteis entre famílias numerosas.",
      imageUrl:
        "https://img.freepik.com/premium-photo/map-brazil_698953-10978.jpg",
    },
    {
      id: 3,
      title: "Descontos exclusivos",
      description:
        "Acordos negociados com empresas para obter descontos vantajosos.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2022/08/07/09/37/sale-7370239_960_720.png",
    },
    {
      id: 4,
      title: "Sustentabilidade",
      description: "Espaço 'trocas & doações' para reutilização de bens.",
      imageUrl:
        "https://www.intra-teka.com/data/imagelibrary/getimage?imageID=585&maxw=600&maxh=600",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCard((prev) => (prev === cards.length ? 1 : prev + 1));
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [cards.length]);


  const selectedVantagem = vantagens.find(
    (vantagem) => vantagem.id === selectedCard
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-primary">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-32">
            Vamos nos unir à ABFN e fortalecer a vida das famílias numerosas
          </h1>
          <p className="text-xl mb-4">
            Juntos construímos um futuro melhor para nossas famílias
          </p>

          <Link
            href="/associe-se"
            
          >
            <button className="bg-secondary hover:bg-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 mb-8 transition-all">
            Associe-se Agora <ArrowRight className="w-5 h-5" />
            </button>
           
          </Link>
          <div className="mt-4">
            <Image
              src="/fm.png"
              alt="ABFN Family"
              width={1440}
              height={400}
              className="object-contain w-full max-w-[90%] md:max-w-4xl lg:max-w-5xl mx-auto mt-[-100px]"
            />
          </div>
          <p className="text-lg">
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
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 flex flex-col items-center">
        {/* Linha horizontal */}
        <hr className="w-[70%] border-t-2 border-third mb-8" />

        {/* Conteúdo da Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl px-4 space-y-6 lg:space-y-0 lg:space-x-8">
          {/* Título à esquerda */}
          <h2 className="font-bold text-2xl lg:text-5xl leading-tight text-center lg:text-left">
            Juntos, <br /> criamos o amanhã
          </h2>

          {/* Frase à direita */}
          <p className="text-xl text-center lg:text-right font-light text-gray-700 max-w-lg">
            Podemos transformar nossas comunidades e construir um futuro mais justo e solidário para todas as famílias
          </p>
        </div>
      </section>

      {/* vantagens Section */}

      <section className="mt-16 xl:mt-10 md:mx-5 lg:mx-24 relative flex flex-wrap items-center justify-between">
        {/* Parte Esquerda */}
        <div className="xl:w-1/2 lg:w-1/2 px-4 md:px-20 py-16 bg-gray-50 rounded-sm">
          <p className="text-dark text-xl font-light leading-relaxed text-center md:ml-6 lg:text-left mb-6">
            Nosso objetivo é apoiar e transformar a vida das famílias, promovendo bem-estar, desenvolvimento e união
          </p>
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card) => (
              <button
                key={card.id}
                className={`relative flex flex-col justify-center items-center w-full h-32 ${selectedCard === card.id ? "bg-secondary text-dark" : "bg-accent text-white"
                  } hover:bg-primary hover:text-white text-center font-medium transition-all duration-300`}
                onClick={() => {
                  setSelectedCard(card.id);
                  setProgress(0);
                }}
              >
                <span className="text-5xl font-bold">{card.id}</span>
                <span className="mt-2 text-lg">{card.title}</span>
                {selectedCard === card.id && (
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Parte Direita */}
        <div className="xl:w-1/2 lg:w-1/2 flex flex-col items-center px-6">
          <h5 className="text-4xl font-bold text-primary mb-4">
            {cards.find((card) => card.id === selectedCard)?.title}
          </h5>
          <p className="text-dark text-xl font-light text-center leading-relaxed px-4">
            {cards.find((card) => card.id === selectedCard)?.description}
          </p>
        </div>
      </section>

      {/* Defendendo Section */}
      <section className="w-full py-16 px-4 md:px-20 lg:px-32 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Parte Esquerda - Texto */}
          <div className="lg:w-1/2">
            <h2 className="font-bold text-3xl lg:text-5xl text-third leading-tight text-center lg:text-left">
              Defendendo os interesses das famílias numerosas
            </h2>
            <p className="text-dark text-xl lg:text-xl leading-relaxed font-light text-center lg:text-left mt-6">
              Promovendo políticas e ações que valorizem sua dignidade, assegurando seus direitos e fortalecendo sua
              contribuição como pilar essencial da sociedade, com base no respeito a vida e a pessoa humana
            </p>
          </div>

          {/* Parte Direita - Imagem */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/plantando.jpg"
              alt="Mãos plantando"
              width={650}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* vantagens Section */}
      <section className="w-full px-4 py-16 bg-white">
  <h2 className="font-bold text-2xl lg:text-4xl text-center mb-8">
    Vantagens de ser parte da ABFN
  </h2>

  {/* Grade de cartões */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
    {vantagens.map((vantagem) => (
      <div
        key={vantagem.id}
        className={`relative flex flex-col items-center justify-center h-40 w-full bg-blue-500 text-white rounded-lg shadow transition-all duration-300 cursor-pointer ${
          selectedCard === vantagem.id ? "bg-accent" : "bg-blue-500"
        }`}
        onClick={() => {
          setSelectedCard(vantagem.id);
          setProgress(0);
        }}
      >
        
        <span className="mt-2 text-lg font-semibold text-center">{vantagem.title}</span>
        {selectedCard === vantagem.id && (
          <div
            className="absolute bottom-0 left-0 h-1 bg-orange-500"
            style={{ width: `${progress}%` }}
          ></div>
        )}
      </div>
    ))}
  </div>

  {/* Conteúdo dividido: Texto à esquerda, Imagem à direita */}
  <div className="mt-12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
    {/* Texto de descrição */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <p className="text-3xl font-bold text-center mt-28 text-gray-700">
        {selectedVantagem?.description}
      </p>
    </div>

    {/* Imagem */}
    {selectedVantagem?.imageUrl && (
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src={selectedVantagem.imageUrl}
          alt={selectedVantagem.title}
          width={400}
          height={400}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>
    )}
  </div>
</section>

    </main>

  );
}