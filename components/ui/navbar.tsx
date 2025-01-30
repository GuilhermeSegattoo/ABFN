"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Benefícios", href: "/beneficios" },
    { label: "Associado", href: "associe-se" },
    { label: "Parcerias", href: "/parcerias" },
    { label: "Notícias", href: "/noticias" },
  ];

  return (
    <nav className="bg-blue-500 shadow-lg fixed w-full z-50 py-4">
      <div className="container mx-auto px-6 lg:px-10 flex justify-between items-center">
        {/* Logo e Nome */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex flex-col items-start">
            <Image
              src="/Logofm.svg"
              alt="Logo ABFN"
              width={200}
              height={60}
              className="w-48 h-auto"
            />
            <span className="text-white text-xl font-semibold">
              Associação Brasileira das Famílias Numerosas
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white font-semibold hover:text-orange-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/associado"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Área do Associado
          </Link>
          <div className="flex space-x-4 ml-4">
            <a href="#">
              <Image src="/face-icon.svg" alt="Facebook" width={30} height={30} className="w-6 h-6" />
            </a>
            <a href="#">
              <Image src="/insta-icon.svg" alt="Instagram" width={30} height={30} className="w-6 h-6" />
            </a>
            <a href="#">
              <Image src="/wpp-icon.svg" alt="WhatsApp" width={30} height={30} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 py-4 text-center w-full absolute top-full left-0">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/associado"
            className="block mt-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors mx-6"
            onClick={() => setIsOpen(false)}
          >
            Área do Associado
          </Link>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#">
              <Image src="/face-icon.svg" alt="Facebook" width={30} height={30} className="w-6 h-6" />
            </a>
            <a href="#">
              <Image src="/insta-icon.svg" alt="Instagram" width={30} height={30} className="w-6 h-6" />
            </a>
            <a href="#">
              <Image src="/wpp-icon.svg" alt="WhatsApp" width={30} height={30} className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
