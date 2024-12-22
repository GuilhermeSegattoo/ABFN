"use client";
import Image from "next/image";

const NewSection = () => {
    const noticias = [
      {
        id: 1,
        image: "/news1.svg",
        tag: "ABFN NEWS",
        title: "Famílias numerosas querem que número de filhos não seja ignorado pelas políticas públicas",
        description: "Exclusivo associado",
      },
      {
        id: 2,
        image: "/news2.svg",
        tag: "ABFN NEWS",
        title: "Associação de Famílias Numerosas Lança Programa de Apoio Educacional",
        description: "Exclusivo associado",
      },
      {
        id: 3,
        image: "/news3.svg",
        tag: "ABFN NEWS",
        title: "Associação Promove Curso de Finanças para Famílias Numerosas",
        description: "Exclusivo associado",
      },
    ];
  
    return (
      <section id="noticias" className="bg-blue-500 py-16 mt-0">
        <div className="container mx-auto px-6">
          {/* Título da seção */}
          <h2 className="text-white text-4xl font-light mb-6 text-left">Portal de notícias ABFN</h2>
          <div className="border-t-4 border-white w-4/4 mx-auto mb-10"></div>
  
          {/* Grid de notícias */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <div
                key={noticia.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Imagem */}
                <div className="relative flex items-center justify-center mt-10">
                <Image
                 src={noticia.image}
                  alt={noticia.title}
                  width={400}
                  height={400}
                  className="rounded-t-lg"
                 />
                 
                </div>
  
                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-orange-500 font-bold text-xl mb-2">
                    Novidade
                  </h3>
                  <p className="text-gray-700 text-base mb-4">{noticia.title}</p>
                  <a
                    href="#"
                    className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 transition"
                  >
                    {noticia.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default NewSection;
  