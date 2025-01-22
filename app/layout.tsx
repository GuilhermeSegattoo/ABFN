import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Analytics } from "@vercel/analytics/react";
import { getSEOTags } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = getSEOTags({
 appName: "ABFN - Associação Brasileira de Famílias Numerosas",
 appDescription: "Defesa dos direitos e interesses das famílias numerosas",
 keywords: ["familia", "direitos", "justicia", "associados", "abfn"],
 appDomain: "https://abfnumerosas.org",
 canonicalUrlRelative: "/",
 locale: "pt-BR",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}