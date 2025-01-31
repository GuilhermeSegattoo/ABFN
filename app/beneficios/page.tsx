"use client";

import { ShoppingBag, Users, Recycle, Shield, Building, Gift,  CheckCircle,  GraduationCap, Heart, UtensilsCrossed, Shirt, ArrowRight } from "lucide-react";

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

export default function BeneficiosPage() {
  const benefits = [
    {
      icon: ShoppingBag,
      title: "Descontos Exclusivos",
      description: "Economize em compras com nossa rede de parceiros em todo o Brasil",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Rede de Compartilhamento",
      description: "Conecte-se com outras famílias para trocar experiências e apoio",
      color: "text-secondary",
    },
    {
      icon: Recycle,
      title: "Trocas & Doações",
      description: "Participe do nosso programa de sustentabilidade e economia circular",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Apoio Jurídico",
      description: "Suporte especializado em questões legais para famílias numerosas",
      color: "text-primary",
    },
    {
      icon: Building,
      title: "Parcerias Corporativas",
      description: "Acesso a benefícios especiais com empresas parceiras",
      color: "text-secondary",
    },
    {
      icon: Gift,
      title: "Programas Exclusivos",
      description: "Participe de eventos e programas especiais para associados",
      color: "text-accent",
    },
  ];

  const benefitsPlus = [
    {
      title: 'Educação',
      icon: <GraduationCap className="w-16 h-16 text-blue-600" />,
      description: 'Descontos exclusivos em escolas parceiras',
      details: ['Até 30% em mensalidades escolares', 'Material didático com preço reduzido', 'Cursos extracurriculares'],
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Saúde',
      icon: <Heart className="w-16 h-16 text-red-600" />,
      description: 'Benefícios em serviços de saúde',
      details: ['Desconto em consultas médicas', 'Preços especiais em exames', 'Convênios odontológicos'],
      bgColor: 'bg-green-50'
    },
    {
      title: 'Alimentação',
      icon: <UtensilsCrossed className="w-16 h-16 text-green-600" />,
      description: 'Vantagens em estabelecimentos parceiros',
      details: ['Descontos em restaurantes', 'Cashback em supermercados', 'Clube de benefícios alimentares'],
      bgColor: 'bg-orange-50'
    },
    {
      title: 'Doação de Roupas',
      icon: <Shirt className="w-16 h-16 text-primary" />,
      description: 'Programa de doação e trocas',
      details: ['Rede de trocas solidárias', 'Bazar beneficente', 'Pontos por doações'],
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&q=80"
            alt="Família feliz fazendo compras"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Benefícios Exclusivos para Associados
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Descubra todas as vantagens de fazer parte da maior rede de apoio a famílias numerosas do Brasil
          </p>
          
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Programa de Sustentabilidade</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa plataforma de trocas e doações permite que as famílias compartilhem
                itens em bom estado, promovendo a sustentabilidade e a economia circular.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Roupas e calçados infantis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Material escolar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Brinquedos e livros</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Móveis e equipamentos infantis</span>
                </li>
              </ul>
             <Link href="/associe-se" className="mt-6 inline-block">
             <Button size="lg" className="  bg-secondary text-white hover:bg-accent/90 hover:text-white px-8 py-6 rounded-full text-lg font-semibold">
              Saiba mais <ArrowRight className="ml-2" />
            </Button>
             </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                alt="Sustentabilidade"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Benefits Section */}
       <div className="py-20 px-4 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Benefícios Exclusivos</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Desfrute de uma ampla rede de vantagens e descontos especiais em diversos setores
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsPlus.map((benefit) => (

              <div 
                key={benefit.title}
                className={`${benefit.bgColor} rounded-2xl p-8 transform hover:scale-105 transition duration-300`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 mb-6">{benefit.description}</p>
                  <ul className="space-y-3 text-left w-full">
                    {benefit.details.map((detail, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Vantagens para Nossos Associados
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className={`w-12 h-12 ${benefit.color}`} />
                  <CardTitle className="mt-4">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      
    </main>
  );
}