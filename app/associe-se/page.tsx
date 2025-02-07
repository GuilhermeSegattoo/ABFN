"use client";

import { Users, Target, Heart, HandshakeIcon, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



export default function AssociePage() {
  

  const getCardColor = (index: number): string => {
    const colors = [
      "bg-accent",
      "bg-secondary",
      "bg-primary",
      "bg-accent",
    ];
    return colors[index % colors.length]; // Alterna entre as cores
  };

  const membershipTypes = [
    {
      title: "Efetivos",
      description: "Famílias com mínimo de 6 filhos e se comprometem com o pagamento de uma joia e da quota anual.",
      benefits: ["Apenas por indicação", "Descontos exclusivos", "Rede de apoio", "Participação em eventos"],
      note: "O candidato a associado seja para a categoria efetivo ou aspirante, deve ser indicado por um associado fundador ou efetivo em pleno gozo dos direitos e será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      highlighted: true,
      icon: Users,
      buttonText: "Sou indicado(a)",
      buttonLink: "/login",
    },
    {
      title: "Aspirantes",
      description: "Famílias com mínimo de 4 filhos e se comprometem com o pagamento de uma joia e da quota anual.",
      benefits: ["Apenas por indicação", "Acesso à rede de apoio", "Participação em eventos", "Descontos selecionados"],
      note: "O candidato a associado seja para a categoria efetivo ou aspirante, deve ser indicado por um associado fundador ou efetivo em pleno gozo dos direitos e será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      icon: Heart,
      buttonText: "Sou indicado(a)",
      buttonLink: "/login",
    },
    {
      title: "Afiliados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "Não possuem direito de votar ou ser votados", "Descontos selecionados"],
      note: "O candidato a associado afiliado, cuja admissão haja sido espontânea mediante cadastramento, pagamento de joia e anuidade regular, será admitido na ABFN mediante aceitação expressa do que preceitua o Estatuto e aprovação do Conselho de Administração.",
      icon: Target,
      buttonText: "Se Afiliar",
      buttonLink: "/login",
    },
    {
      title: "Beneméritos",
      description: "Associa-se como beneméritos aquelas pessoas ou instituições que prestam serviços ou realizam contribuições significativas para a ABFN.",
      benefits: ["Reconhecimento especial", "Participação em eventos", "Networking"],
      icon: HandshakeIcon,
      buttonText: "Fazer uma Doação",
      buttonLink: "/doar",
    },
  ];

 

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Junte-se ABFN
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Faça parte de uma rede de apoio que entende e valoriza as famílias numerosas
            </p>
            <a 
              href="#categories"
              className="inline-block bg-white/90 text-primary hover:bg-white/90 hover:text-accent px-8 py-3 rounded-full text-lg font-semibold shadow-md  transition duration-300"
            >
              Candidate-se Agora
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Junte-se à ABFN - Seu Papel é <strong>Fundamental!</strong>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Na <strong>ABFN</strong>, acreditamos que cada família tem algo único a oferecer e um papel 
          essencial a desempenhar na construção de uma sociedade mais justa e solidária. 
          Ao se associar, você não apenas recebe apoio, mas também se torna parte de uma 
          rede que cresce e se fortalece com a ajuda de cada um.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
          O processo de associação é por <strong>indicação</strong>, e, por isso, acreditamos que as 
          famílias que se identificam com a nossa missão podem ser verdadeiros <strong>pontos focais da 
          ABFN em seus estados e municípios</strong>. Você pode se tornar um elo importante, ajudando outras 
          famílias a conhecer a ABFN e contribuindo para o nosso movimento localmente.

          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nosso objetivo é criar uma comunidade de apoio e solidariedade em todo o Brasil, 
          e sua participação é o que torna isso possível. Ao se unir à nossa causa, você estará construindo o futuro 
          da família numerosa, promovendo um atendimento memorável e acolhedor para todos.
          </p>
          <p className="text-lg text-gray-700 font-bold leading-relaxed">
          Seja a mudança que você deseja ver no mundo. Ajude-nos a espalhar a força da família numerosa!
          </p>
        </div>
      </section>


     

      {/* Membership Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 tracking-wide">
            Categorias de Associado
          </h2>
          <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
            Escolha a categoria que melhor se adapta à sua família e comece a desfrutar dos benefícios da ABFN.
          </p>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {membershipTypes.map((type, index) => (
              <div key={type.title} className="flex flex-col items-center">
                {/* Card Principal */}
                <div
                  className={`relative overflow-hidden transition-transform duration-300 transform hover:scale-105 shadow-lg p-8 flex flex-col items-center justify-between ${getCardColor(index)}`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>

                  {/* Ícone */}
                  <type.icon className="w-14 h-14 text-white mb-6" />

                  {/* Título do Plano */}
                  <h3 className="text-2xl font-extrabold text-white mb-3 uppercase text-center">{type.title}</h3>

                  {/* Descrição */}
                  <p className="text-white font-medium mb-6 text-center">{type.description}</p>

                  {/* Benefícios */}
                  <ul className="space-y-3 text-white mb-6">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <Check className="w-6 h-6 text-white" />
                        <span className="text-lg font-semibold">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão para Afiliados e Beneméritos */}
                  {type.buttonText && type.buttonLink && (
                    <a
                      href={type.buttonLink}
                      className="mt-4 inline-block bg-white/90 text-primary hover:bg-white/90 hover:text-secondary px-8 py-3 rounded-full text-lg font-semibold"
                    >
                      {type.buttonText}
                    </a>
                  )}
                </div>

                {/* Nota sobre a categoria (Separada do Card) */}
                {type.note && (
                  <div className="w-full mt-4 p-4 bg-white text-black text-sm font-light text-center italic rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    {type.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Final CTA */}
     <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white mb-[-80px]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
          Para se tornar um associado, o investimento é de apenas <strong>R$37/mês </strong>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Joia de Inscrição inicial de R$150. No entanto, você ficará isento do pagamento da Joia se associar-se até o dia <strong>30/06/2025</strong>. 
          </p>
          <Link href="#categories">
            <Button size="lg" className="bg-white/90 text-primary hover:bg-white/90 hover:text-secondary px-8 py-6 rounded-full text-lg font-semibold">
              Associa-se <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}