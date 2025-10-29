// src/components/sections/TestimonialsSection.tsx

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
// ⚠️ REMOVENDO: import { Star } from 'lucide-react'; // Ícone de estrela para rating

// Dados dos Depoimentos
const depoimentos = [
  {
    name: "Ricardo Almeida",
    avatarSrc: "/images/RicardoAlmeida.jpg", 
    starImageSrc: "/images/stars.png",
    text: "Rápidos e pontuais. Não atrapalharam o meu movimento. Profissionais e eficientes.",
  },
  {
    name: "Juliana Dias",
    avatarSrc: "/images/JulianaDias.jpg", 
    starImageSrc: "/images/stars.png", 
    text: "Super cuidadosos. Sem sujeira e o ar funciona perfeitamente.",
  },
  {
    name: "Sérgio R. Matos",
    avatarSrc: "/images/SergioRMatos.jpg",  
    starImageSrc: "/images/stars.png", 
    text: "Ótimos profissionais, resolveram o problema do dreno sem estragos.",
  },
  {
    name: "Marília Aparecida",
    avatarSrc: "/images/MariliaAparecida.jpg", 
    starImageSrc: "/images/stars.png", 
    text: "Nunca tive ar-condicionado e eles me explicaram tudo.",
  },
];

export function SessaoDepoimentos() {
  return (
    <section id="depoimentos" className="py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4 text-center">
        
        {/* Título da Seção */}
        <h2 className="lg:text-7xl text-4xl font-extrabold text-[#0d67a4] mb-12 font-sans">
          Clientes satisfeitos
        </h2>

        {/* Grid Responsivo para os Cards de Depoimento */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((testimonial, index) => (
            <Card key={index} className="bg-gray-200 p-4 shadow-lg flex flex-col items-center justify-start h-full">
              
              {/* Avatar e Nome */}
              <div className="flex flex-col items-center mb-3">
                <div className="relative size-16 mb-2 rounded-full overflow-hidden border-2 border-blue-500">
                  <Image
                    src={testimonial.avatarSrc}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-bold text-brand-dark font-sans text-sm">{testimonial.name}</p>
                
                {/* ⚠️ NOVO BLOCO: Renderizando a IMAGEM das 5 estrelas */}
                <div className="mt-1"> {/* Pequena margem para espaçar do nome */}
                  <Image
                    src={testimonial.starImageSrc}
                    alt={`${testimonial.name}'s rating: 5 stars`}
                    width={100}  // Ajuste a largura conforme o tamanho desejado para as estrelas
                    height={20} // Ajuste a altura
                    className="object-contain" // Garante que a imagem se ajuste sem cortar
                  />
                </div>
              </div>

              {/* Texto do Depoimento */}
              <CardContent className="p-0 text-[#0d67a4] text-[0.9rem] font-semibold">
                {testimonial.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}