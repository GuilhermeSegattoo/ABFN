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
      title: "Alcance Qualificado",
      description: "Acesso direto a um público familiar engajado e com alto potencial de consumo",
    },
    {
      icon: Building,
      title: "Visibilidade",
      description: "Exposição da marca em nossos canais de comunicação e eventos",
    },
    {
      icon: Target,
      title: "Impacto Social",
      description: "Associação com uma causa nobre e fortalecimento da responsabilidade social",
    },
    {
      icon: BadgePercent,
      title: "Fidelização",
      description: "Criação de relacionamento duradouro com famílias numerosas",
    },
  ];

  const partners = [
    {
      category: "Educação",
      companies: ["Escola Crescer", "Instituto Educar", "Colégio Futuro"],
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
            Seja um Parceiro ABFN
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Junte-se a nós na missão de fortalecer as famílias numerosas do Brasil
            e amplie seu alcance com um público engajado e fiel
          </p>
          <Link href="#registroParceiro">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Torne-se Parceiro
          </Button>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Por que ser um Parceiro?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Descubra as vantagens de fazer parte da nossa rede de parceiros e
            conecte-se com milhares de famílias em todo o Brasil
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Parceiros por Categoria
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card key={partner.category} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={partner.image}
                    alt={partner.category}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{partner.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {partner.companies.map((company) => (
                      <li key={company} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-muted-foreground">{company}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como se Tornar um Parceiro
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contato Inicial</h3>
                  <p className="text-muted-foreground">
                    Preencha o seu número de telefone para nossa equipe entrar em contato
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
                  Nossa equipe entrará em contato para verificar suas informações e avaliar sua proposta
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acordo</h3>
                  <p className="text-muted-foreground">
                    Formalização da parceria e definição dos termos de cooperação
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integração</h3>
                  <p className="text-muted-foreground">
                  Se aprovado, você será orientado sobre o processo final e poderá começar a aproveitar os benefícios e o início da divulgação e disponibilização dos benefícios aos associados 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Candidate-se à ser um Parceiro</h2>
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