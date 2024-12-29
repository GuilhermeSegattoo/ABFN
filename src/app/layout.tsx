import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import { Analytics } from "@vercel/analytics/react"
export const metadata = {
  title: "ABFN",
  description: "Associação Brasileira de Famílias Numerosas",
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
