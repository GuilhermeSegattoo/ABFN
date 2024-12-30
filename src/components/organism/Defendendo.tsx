"use client";

import Image from "next/image";

const Defendendo = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 lg:px-32 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Parte Esquerda - Texto */}
        <div className="lg:w-1/2">
          <h2 className="font-bold text-3xl lg:text-5xl text-third leading-tight text-center lg:text-left">
            Defendendo os interesses das famílias numerosas
          </h2>
          <p className="text-dark text-xl lg:text-2xl leading-relaxed font-light text-center lg:text-left mt-6">
            Promovendo políticas e ações que valorizem sua dignidade, assegurando seus direitos e fortalecendo sua
            contribuição como pilar essencial da sociedade, com base no respeito a vida e a pessoa humana.
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
  );
};

const Section = () => {
  return (
    <section className="w-full px-4 py-16 flex flex-col items-center">
      {/* Linha horizontal */}
      <hr className="w-[70%] border-t-2 border-third mb-8" />

      {/* Conteúdo da Section */}
      <div className="flex justify-between items-center w-full max-w-7xl px-4">
        {/* Título à esquerda */}
        <h2 className="font-bold text-3xl lg:text-5xl text-primary leading-tight text-center lg:text-left">
          Juntos, <br /> criamos o amanhã
        </h2>

        {/* Frase à direita */}
        <p className="text-xl sm:text-2xl text-right font-light text-gray-700 max-w-lg">
          Vamos nos unir junto a ABFN e fortalecer a vida das famílias numerosas.
        </p>
      </div>
    </section>
  );
};

export { Defendendo, Section };
