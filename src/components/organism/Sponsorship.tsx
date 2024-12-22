'use client';

import Image from "next/image";
import React, { FC } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";

const SecondHome: FC = () => {
  const highlights = [
    { id: 1, title: "Geral", description: "Procuro 2 cadeiras auto para crianças. Não precisam ser iguais, preciso para fazer a troca das cadeirinhas.", image: "/cadeirinha.png" },
    { id: 2, title: "Automóveis", description: "Sugestões de carros para uma família de 3 crianças. Preciso de espaço para 3 cadeiras.", image: "/automotivos.png" },
    { id: 3, title: "Ensino e Lazer", description: "Doação de material escolar até o dia 20/01/2025. Volta às aulas.", image: "/escola.png" },
    { id: 4, title: "Receitas", description: "Compartilhamento de receitas e trocas de pratos regionais.", image: "/cozinha.png" },
    { id: 5, title: "Descontos", description: "Parcerias com descontos exclusivos para associados ABFN em várias lojas.", image: "/descontos.png" },
    { id: 6, title: "Eventos", description: "Calendário de eventos locais para toda a família.", image: "/eventos.png" },
    { id: 7, title: "Saúde e Bem-estar", description: "Dicas de saúde e bem-estar para crianças e adultos.", image: "/saude.png" },
    { id: 8, title: "Esportes", description: "Atividades esportivas e competições para os pequenos.", image: "/esportes.png" },
    { id: 9, title: "Voluntariado", description: "Envolva-se em causas sociais e voluntariado na sua comunidade.", image: "/voluntario.png" },
    { id: 10, title: "Tecnologia", description: "Sugestões de apps e ferramentas úteis para a família.", image: "/app.png" },
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Título principal */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between container mx-auto h-auto md:h-[50vh] px-4 md:px-8 pt-10">
  {/* Título */}
  <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
    <h2 className="text-[32px] sm: md:text-[44px] md:ml-20 font-bold text-primary leading-tight mb-4 mt-8 md:mt-0">
      Juntos, criamos o <br /> amanhã
    </h2>
  </div>

  {/* Frase */}
  <div className="w-full md:w-1/2 text-center md:text-left">
    <p className="text-[20px] md:text-[22px] md:mr-20 font-light text-gray-700 leading-relaxed">
      Vamos nos organizar juntos com a{" "}
      <span className="font-bold text-primary">ABFN</span> e se espalhar por
      todo o <span className="font-bold text-green-600">Brasil</span>
    </p>
  </div>
</div>

      <hr className="border-t-4 border-orange-500 w-[75%] mx-auto my-8" />

      {/* Slider */}
      <div className="mt-10 px-8 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-[32px] sm: md:text-[44px] md:ml-20 font-light text-primary leading-tight mb-4 mt-8 md:mt-0">
          Família ABFN
        </h2>
      </div>
        <Slider {...sliderSettings}>
          {highlights.map((highlight) => (
            <div key={highlight.id} className="p-2">
              <div className="bg-white shadow-md rounded-md overflow-hidden">
                {/* Imagem */}
                <div className="relative h-[200px] w-[200px] mx-auto">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Texto */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SecondHome;