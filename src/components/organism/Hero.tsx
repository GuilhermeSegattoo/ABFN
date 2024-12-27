import Image from "next/image";
import React, { FC } from "react";

import ImageSliders from "./Sponsorship";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section
      id="home"
      className="w-full bg-primary flex flex-col justify-center items-center min-h-[60vh] 2xl:min-h-[80vh] px-4"
    >
      {/* Título */}
      <h1 className="font-bold text-[32px] sm:text-[40px] xl:text-7xl leading-tight text-center text-white mt-1">
        Bem-vindo à ABFN
      </h1>

      {/* Frase */}
      <p className="text-light font-medium text-xl sm:text-2xl xl:text-4xl mt-4 text-center leading-relaxed max-w-2xl">
         Fortalecendo Famílias Numerosas no Brasil
      </p> 
      <p className="text-light font-light text-xl sm:text-2xl xl:text-4xl mt-4 text-center leading-relaxed max-w-7xl">
      A ABFN valoriza a vida desde a concepção até a morte natural, apoiando famílias numerosas que vivem a generosidade do amor e a paternidade responsável
      </p>

      {/* Slider */}
      <div className="mt-12 w-full max-w-7xl px-4">
        <ImageSliders />
      </div>
    </section>
  );
};

export default Hero;
