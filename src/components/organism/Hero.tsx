import Image from "next/image";
import React, { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section id="home" className="w-full bg-primary flex flex-col justify-center items-center min-h-[60vh] 2xl:min-h-[80vh] px-4">
      {/* Título */}
      <h1 className="font-bold text-[40px]  leading-tight text-center text-white mt-44 xl:text-7xl">
      Bem-vindo à ABFN
      </h1>

      {/* Frase */}
      <p className="text-light font-light text-3xl xl:text-4xl sm:text-xl mt-4 text-center leading-relaxed max-w-lg">
      Conheça a Associação Brasileira
       das Famílias Numerosas
      </p>

      

      {/* Imagem */}
      <div
      className="
      mt-[-60px]     /* Valor padrão para telas grandes */
      sm:mt-[50px]  /* Telas pequenas: ≥640px */
      md:mt-[-100px]  /* Telas médias: ≥768px */
      lg:mt-[-180px]  /* Telas grandes: ≥1024px */
      xl:mt-[-200px]  /* Telas extra grandes: ≥1280px */
      2xl:mt-[-200px] /* Telas muito grandes: ≥1536px */
    "
      >
        <Image
          src="/familiaNatal.svg"
          width={1200}
          height={900}
          alt="Hero Banner"
          className="w-full h-auto object-cover sm:block"
        />
      </div>
    </section>
  );
};

export default Hero;
