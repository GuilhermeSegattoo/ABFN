import React, { FC } from "react";
import FamilySection from "./FamilySection";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section
      id="home"
      className="w-full bg-primary bg-cover bg-center flex flex-col justify-center items-center min-h-[60vh] 2xl:min-h-[80vh] mb-[-40px] px-4"
      
    >
      {/* Título */}
      <h1 className="font-bold text-[40px] sm:text-[40px] xl:text-7xl leading-tight text-center text-white mt-[50px] shadow-lg drop-shadow-lg">
        Bem-vindo à ABFN
      </h1>

      {/* Frase */}
      <p className="text-light font-medium text-xl sm:text-xl sm:mb-5 xl:text-4xl mt-4 text-center leading-relaxed max-w-3xl">
        Fortalecendo as Famílias Numerosas no Brasil
      </p> 

     <FamilySection />

      <p className="text-light font-light text-xl sm:text-2xl xl:text-4xl mt-80 mb-32 text-center leading-relaxed max-w-7xl shadow-lg drop-shadow-lg">
        A ABFN valoriza a vida desde a concepção até a morte natural, apoiando famílias numerosas que vivem a generosidade do amor e a paternidade responsável
      </p>
    </section>
  );
};

export default Hero;
