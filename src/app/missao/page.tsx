"use client";

import ContatoFooter from "@/components/organism/ContatoFooter";


const MissaoValores = () => {
  return (
    <div id="missao">
   
      <section className="py-16 px-6 bg-gray-100 text-gray-800">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Missão, Visão e Valores</h1>
          <p className="mb-4">
            A <strong>Associação Brasileira das Famílias Numerosas (ABFN)</strong> foi fundada com o objetivo de promover o bem-estar, a inclusão social e o desenvolvimento das famílias numerosas no Brasil. Temos como pilares a dedicação, a transparência e o compromisso com nossos associados.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="mb-4">
            Proporcionar suporte, representação e benefícios para famílias numerosas, promovendo políticas públicas que garantam direitos e facilitem o acesso a oportunidades que contribuam para o bem-estar e o desenvolvimento social, pessoal e financeiro das famílias.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nossa Visão</h2>
          <p className="mb-4">
            Ser reconhecida como a principal organização de suporte às famílias numerosas no Brasil, atuando com impacto positivo na sociedade e promovendo uma rede de apoio entre os associados, parceiros e a comunidade.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Inclusão:</strong> Trabalhamos para garantir que todas as famílias tenham voz e espaço em nossa organização.
            </li>
            <li>
              <strong>Transparência:</strong> Atuamos de forma ética, honesta e transparente em todas as nossas ações e decisões.
            </li>
            <li>
              <strong>Colaboração:</strong> Acreditamos na força da união e no impacto do trabalho em equipe.
            </li>
            <li>
              <strong>Compromisso Social:</strong> Buscamos melhorar as condições de vida das famílias e promover mudanças significativas na sociedade.
            </li>
            <li>
              <strong>Respeito:</strong> Valorizamos e respeitamos as diferenças culturais, sociais e individuais de cada família.
            </li>
          </ul>
        </div>
      </section>
      <ContatoFooter />
    </div>
  );
};

export default MissaoValores;
