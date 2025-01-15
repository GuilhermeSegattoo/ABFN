"use client";

import { useState } from "react";
import { CalendarDays, Clock, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define o tipo dos dados das notícias
type NewsItem = {
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [modalData, setModalData] = useState<NewsItem | null>(null); // Tipagem para o modal

  const news: NewsItem[] = [
    {
      title: "ABFN Primeiro Informativo",
      excerpt:
        "Um sonho gestado por 9 anos, nasce agora com a Associação Brasileira das Famílias Numerosas! Como todo bebê que nasce, ele grita e...",
      date: "2024-12-24",
      fullContent: `
      Nascemos!

      Um sonho gestado por 9 anos, nasce agora com a Associação Brasileira das Famílias Numerosas! Como todo bebê que nasce, ele grita e anuncia sua chegada. Estou aqui! Cheguei! E com esperança e alegria acolhemos essa responsabilidade, que não é apenas nossa, mas de todas as famílias, que têm o desejo no seu coração de crescer com liberdade de valores e respeito.

      Quando os pais recebem um bebê, recebem junto um misto de insegurança, entusiasmo e responsabilidade. Vem também a ansiedade e o medo de não conseguir proporcionar a sua família as condições necessárias para seu desenvolvimento.

      Hoje somos bombardeados por ações que tornam a nossa vida difícil, e vistos como “uma espécie rara” ou “números estatísticos”. A ABFN nasce com o objetivo de mostrar um horizonte, viver um hoje em função de um depois, somos livres nas escolhas e decisões que brotam no seio familiar.

      Temos a missão de defender os interesses das famílias numerosas, promovendo políticas e ações que valorizem sua dignidade, assegurem seus direitos e fortaleçam sua contribuição como pilar essencial da sociedade, com base no respeito à vida e à pessoa humana.

      Muitos casais dessa associação são católicos, escolhemos a Sagrada Família como nossa intercessora, porque sabemos a importância da união de uma família.

      Nossa força será sustentada pelo número de sócios, onde todos somos responsáveis por recrutar e indicar mais sócios. Buscaremos apoio junto às entidades públicas, privadas e do terceiro setor para divulgação, colaboração e parcerias.

      Estamos abertos a sugestões e colaborações, entrem e compartilhem nossa página www.abfnumerosas.org e nos ajudem a crescer. Se trabalharmos juntos, podemos ajudar muitas famílias no nosso Brasil que vivem a alegria de ter muitos filhos, e que querem ser respeitadas em sua Pátria.

      Vamos ao trabalho!
    `,
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Informativos",
    },
   
  ];

  const categories = [
    "Todos",
    "Informativos",
    "Parcerias",
    "Legislação",
    "IBGE",
    "Gráficos",
    "Vagas de emprego",
    "Vida em família",
    "Classificados",
  ];

  const filteredNews =
    selectedCategory === "Todos"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80"
            alt="Notícias e Atualizações"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Notícias e Destaques
          </h1>
          <p className="text-xl max-w-2xl">
            Mantenha-se informado sobre as últimas novidades, eventos e conquistas da ABFN
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white border border-primary text-primary"
                  } hover:bg-primary hover:text-white transition-colors whitespace-nowrap`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredNews.map((item) => (
                <Card
                  key={item.title}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl hover:text-primary transition-colors">
                      <button onClick={() => setModalData(item)}>
                        {item.title}
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span>
                          {new Date(item.date).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime} de leitura</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setModalData(item)}
                      className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                    >
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Nenhuma notícia encontrada para essa categoria.
            </p>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={modalData.image}
              alt={modalData.title}
              width={800}
              height={400}
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>
            <p className="text-gray-700 whitespace-pre-line">{modalData.fullContent}</p>
          </div>
        </div>
      )}


    </main>
  );
}
