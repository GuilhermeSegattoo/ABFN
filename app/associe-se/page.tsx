"use client";

import { Shield, Users, Gift, HeartHandshake } from "lucide-react";
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
        toast.success('E-mail enviado com sucesso!'); // Toast de sucesso
        console.log('E-mail enviado:', result.text);
      },
      (error) => {
        toast.error('Erro ao enviar o e-mail. Tente novamente.'); // Toast de erro
        console.error('Erro ao enviar e-mail:', error.text);
      }
    );
};

export default function AssociePage() {
  const [selectedType, setSelectedType] = useState("");
  const membershipTypes = [

    {
      title: "Efetivos",
      description: "São as famílias numerosas que atendem aos requisitos de admissão e se comprometem com o pagamento de uma joia e da quota anual",
      benefits: ["Descontos exclusivos", "Rede de apoio", "Participação em eventos"],
      highlighted: true,
    },
    {
      title: "Aspirantes",
      description: "São as famílias numerosas que ainda não atingiram o número mínimo de seis membros ou quatro filhos. Mesmo assim, podem se associar, desde que atendam aos requisitos de admissão e se comprometam com o pagamento de uma joia e da quota anual. ",
      benefits: ["Acesso à rede de apoio", "Associados aspirantes não possuem direito de votar ou ser votados", "Descontos selecionados"],
    },
    {
      title: "Associados",
      description: "São as famílias numerosas que atingiram o número mínimo de seis membros, que de forma espontânea solicitam sua associação.",
      benefits: ["Acesso à rede de apoio", "não possuem direito de votar ou ser votados", "Descontos selecionados"],
    },
    {
      title: "Beneméritos",
      description: "Serão reconhecidos como associados beneméritos aquelas pessoas ou instituições que prestarem serviços ou realizarem contribuições significativas para a ABFN, como doações ou ações de relevância social. O reconhecimento será feito pelo Conselho de Administração da ABFN.",
      benefits: ["Reconhecimento especial", "Participação em eventos", "Networking"],
    },
  ];

  const founders = [
    {
      name: "Richard",
      description: "Família com 9 filhos",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      name: "Pedro e Ana Santos",
      description: "Família com 5 filhos",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    },
    {
      name: "Carlos e Lucia Oliveira",
      description: "Família com 7 filhos",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
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
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/familyBG.png"
            alt="Família feliz"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6 max-w-2xl">
            Junte-se à Nossa Comunidade de Famílias Numerosas
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Faça parte de uma rede de apoio que entende e valoriza as famílias numerosas
          </p>
          <Link href="#cadastro" >
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Comece Agora
            </Button>
          </Link>
        </div>
      </section>

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

      {/* Membership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Categorias de Associação
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Escolha a categoria que melhor se adapta à sua família e comece a
            desfrutar dos benefícios da ABFN
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipTypes.map((type) => (
              <Card
                key={type.title}
                className={`relative ${type.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : ""
                  }`}
              >
                <CardHeader>
                  <CardTitle>{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/cadastro">
                    <button className="w-full mt-6 bg-primary text-white py-2 rounded-lg">
                      Selecionar
                    </button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Nossos Fundadores
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Conheça as famílias que iniciaram este movimento e construíram as bases da ABFN
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{founder.name}</CardTitle>
                  <CardDescription>{founder.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cadastro</h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário com seus dados e informações familiares
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Análise</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe verificará as informações e categoria adequada
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pagamento</h3>
                  <p className="text-muted-foreground">
                    O investimento é de apenas <span className="font-bold">R$37/mês,</span> com uma Joia de Inscrição inicial de <span className="font-bold">R$150.</span> No entanto, você ficará isento do pagamento da Joia se associar-se até o dia <span className="font-bold">30/06/2025.</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Boas-vindas</h3>
                  <p className="text-muted-foreground">
                    Receba suas boas-vindas e comece a aproveitar os benefícios
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lembre-se</h3>
                  <p className="text-muted-foreground">
                    Quanto mais famílias numerosas se unirem a nós, mais forte será nossa voz e maiores serão nossos resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Toaster position="top-right" reverseOrder={false} />
      {/* Registration Form */}
      <Card id="cadastro" className="mt-12 mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle>Formulário de Pré-cadastro</CardTitle>
          <CardDescription>
            Preencha seus dados para iniciar o processo de associação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="children" className="text-sm font-medium">
                  Quantidade de Filhos
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  min="0"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="relatives" className="text-sm font-medium">
                  Parentes que Coabitam
                </label>
                <input
                  type="number"
                  id="relatives"
                  name="relatives"
                  min="0"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="membership" className="text-sm font-medium">
                  Categoria de Associação
                </label>
                <select
                  id="membership"
                  name="membership"
                  className="w-full p-2 border rounded-md"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {membershipTypes.map((type) => (
                    <option key={type.title} value={type.title}>
                      {type.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded-md"
                placeholder="Compartilhe mais informações sobre sua família ou dúvidas que possua"
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Enviar Pré-cadastro
            </Button>
          </form>
        </CardContent>
      </Card>

    </main>
  );
}