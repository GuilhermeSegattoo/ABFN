"use client";

import { ShoppingBag, Users, Recycle, Shield, Building, Gift } from "lucide-react";
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

  const partners = [
    {
      category: "Educação",
      discounts: ["20% em mensalidades escolares", "30% em material didático"],
    },
    {
      category: "Saúde",
      discounts: ["15% em consultas médicas", "25% em exames laboratoriais"],
    },
    {
      category: "Alimentação",
      discounts: ["10% em supermercados parceiros", "15% em hortifruti"],
    },
    {
      category: "Vestuário",
      discounts: ["20% em roupas infantis", "15% em calçados"],
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
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

      {/* Partner Discounts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Descontos com Parceiros
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card key={partner.category}>
                <CardHeader>
                  <CardTitle className="text-xl">{partner.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {partner.discounts.map((discount, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-sm text-muted-foreground">{discount}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
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
             <Link href="/associe-se">
             <Button className="mt-8 bg-secondary hover:bg-secondary/90">
                Saiba Mais
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
    </main>
  );
}