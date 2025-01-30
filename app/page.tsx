"use client";

import { ArrowRight, Users, Heart, Shield, Gift, HandshakeIcon, Target, BadgePercent, ChevronRight, Phone, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";


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


export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
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

  const features = [
    {
      title: "Defesa dos direitos familiares",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores e desafios.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      title: "Descontos exclusivos",
      description: "Acesse descontos especiais e vantagens únicas com nossa rede de parceiros em todo o Brasil.",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80",
    },
    {
      title: "Rede de compartilhamento",
      description: "Juntos, fortalecemos os direitos da sua família em todas as etapas da vida.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Sustentabilidade",
      description: "Trocar e doar, uma forma simples de cuidar do meio ambiente e apoiar famílias.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
    },
  ];

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
      icon: Users,
      title: "Comunidade",
      description: "Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores",
    },
    {
      icon: Heart,
      title: "Suporte",
      description: "Acesso a recursos e orientação para fortalecer sua família",
    },
    {
      icon: Shield,
      title: "Proteção",
      description: "Defesa dos direitos e interesses das famílias numerosas",
    },
    {
      icon: Gift,
      title: "Benefícios",
      description: "Descontos exclusivos e vantagens com nossos parceiros",
    },
  ];


  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.length <= 15) {
      setPhoneNumber(formatted);
    }
  };



  return (
    <main className="bg-white ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-primary">

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 mx-12 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-4xl sm:text-3xl xs:text-2xl sm:mt-32 lg:mt-0  font-bold mb-6 xs:mb-2 text-white">
                Vamos nos unir à ABFN e fortalecer a vida das famílias numerosas
              </h1>
              <p className="text-xl mb-8 sm:mb-2 text-white/90">
                Junte-se a uma comunidade que entende e valoriza as famílias numerosas.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 sm:mb-[-10px]">
                <Link href="/associe-se">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/50 text-white px-8 py-6 rounded-full text-lg font-semibold">
                    Associe-se Agora
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="outline" className="bg-accent hover:bg-accent/50 text-white  px-8 py-6 rounded-full text-lg font-semibold">
                    Saber mais
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-accent p-8 mb-2 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                Quer saber mais?
              </h2>
              <p className="text-white/90 mb-6">
                Deixe seu telefone e entraremos em contato para apresentar todos os benefícios.
              </p>
              {!submitted ? (
                <form onSubmit={sendEmail} className="space-y-4 ">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                    <input
                       type="tel"
                       name="phone"  
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/20 border border-white/30 rounded-lg px-12 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-secondary hover:bg-primary/90 py-6 text-lg font-semibold">
                    Quero Conhecer a ABFN
                  </Button>
                </form>
              ) : (
                <div className="text-center p-6 bg-primary/20 rounded-lg">
                  <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Obrigado!</h3>
                  <p className="text-white/90">
                    Em breve entraremos em contato com você.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
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

          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1   mx-10">
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


      {/* Features benefits Grid */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que escolher a ABFN?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl aspect-square"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2 hidden md:hidden lg:block sm:block">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 hidden md:hidden lg:block sm:block">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-muted-foreground text-xl">
                Faça parte de uma rede de apoio com famílias que compartilham os mesmos valores
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte</h3>
              <p className="text-muted-foreground text-xl">
                Acesso a recursos e orientação para fortalecer sua família
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proteção</h3>
              <p className="text-muted-foreground text-xl">
                Defesa dos direitos e interesses das famílias numerosas
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Benefícios</h3>
              <p className="text-muted-foreground text-xl">
                Descontos exclusivos e vantagens com nossos parceiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">


          {/* Passo a Passo */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center mt-4">Dê o Primeiro Passo</h2>
              <div className="flex gap-4">

                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cadastro</h3>
                  <p className="text-muted-foreground">
                    Preencha o campo abaixo com seu número e envie para iniciar o processo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contato da Equipe</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe entrará em contato para verificar suas informações e avaliar sua elegibilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Análise</h3>
                  <p className="text-muted-foreground">
                    Após a verificação, você receberá as orientações para os próximos passos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bem-vindo!</h3>
                  <p className="text-muted-foreground">
                    Se aprovado, você será orientado sobre o processo final e poderá começar a aproveitar os benefícios e acesso a nossa futura plataforma.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-center mt-8 max-w-4xl mx-auto mb-4">
            Informe seu número de telefone para que nossa equipe entre em contato e analise sua qualificação.
          </h3>

          {/* Formulário para número de telefone */}
          <form onSubmit={sendEmail} className="space-y-4 flex flex-col items-center max-w-md mx-auto">
            <div className="relative w-full">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <input
                type="tel"
                name="phone"  
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(00) 00000-0000"
                className="w-full bg-white border border-gray-300 rounded-lg pl-12 pr-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
              Enviar
            </button>
          </form>

        </div>
      </section>



    </main>

  );
}