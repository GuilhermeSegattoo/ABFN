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
      description: "Famílias com minimo de 6 filhos e se comprometem com o pagamento de uma joia e da quota anual",
      benefits: ["Apenas por indicação", "Descontos exclusivos", "Rede de apoio", "Participação em eventos"],
      highlighted: true,
      icon: Users,
    },
    {
      title: "Aspirantes",
      description: "Famílias com minimo de 4 filhos e se comprometem com o pagamento de uma joia e da quota anual",
      benefits: ["Apenas por indicação", "Acesso à rede de apoio", "Participação em eventos", "Descontos selecionados"],
      icon: Heart,
    },
    {
      title: "Afiliados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "não possuem direito de votar ou ser votados", "Descontos selecionados"],
      icon: Target,
    },
    {
      title: "Beneméritos",
      description: "Assoam-se reconhecidos como associados beneméritos aquelas pessoas ou instituições que prestarem serviços ou realizarem contribuições significativas para a ABFN, como doações ou ações de relevância social. O reconhecimento será feito pelo Conselho de Administração da ABFN.",
      benefits: ["Reconhecimento especial", "Participação em eventos", "Networking"],
      icon: HandshakeIcon,
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
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition duration-300"
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
             Na <strong>ABFN</strong>, 
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Acreditamos que a força da família numerosa vai além do número de membros: ela representa um vínculo de união, amor e comprometimento que transcende gerações. Se a sua família é composta por pelo menos seis membros, incluindo pais, filhos e outros parentes que coabitam sob o mesmo teto, você já faz parte do que entendemos como uma verdadeira família numerosa.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ao se associar à <strong>ABFN</strong>, você entra para uma rede que compartilha os mesmos valores de solidariedade, cuidado mútuo e responsabilidade. Você e sua família terão acesso a uma série de vantagens e benefícios e, mais importante ainda, a um espaço de apoio e acolhimento que visa fortalecer cada membro de sua família e garantir que seus direitos sejam respeitados.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Como Funciona a Associação?
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            A adesão à <strong>ABFN</strong> é por indicação, o que significa que uma família já associada poderá apresentar sua família numerosa ao nosso movimento. Isso fortalece nossa rede e garante que cada novo membro chegue com a certeza de que faz parte de uma comunidade de confiança, unida pela causa da valorização da vida e da família.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Também pensamos em você que de forma espontânea nos procurou, criamos a categoria de associado afiliado.
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
                className="text-center p-6 rounded-lg bg-primary/5"
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
               <h2 className="text-4xl font-bold text-center mb-4  tracking-wide">
                 Seja um Associado
               </h2>
               <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
                 Escolha a categoria que melhor se adapta à sua família e comece a desfrutar dos benefícios da ABFN.
               </p>
     
               <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-10">
                 {membershipTypes.map((type, index) => (
                   <div
                     key={type.title}
                     className={`relative overflow-hidden transition-transform duration-300 transform hover:scale-105 shadow-lg p-8 ${getCardColor(index)}`}
                   >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-black opacity-10 transform rotate-45 translate-x-8 -translate-y-8"></div>
     
                     {/* Ícone */}
                     <type.icon className="w-14 h-14 text-white mb-6" />
     
                     {/* Título do Plano */}
                     <h3 className="text-2xl font-extrabold text-white mb-3 uppercase">{type.title}</h3>
     
                     {/* Descrição */}
                     <p className="text-white font-medium mb-6">{type.description}</p>
     
                     {/* Benefícios */}
                     <ul className="space-y-3 text-white">
                       {type.benefits.map((benefit) => (
                         <li key={benefit} className="flex items-center gap-2">
                           <Check className="w-6 h-6 text-white" />
                           <span className="text-lg font-semibold">{benefit}</span>
                         </li>
                       ))}
                     </ul>
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