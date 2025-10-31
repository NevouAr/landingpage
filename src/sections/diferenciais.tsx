// src/components/sections/Diferenciais.tsx

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const diferenciaisData = [
  {
    imageSrc: '/images/selo.png',
    title: "Técnicos especializados e certificados",
    isLink: false,
    linkUrl: ''
  },
  {
    imageSrc: '/images/wpp.png',
    title: "Suporte no Whatsapp",
    isLink: true, // 👈 Identifica que este card é clicável
    linkUrl: 'https://wa.me/5585981773376?text=Ol%C3%A1%2C+gostaria+de+solicitar+suporte+t%C3%A9cnico+para+o+meu+ar-condicionado.' // 👈 Seu link do WhatsApp
  }
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-16">
          Nossos diferenciais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diferenciaisData.map((item, index) => {
            
            // ⚠️ Variáveis para classes condicionais
            const isClickable = item.isLink;
            const cardClasses = isClickable
              ? "bg-white rounded-xl p-8 shadow-2xl h-full cursor-pointer hover:shadow-3xl transition-shadow duration-300"
              : "bg-white rounded-xl p-8 shadow-2xl h-full";

            // ⚠️ Wrapper Condicional: <a /> se for clicável, <div /> se for informativo
            const Wrapper = isClickable ? 'a' : 'div';
            
            return (
              <Wrapper
                key={index}
                className={cardClasses}
                href={isClickable ? item.linkUrl : undefined}
                target={isClickable ? "_blank" : undefined}
                rel={isClickable ? "noopener noreferrer" : undefined}
              >
                <Card className="h-full border-none shadow-none"> {/* Garante que o Card seja transparente dentro do Wrapper */}
                  <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                    <div className="mb-6">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={102}
                        height={120}
                        className="w-28 h-28"
                      />
                    </div>
                    
                    <p className="text-lg font-extrabold text-gray-900">
                      {item.title}
                    </p>
                  </CardContent>
                </Card>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}