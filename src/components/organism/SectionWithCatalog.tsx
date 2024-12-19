"use client";

import React, { useState } from "react";
import Image from "next/image";

// Interface para os itens do catálogo
interface CatalogItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const SectionWithCatalog: React.FC = () => {
  // Estado do popup com tipagem ajustada
  const [popup, setPopup] = useState<CatalogItem | null>(null);

  // Dados do catálogo
  const catalogItems: CatalogItem[] = [
    {
      id: 1,
      title: "Lazer",
      image: "/lazer.png",
      description:
        "Momentos de diversão e descontração para toda a família. Acesso a parques, clubes e atividades recreativas que promovem união e bem-estar.",
    },
    {
      id: 2,
      title: "Informação",
      image: "/grupo.png",
      description:
        "Dicas valiosas e conteúdos exclusivos para facilitar o dia a dia das famílias. Informação útil, atualizada e pensada para você.",
    },
    {
      id: 3,
      title: "Eventos",
      image: "/palestra.png",
      description:
        "Participe de eventos especiais, palestras e encontros para famílias. Uma excelente oportunidade de aprendizado, conexão e lazer.",
    },
    {
      id: 4,
      title: "Descontos",
      image: "/ensino.png",
      description:
        "Economize em grande estilo! Descontos exclusivos em lojas, serviços e estabelecimentos parceiros da nossa associação.",
    },
    {
      id: 5,
      title: "Famílias",
      image: "/familia.png",
      description:
        "Cuidando de quem mais importa: sua família. Acesso a programas, atividades e serviços personalizados para fortalecer os laços familiares.",
    },
    {
      id: 6,
      title: "Automóvel",
      image: "/carros.png",
      description:
        "Soluções e benefícios especiais para automóveis, incluindo descontos em seguros, manutenções e dicas de segurança para toda a família.",
    },
    {
      id: 7,
      title: "Formações",
      image: "/formacao.png",
      description:
        "Invista no futuro com formações de qualidade. Cursos, workshops e oportunidades educacionais para crianças, jovens e adultos.",
    },
    {
      id: 8,
      title: "Ensino",
      image: "/duvida.png",
      description:
        "Apoio à educação com materiais, bolsas de estudo e parcerias com instituições de ensino. Valorizamos o aprendizado contínuo.",
    },
  ];
  

  return (
    <section className="bg-yellow mt-[-10px] py-10">
      {/* Título e Descrição */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        {/* Texto - Esquerda */}
        <div className="text-left text-primary w-full md:w-1/2 mb-8 md:mb-0 lg:ml-28 md:ml-12">
          <h2 className="text-3xl lg:text-6xl md:text-5xl font-light leading-tight mb-4">
            Explore o <span className="text-secondary">Brasil</span> com a <span className="text-third">ABFN</span>!
          </h2>
          <p className="text-2xl font-light text-primary lg:text-4xl md:text-2xl leading-relaxed">
            saiba mais sobre as oportunidades e vantagens <span className="text-secondary">exclusivas</span> para
            associados
          </p>
        </div>

        {/* Mapa do Brasil - Direita */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/mapaBrasil.svg"
            alt="Mapa do Brasil"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Catálogo */}
      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {catalogItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
            onClick={() => setPopup(item)}
          >
            {/* Imagem */}
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            {/* Título */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">{popup.title}</h3>
            <p className="text-gray-700">{popup.description}</p>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() => setPopup(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionWithCatalog;
