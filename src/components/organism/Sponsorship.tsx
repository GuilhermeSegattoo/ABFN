'use client';

import Image from "next/image";
import React, { FC } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";

const ImageSlider: FC = () => {
  const highlights = [
    { id: 1, image: "/cadeirinha.png" },
    { id: 2, image: "/automotivos.png" },
    { id: 3, image: "/escola.png" },
    { id: 4, image: "/cozinha.png" },
    { id: 5, image: "/descontos.png" },
    { id: 6, image: "/eventos.png" },
    { id: 7, image: "/saude.png" },
    { id: 8, image: "/esportes.png" },
    { id: 9, image: "/voluntario.png" },
    { id: 10, image: "/app.png" },
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
    <div className="">
      {/* Slider */}
      <div className="mt-1 px-8 max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {highlights.map((highlight) => (
            <div key={highlight.id} className="p-2">
              <div className=" shadow-md rounded-md overflow-hidden">
                {/* Imagem */}
                <div className="relative h-[300px] w-[500px] mx-auto">
                  <Image
                    src={highlight.image}
                    alt={`Imagem ${highlight.id}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
