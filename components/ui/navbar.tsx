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
    { label: "Associe-se", href: "/associe-se" },
    { label: "Benefícios", href: "/beneficios" },
    { label: "Parcerias", href: "/parcerias" },
    { label: "Notícias", href: "/noticias" },
  ];

  return (
    <nav className="bg-primary shadow-sm fixed w-full h-28 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mt-8 h-16">
          <Link href="/" className="font-bold text-2xl text-white mr-5">
            ABFN
            <span className="hidden lg:block font-medium text-lg"> Associação Brasileira de Famílias Numerosas</span>
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center ml-6 space-x-4 gap-4 mr-2">
            <Link
              href="/associado"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors"
            >
              Área do Associado
            </Link>
            <a href=""><Image src="/face-icon.svg" alt="Icon ABFN" width={30} height={30} className="hidden lg:block fixed  w-30 h-30"></Image></a>
            <a href=""><Image src="/insta-icon.svg" alt="Icon ABFN" width={30} height={30} className="hidden lg:block fixed  w-30 h-30"></Image></a>
            <a href=""><Image src="/wpp-icon.svg" alt="Icon ABFN" width={30} height={30} className="hidden lg:block fixed  w-30 h-30"></Image></a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-primary bg-white text-center mx-10 rounded-md mb-2 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="block py-2 text-primary mx-10 bg-white rounded-md text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Área do Associado
            </Link>
           
          </div>
        )}
      </div>
    </nav>
  );
}