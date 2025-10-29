// src/app/layout.tsx

import type { Metadata } from "next";
// IMPORTANTE: Trocamos a importação de next/font/google por next/font/local
import localFont from "next/font/local"; 
import "./globals.css";

// 1. Configuração da Fonte Garet
const garet = localFont({
  src: [
    {
      path: '../../public/fonts/Garet-Book.woff2', 
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/garet-medium.ttf', 
      weight: '600',
      style: 'normal',
    },
        {
      path: '../../public/fonts/garet-bold.ttf', 
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/garet-extra-bold.ttf', 
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-garet', 
  display: 'swap',
});

// A Metadata está correta, mas vou atualizar para o contexto do projeto
export const metadata: Metadata = {
  title: "NEVOU | Garanta o máximo de eficiência do seu Ar-Condicionado",
  description: "Landing Page profissional para serviços de manutenção e instalação de ar-condicionado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Aplicamos a variável da Garet na tag <html> para que a fonte seja global
    <html lang="pt-BR" className={`${garet.variable}`}>
      <body
        // 3. Removemos as variáveis do Geist e mantemos 'antialiased'
        className={`antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}