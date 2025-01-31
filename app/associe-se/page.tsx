"use client";

import { Shield, Users, Gift, HeartHandshake, Target, Heart, HandshakeIcon, Check,  CheckCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import emailjs from 'emailjs-com';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_pjr1ols', 'template_524tjbo', e.target as HTMLFormElement, 'vd1F3fnBN3iSnypux')
    .then(
      (result) => {
        toast.success('Número de telefone enviado com sucesso!'); // Toast de sucesso
        console.log('Número de telefone enviado:', result.text);
      },
      (error) => {
        toast.error('Erro ao enviar o Número de telefone. Tente novamente.'); // Toast de erro
        console.error('Erro ao enviar Número de telefone:', error.text);
      }
    );
};

export default function AssociePage() {
  

  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

 


  const getCardColor = (index: number): string => {
    const colors = [
      "bg-blue-600",
      "bg-green-600",
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
      highlighted: true,
      icon: Users,
    },
    {
      title: "Aspirantes",
      description: "Famílias com mínimo de 4 filhos e se comprometem com o pagamento de uma joia e da quota anual.",
      benefits: ["Apenas por indicação", "Acesso à rede de apoio", "Participação em eventos", "Descontos selecionados"],
      icon: Heart,
    },
    {
      title: "Afiliados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "Não possuem direito de votar ou ser votados", "Descontos selecionados"],
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


  const benefits = [
    {
      icon: Shield,
      title: "Defesa de Direitos",
      description: "Suporte jurídico e representação para famílias numerosas",
    },
    {
      icon: Gift,
      title: "Benefícios Exclusivos",
      description: "Descontos especiais em produtos e serviços parceiros",
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Acesso à rede de apoio e compartilhamento de experiências",
    },
    {
      icon: HeartHandshake,
      title: "Eventos",
      description: "Participação em encontros, workshops e atividades especiais",
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
            Junte-se à Nossa Comunidade <br /> de Famílias Numerosas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Faça parte de uma rede de apoio que entende e valoriza as famílias numerosas
            </p>
            <a 
              href="#contact"
              className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary transition duration-300"
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


      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que se Associar?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-lg bg-secondary/5"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Membership Categories */}
     <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 tracking-wide">
          Seja um Associado
        </h2>
        <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
          Escolha a categoria que melhor se adapta à sua família e comece a desfrutar dos benefícios da ABFN.
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:gap-4 xs:gap-2 xs:mx-2 mx-10">
          {membershipTypes.map((type, index) => (
            <div
              key={type.title}
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
                  className="mt-4 inline-block bg-white text-black font-semibold py-2 px-6  transition hover:bg-gray-500 active:bg-primary text-center"
                >
                  {type.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    

      {/* Process Section */}
        {/* Contact Form Section */}
        <div className="py-20 px-4 bg-white" id="contact">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Candidate-se à Associação</h2>
          <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
            Deixe seu número de telefone e nossa equipe entrará em contato para avaliar sua candidatura
          </p>
          
          {submitted ? (
            <div className="bg-green-50 p-6 rounded-lg">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Recebemos sua solicitação!
              </h3>
              <p className="text-green-700">
                Em breve, nossa equipe entrará em contato para dar continuidade ao processo.
              </p>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="flex items-center bg-gray-50 rounded-lg p-2">
                <Phone className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  type="tel"
                  name="phone"  
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Seu número de telefone"
                  className="flex-1 p-2 bg-transparent outline-none text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-accent transition duration-300"
              >
                Enviar Solicitação
              </button>
            </form>
          )}
        </div>
      </div>
    

    </main>
  );
}