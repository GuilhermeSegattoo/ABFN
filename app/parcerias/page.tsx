"use client";

import { Building, HandshakeIcon, Target, Users2, BadgePercent, ArrowRight } from "lucide-react";
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

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_pjr1ols', 'template_h9syqx6', e.target as HTMLFormElement, 'vd1F3fnBN3iSnypux')
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

export default function ParceriasPage() {
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
      <section className="relative h-[60vh] flex items-center">
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
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contato Inicial</h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário de interesse ou entre em contato direto conosco
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proposta</h3>
                  <p className="text-muted-foreground">
                    Apresente sua proposta de parceria e benefícios para os associados
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
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
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integração</h3>
                  <p className="text-muted-foreground">
                    Início da divulgação e disponibilização dos benefícios aos associados
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Toaster position="top-right" reverseOrder={false} />
      {/* Registration Form for Partners */}
      <Card id="registroParceiro" className="mt-12 mx-auto max-w-3xl">
  <CardHeader>
    <CardTitle>Formulário de Cadastro de Parceiros</CardTitle>
    <CardDescription>
      Preencha os dados da sua empresa para iniciar o processo de parceria.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <form className="space-y-6" onSubmit={sendEmail}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Nome da Empresa */}
        <div className="space-y-2">
          <label htmlFor="companyName" className="text-sm font-medium">
            Nome da Empresa
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName" 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* CNPJ */}
        <div className="space-y-2">
          <label htmlFor="cnpj" className="text-sm font-medium">
            CNPJ
          </label>
          <input
            type="text"
            id="cnpj"
            name="cnpj" 
            className="w-full p-2 border rounded-md"
            placeholder="00.000.000/0000-00"
            required
          />
        </div>

        {/* Ramo de Atuação */}
        <div className="space-y-2">
          <label htmlFor="businessField" className="text-sm font-medium">
            Ramo de Atuação
          </label>
          <select
            id="businessField"
            name="businessField" 
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Selecione o ramo</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Educação">Educação</option>
            <option value="Saúde">Saúde</option>
            <option value="Serviços">Serviços</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        {/* Endereço Comercial */}
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">
            Endereço Comercial
          </label>
          <input
            type="text"
            id="address"
            name="address" 
            className="w-full p-2 border rounded-md"
            placeholder="Rua, número, complemento"
            required
          />
        </div>

        {/* Telefone Comercial */}
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Telefone Comercial
          </label>
          <input
            type="tel"
            id="phone"
            name="phone" 
            className="w-full p-2 border rounded-md"
            placeholder="(00) 0000-0000"
            required
          />
        </div>

        {/* E-mail Comercial */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail Comercial
          </label>
          <input
            type="email"
            id="email"
            name="email" 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Nome do Responsável */}
        <div className="space-y-2">
          <label htmlFor="responsibleName" className="text-sm font-medium">
            Nome do Responsável
          </label>
          <input
            type="text"
            id="responsibleName"
            name="responsibleName" 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Cargo do Responsável */}
        <div className="space-y-2">
          <label htmlFor="responsiblePosition" className="text-sm font-medium">
            Cargo do Responsável
          </label>
          <input
            type="text"
            id="responsiblePosition"
            name="responsiblePosition" 
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
      </div>

      {/* Descrição da Empresa */}
      <div className="space-y-2">
        <label htmlFor="companyDescription" className="text-sm font-medium">
          Descrição da Empresa (opcional)
        </label>
        <textarea
          id="companyDescription"
          name="companyDescription" 
          rows={4}
          className="w-full p-2 border rounded-md"
          placeholder="Compartilhe mais informações sobre sua empresa ou a parceria desejada."
        ></textarea>
      </div>

      {/* Botão de Envio */}
      <Button type="submit" className="w-full">
        Enviar Cadastro de Parceiro
      </Button>
    </form>
  </CardContent>
</Card>

    </main>
  );
}