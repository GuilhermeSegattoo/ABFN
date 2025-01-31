"use client";


import Link from "next/link";
import { Construction, ArrowLeft } from "lucide-react";

export default function LoginPage() {
 

  return (
    <main className="min-h-screen pt-16  bg-gray-50 mb-[-100px]">
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Ícone animado */}
      <div className="animate-bounce bg-white shadow-lg p-6 rounded-full">
        <Construction className="w-16 h-16 text-yellow-500" />
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-gray-800 mt-6">Estamos Construindo!</h1>

      {/* Mensagem */}
      <p className="text-lg text-gray-600 mt-4 text-center max-w-xl">
        Nossa plataforma está sendo desenvolvida para proporcionar a melhor experiência para você.
        Em breve, teremos novidades incríveis! 🚀
      </p>

      {/* Botão de voltar */}
      <Link href="/" className="mt-6 flex items-center gap-2 bg-primary text-white font-semibold py-2 px-6 rounded-lg transition hover:bg-primary-dark">
        <ArrowLeft className="w-5 h-5" />
        Voltar para a Home
      </Link>
       
    </div>
    </main>
  );
}