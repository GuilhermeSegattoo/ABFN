"use client";

import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    children: "",
    relatives: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Substitua pela sua chave Web3Forms
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success("Formulário enviado com sucesso!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          children: "",
          relatives: "",
        });
      } else {
        toast.error("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="w-full bg-secondary py-16 px-4 md:px-20 lg:px-32 mb-[-80px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Parte Esquerda (Formulário) */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-light text-primary text-center lg:text-left mb-2">
          <span className="font-bold text-3xl">Estamos em construção...</span> <br />
          Para se manter informado, cadastre-se no formulário
        </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="children" className="block text-sm font-medium text-gray-700">
                Quantidade de filhos
              </label>
              <input
                type="number"
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="relatives" className="block text-sm font-medium text-gray-700">
                Parentes que coabitam
              </label>
              <textarea
                id="relatives"
                name="relatives"
                value={formData.relatives}
                onChange={handleChange}
                rows={3}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-primary text-white font-medium rounded-md shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-150"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>

        {/* Parte Direita (Texto) */}
        <div className="lg:w-1/2">
       



  <h2 className="text-4xl font-bold text-white mb-6 text-center lg:text-left">
    Considera-se família numerosa
  </h2>
  <p className="text-white text-2xl font-normal leading-relaxed mb-4 text-center lg:text-left">
    <span className="font-bold text-3xl mb-4">A família composta por no mínimo seis membros.</span> <br />
    Além do pai, da mãe e dos filhos, consideram-se membros da família numerosa parentes que coabitam.
  </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default ContatoSection;
