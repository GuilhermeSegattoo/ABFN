"use client";

import { useState } from "react";

const Vantagens = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Bem-estar e Saúde",
      description:
        "Promovemos a saúde integral das famílias numerosas, com iniciativas que vão além do cuidado físico, abrangendo também o bem-estar emocional e social.",
    },
    {
      id: 2,
      title: "Serviços e Produtos",
      description:
        "Conectamos famílias numerosas a soluções acessíveis e exclusivas, garantindo suporte prático para o dia a dia.",
    },
    {
      id: 3,
      title: "Educação e Desenvolvimento",
      description:
        "Oferecemos oportunidades educacionais e de formação, investindo no crescimento das famílias e no futuro de seus filhos.",
    },
    {
      id: 4,
      title: "Alimentação",
      description:
        "Apoiamos a segurança alimentar com ações que promovem nutrição adequada e acessível para quem mais precisa.",
    },
  ];

  return (
    <section id="sobre" className="mt-16 xl:mt-10 md:mx-5 lg:mx-24 relative flex flex-wrap items-center justify-between">
      {/* Parte Esquerda */}
      <div className="xl:w-1/2 lg:w-1/2 px-4 md:px-20 py-6">
        <h4 className="font-bold text-4xl text-primary md:ml-6 mb-4 text-center lg:text-left">
          Sobre nós?
        </h4>
        <p className="text-dark text-2xl leading-relaxed text-center md:ml-6 lg:text-left mb-6">
        Nosso objetivo é apoiar e transformar a vida das famílias, promovendo bem-estar, desenvolvimento e união.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card) => (
            <button
              key={card.id}
              className={`flex flex-col justify-center items-center w-full h-32 bg-gray-100 ${
                selectedCard === card.id ? "bg-third text-third" : "text-gray-500"
              } hover:bg-third hover:text-white text-center font-medium transition-all duration-300`}
              onClick={() => setSelectedCard(card.id)}
            >
              <span
                className={`text-5xl font-bold ${
                  selectedCard === card.id ? "text-white" : "text-gray-400"
                }`}
              >
                {card.id}
              </span>
              <span
                className={`mt-2 text-lg ${
                  selectedCard === card.id ? "text-white" : "text-gray-500"
                }`}
              >
                {card.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Parte Direita */}
      <div className="xl:w-1/2 lg:w-1/2 flex flex-col items-center px-6">
        <h5 className="text-2xl font-bold text-primary mb-4">
          {cards.find((card) => card.id === selectedCard)?.title}
        </h5>
        <p className="text-dark text-2xl text-center leading-relaxed px-4">
          {cards.find((card) => card.id === selectedCard)?.description}
        </p>
      </div>
    </section>
  );
};

export default Vantagens;
