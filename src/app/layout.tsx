import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Associação Brasileira de Famílias Numerosas | ABFN",
  description: "A ABFN é uma associação que luta pelos direitos das famílias numerosas no Brasil, oferecendo apoio jurídico, educacional e promovendo políticas públicas.",
  keywords: "Associação Brasileira de Famílias Numerosas, ABFN, famílias numerosas, direitos das famílias, apoio familiar, políticas públicas para famílias",
  author: "Associação Brasileira de Famílias Numerosas",
  og: {
    title: "Associação Brasileira de Famílias Numerosas | ABFN",
    description: "A ABFN oferece apoio jurídico e social para famílias numerosas, com ações e políticas públicas para melhorar a qualidade de vida dessas famílias.",
    image: "/lg.svg", // Substitua por uma imagem representativa do seu site
    url: "https://www.abfnumerosas.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Associação Brasileira de Famílias Numerosas | ABFN",
    description: "A ABFN defende os direitos das famílias numerosas, oferecendo apoio jurídico e promovendo políticas públicas.",
    image: "/lg.svg", // Substitua por uma imagem otimizada para Twitter
  },
  icons: {
    icon: "/lg.svg", // Caminho do arquivo favicon
    shortcut: "/lg.svg", // Atalho do ícone (opcional)
    apple: "/lg.svg", // Ícone específico para dispositivos Apple (opcional)
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="font-poppins">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
