"use client";

import { useState } from "react";
import Image from "next/image";

const Vantagens = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Vantagens para a saúde",
      description: "Acesso a descontos em consultas médicas e exames.",
      image: "/55.svg",
    },
    {
      id: 2,
      title: "Informar as famílias",
      description: "Notícias e dicas para o dia a dia das famílias.",
      image: "/77.svg",
    },
    {
      id: 3,
      title: "Estudar para promover a mudança",
      description: "Descontos em cursos e materiais escolares.",
      image: "/66.svg",
    },
    {
      id: 4,
      title: "Ajudando famílias a poupar",
      description: "Ofertas especiais em supermercados e lojas.",
      image: "/88.svg",
    },
  ];

  return (
    <section className="mt-16 xl:mt-10 md:mx-5 lg:mx-24 relative flex flex-wrap items-center justify-between">
    {/* Parte Esquerda */}
    <div className="xl:w-1/2 lg:w-1/2 px-4 md:px-20 py-6">
    <hr className="border-t-4 border-orange-500 w-[100%] mx-auto my-8" />
      <h4 className="font-bold text-4xl text-primary md:ml-6 mb-4 text-center lg:text-left">
        O que fazemos?
      </h4>
      <p className="text-dark text-2xl leading-relaxed text-center md:ml-6 lg:text-left mb-6">
        Descubra como <span className="font-bold text-primary">ser associado</span> pode ajudar sua família em{" "}
        <span className="font-bold text-secondary">diversos aspectos</span>.
      </p>
      <div className="flex flex-col gap-2 lg:ml-0">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`px-5 py-2 bg-yellow hover:bg-third text-light rounded-none text-md font-medium transition-transform hover:scale-105 ${
              selectedCard === card.id ? "bg-third" : ""
            }`}
            onClick={() => setSelectedCard(card.id)}
          >
            {card.title}
          </button>
        ))}
      </div>
    </div>
  
    {/* Parte Direita */}
    <div className="xl:w-1/2 lg:w-1/2 flex flex-col items-center px-6">
      <Image
        src={
          cards.find((card) => card.id === selectedCard)?.image ||
          "/abfn.svg" // Imagem padrão
        }
        alt="Vantagem ilustrativa"
        width={350}
        height={350}
        className="w-full max-w-xs rounded-lg mb-4 transition-all duration-300"
      />
      <p className="text-center text-md text-light bg-primary px-4 py-2 rounded-none font-light">
        {cards.find((card) => card.id === selectedCard)?.description ||
          "Selecione uma vantagem para mais detalhes."}
      </p>
    </div>
  </section>
  
  );
};

export default Vantagens;
