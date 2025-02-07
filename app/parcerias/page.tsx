"use client";

import { Building, CheckCircle, Phone, Target, Users2, BadgePercent, } from "lucide-react";
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
import emailjs from 'emailjs-com';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import { useState } from "react";
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_pjr1ols', 'template_h9syqx6', e.target as HTMLFormElement, 'vd1F3fnBN3iSnypux')
  .then(
    (result) => {
      toast.success('Número enviado com sucesso!'); // Toast de sucesso
      console.log('Número enviado:', result.text);
    },
    (error) => {
      toast.error('Erro ao enviar o Número. Tente novamente.'); // Toast de erro
      console.error('Erro ao enviar Número:', error.text);
    }
  );
};

export default function ParceriasPage() {

   const [phoneNumber, setPhoneNumber] = useState('');
   const [submitted, setSubmitted] = useState(false);

  const benefits = [
    {
      icon: Users2,
      title: "Crescimento",
      description: "Ser parceiro da ABFN significa estar ao lado de uma causa que realmente faz a diferença na vida das pessoas",

    },
    {
      icon: Building,
      title: "Visibilidade",
      description: "Sua marca vai ser vista por um público altamente engajado e com um grande poder de compra",
    },
    {
      icon: Target,
      title: "Impacto Social",
      description: "Associação com uma causa nobre e fortalecimento da responsabilidade social",
    },
    {
      icon: BadgePercent,
      title: "Fidelização",
      description: "Ao oferecer condições especiais, você conquista a lealdade de famílias que sempre precisam de produtos para diferentes necessidades",
    },
  ];

  const partners = [
    {
      category: "Educação",
      
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    },
    {
      category: "Saúde",
      companies: ["Clínica Família", "Hospital Bem-Estar", "Laboratório Vida"],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    },
    {
      category: "Alimentação",
      companies: ["Mercado Família", "Hortifruti Natural", "Padaria do Bairro"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80",
    },
    {
      category: "Vestuário",
      companies: ["Loja Kids", "Calçados Conforto", "Moda Família"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Parceria empresarial"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">
          Conectando Famílias e Negócios para um futuro melhor!
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Junte-se a nós na missão de fortalecer as oportunidades para as famílias numerosas do Brasil
            e amplie seu alcance com um público engajado e fiel
          </p>
          <Link href="#registroParceiro">
          <Button size="lg" className="bg-accent text-white hover:bg-white/90 hover:text-primary px-8 py-6 rounded-full text-lg font-semibold">
            Torne-se Parceiro
          </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
          Por que se tornar nosso parceiro?

          </h2>
          <p className="text-center text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Juntos por um Mundo de Oportunidades para as Famílias!
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg bg-primary transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white text-lg">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center max-w-6xl mx-auto mb-4">Você sabia que existe um público muito especial que está sempre em busca de produtos e serviços de qualidade? </h1>
          <h2 className="text-2xl font-normal text-center max-w-4xl mx-auto  mb-2">
          São as <strong>famílias numerosas</strong> do Brasil, que formam uma comunidade forte e unida através da <strong>Associação Brasileira de Famílias Numerosas (ABFN)</strong>.
          </h2>
          <p className="text-center text-2xl text-muted-foreground mt-6 max-w-4xl mx-auto mb-6">
          Estamos convidando empresas como a sua a se tornar parceira da ABFN, oferecendo descontos e vantagens para nossas famílias. Ao fazer isso, você terá a chance de se conectar com milhares de famílias que buscam sempre boas oportunidades de consumo!

          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card key={partner.category} className="overflow-hidden bg-primary">
                <div className="relative h-48">
                  <Image
                    src={partner.image}
                    alt={partner.category}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">{partner.category}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
         
        </div>
      </section>

      {/* Partnership Process */}
      <section id="registroParceiro" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
          O que oferecemos a você?

          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Divulgação em nossas plataformas</h3>
                  <p className="text-muted-foreground">
                  Atingindo um grande número de famílias em todo o Brasil.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">A chance de estar associado a uma marca respeitada</h3>
                  <p className="text-muted-foreground">
                  Que preza pela união e pelo bem-estar da família.

                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acesso a um mercado</h3>
                  <p className="text-muted-foreground">
                   Com grande demanda e diversas oportunidades de negócios.

                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Se você acredita que a sua empresa pode oferecer algo especial</h3>
                  <p className="text-muted-foreground">
                   Para as famílias numerosas, entre em contato com a gente e vamos conversar sobre como podemos trabalhar juntos!

                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Toaster position="top-right" reverseOrder={false} />
     
        {/* Contact Form Section */}
        <div className="py-20 px-4 bg-white" id="contact">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Fale com a ABFN e torne-se nosso parceiro!
          </h2>
          <p className="text-center text-lg font-medium text-gray-600 mb-12 max-w-2xl mx-auto">
            Deixe seu Email e nossa equipe entrará em contato para avaliar sua candidatura!
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
                
                <input
                  type="email"
                  name="email"  
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Seu email"
                  className="flex-1 p-2 bg-transparent outline-none text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white hover:bg-white/90 hover:text-primary px-8 py-6 rounded-full text-lg font-semibold transition duration-300"
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