import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";

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
    <html lang="pt-BR" className={`${garet.variable}`}>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}