"use-client"
import Link from "next/link";

export default function AreaAssociado() {
  return (
    <section className="bg-blue-500 mx-auto max-w-6xl rounded-md text-white py-12 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold mt-40 mb-6">Área do Associado!</h1>
        <blockquote className="text-lg italic mb-6">
          Junte-se à ABFN - Seu Papel é Fundamental!
        </blockquote>
        <p className="text-lg leading-relaxed mb-4">
          Na ABFN, acreditamos que cada família tem algo único a oferecer e um
          papel essencial a desempenhar na construção de uma sociedade mais
          justa e solidária. Ao se associar, você não apenas recebe apoio, mas
          também se torna parte de uma rede que cresce e se fortalece com a
          ajuda de cada um.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          O processo de associação é por <strong>indicação</strong>, e, por
          isso, acreditamos que as famílias que se identificam com a nossa
          missão podem ser verdadeiros{" "}
          <strong>pontos focais da ABFN em seus estados e municípios</strong>.
          Você pode se tornar um elo importante, ajudando outras famílias a
          conhecer a ABFN e contribuindo para o nosso movimento localmente.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Nosso objetivo é criar uma comunidade de apoio e solidariedade em
          todo o Brasil, e sua participação é o que torna isso possível. Ao se
          unir à nossa causa, você estará construindo o futuro da família
          numerosa, promovendo um atendimento memorável e acolhedor para todos.
        </p>
        <p className="text-lg font-bold">
          Seja a mudança que você deseja ver no mundo. Ajude-nos a espalhar a
          força da família numerosa!
        </p>

        <div className="mt-8">
          <Link href="/login">
            <button className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all">
              Login →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
