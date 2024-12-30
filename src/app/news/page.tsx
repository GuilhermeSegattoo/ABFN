import React from "react";
import ContatoFooter from "@/components/organism/ContatoFooter";

const Noticias = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Carta da Associação */}
      <section id="noticias" className="bg-blue-100 p-6 rounded-lg shadow-lg mb-12">
        <h1 className="text-3xl font-bold text-primary text-center mb-4">
          Carta da Associação
        </h1>
        <div className="text-lg text-gray-700">
          <p>
            <strong>ABFN Primeiro Informativo</strong>
          </p>
          <p className="mt-4">
            <strong>Nascemos!</strong>
          </p>
          <p>
            Um sonho gestado por 9 anos, nasce agora com a Associação Brasileira das Famílias Numerosas!
            Como todo bebê que nasce, ele grita e anuncia sua chegada. Estou aqui! Cheguei!
            E com esperança e alegria acolhemos essa responsabilidade, que não é apenas nossa,
            mas de todas as famílias, que têm o desejo no seu coração de crescer com liberdade de valores e respeito.
          </p>
          <p className="mt-4">
            Quando os pais recebem um bebê, recebem junto um misto de insegurança, entusiasmo e responsabilidade.
            Vem também a ansiedade e o medo de não conseguir proporcionar a sua família as condições necessárias para seu desenvolvimento.
          </p>
          <p className="mt-4">
            Hoje somos bombardeados por ações que tornam a nossa vida difícil, e vistos como “uma espécie rara” ou “números estatísticos”.
            A ABFN nasce com o objetivo de mostrar um horizonte, viver um hoje em função de um depois, somos livres nas escolhas e decisões que brotam no seio familiar.
          </p>
          <p className="mt-4">
            Temos a missão de defender os interesses das famílias numerosas, promovendo políticas e ações que valorizem sua dignidade, assegurem seus direitos e fortaleçam sua contribuição como pilar essencial da sociedade, com base no respeito à vida e à pessoa humana.
          </p>
          <p className="mt-4">
            Muitos casais dessa associação são católicos, escolhemos a Sagrada Família como nossa intercessora, porque sabemos a importância da união de uma família.
          </p>
          <p className="mt-4">
            Nossa força será sustentada pelo número de sócios, onde todos somos responsáveis por recrutar e indicar mais sócios.
            Buscaremos apoio junto às entidades públicas, privadas e do terceiro setor para divulgação, colaboração e parcerias.
          </p>
          <p className="mt-4">
            Estamos abertos a sugestões e colaborações, entrem e compartilhem nossa página www.abfnumerosas.org e nos ajudem a crescer. Se trabalharmos juntos, podemos ajudar muitas famílias no nosso Brasil que vivem a alegria de ter muitos filhos, e que querem ser respeitadas em sua Pátria.
          </p>
          <p className="mt-4">
            Vamos ao trabalho!
          </p>
          <p className="mt-4">
            <strong>Richard Denis Ceschini Dias</strong><br />
            ABFN - Fortalecendo Famílias Numerosas no Brasil
          </p>
        </div>
      </section>

      {/* Seção de Notícias */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Últimas Notícias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Notícia 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">
              carta de inauguração
            </h3>
            <p className="text-gray-700 mb-4">
            Um sonho gestado por 9 anos, nasce agora com a Associação Brasileira das Famílias Numerosas!
            </p>
            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Leia mais...
            </a>
          </div>

        </div>
      </section>

      <ContatoFooter />
    </div>
  );
};

export default Noticias;
