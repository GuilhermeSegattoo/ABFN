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
    <section className="mt-64 xl:mt-28 relative top-0 flex flex-wrap items-center justify-between">
      {/* Parte Esquerda */}
      <div className="xl:w-1/2 lg:w-1/2 md:px-10 py-10">
        <h4 className="font-light text-5xl text-primary  mb-4 text-center leading-none lg:text-left lg:ml-14">
          O que fazemos?
        </h4>
        <p className="text-primary text-2xl font-light leading-none text-center lg:text-left lg:ml-14 mb-8">
          Descubra como <span className="font-bold text-primary">ser associado</span> pode ajudar sua família em <span className="font-bold text-secondary">diversos aspectos</span>.
        </p>
        <div className="flex flex-col gap-1 lg:ml-14">
          {cards.map((card) => (
            <button
              key={card.id}
              className={`px-6 py-3 bg-secondary hover:bg-third text-light rounded-lg text-lg font-medium transition-transform hover:scale-105 ${
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
      <div className="xl:w-1/2 lg:w-1/2 flex flex-col items-center">
  <Image
    src={
      cards.find((card) => card.id === selectedCard)?.image ||
      "/abfn.svg" // Imagem padrão caso o valor seja undefined
    }
    alt="Vantagem ilustrativa"
    width={500}
    height={500}
    className="w-full max-w-md rounded-lg mb-6 transition-all duration-300"
  />
  <p className="text-center text-xl text-primary font-light ">
    {cards.find((card) => card.id === selectedCard)?.description || "Selecione uma vantagem para mais detalhes."}
  </p>
</div>
    </section>
  );
};

export default Vantagens;
