'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const serviceCards = [
  {
    title: "INSTALAÇÃO",
    subtitle: "Comercial e residencial",
    imageSrc: "/images/instalacao.jpg",
    description: "Instalamos o seu ar-condicionado com qualidade, rapidez e garantia. Nossa equipe é especializada em seguir os padrões recomendados pelos fabricantes, garantindo uma instalação segura, eficiente e com resultado duradouro.",
    buttonText: "Instale agora",
    linkUrl: "https://wa.me/5585981773376?text=Ol%C3%A1%2C+gostaria+de+solicitar+um+orçamento+para+instala%C3%A7%C3%A3o+de+ar-condicionado."
  },
  {
    title: "MANUTENÇÃO",
    subtitle: "Preventiva e Corretiva",
    imageSrc: "/images/manutencao.jpg",
    description: "Cuidamos do seu ar-condicionado de forma completa: manutenção preventiva para evitar falhas, reduzir o consumo de energia e prolongar a vida útil, e manutenção corretiva para resolver problemas de forma rápida e eficiente.",
    buttonText: "Agende hoje",
    linkUrl: "https://wa.me/5585981773376?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+manuten%C3%A7%C3%A3o+(preventiva+ou+corretiva)."
  },
  {
    title: "ACOMPANHAMENTO",
    subtitle: "Planos personalizados",
    imageSrc: "/images/acompanhamento.jpg",
    description: "Oferecemos soluções completas em climatização residencial e comercial, com diversos planos de manutenção contínua, que asseguram eficiência, economia de energia e prevenção de falhas no momento em que precisar.",
    buttonText: "Solicite agora",
    linkUrl: "https://wa.me/5585981773376?text=Ol%C3%A1%2C+tenho+interesse+nos+planos+de+acompanhamento+e+manuten%C3%A7%C3%A3o+cont%C3%ADnua."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-extrabold text-center text-white mb-16">
          Nossos Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-xl border-2 border-blue-500 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative w-full h-72 p-4">
                <div className="relative h-full w-full bg-white rounded-lg overflow-hidden">
                  <Image 
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              <CardHeader className="text-center px-4 py-0 sm:px-6 md:px-8">
                <CardTitle className="text-center text-lg sm:text-xl md:text-[1rem] lg:text-2xl font-extrabold uppercase text-gray-900 mt-0 mb-0">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-blue-400">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 py-0 flex flex-col flex-grow">
                <div className="text-justify flex-grow">
                  <p className="text-[#0D67A4] text-sm font-extrabold mb-3 text-justify">
                    {service.description}
                  </p>
                </div>
                
                <div className="text-center mt-auto py-4">
                  <Button 
                    size="pq"
                    className="btn-agenda-gradient hover:bg-sky-600 text-white font-bold text-xl lg:text-3xl py-6 lg:py-6 px-4 lg:px-8 rounded-full transition-all font-sans w-full"
                    asChild
                  >
                    <a 
                      href={service.linkUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="whitespace-nowrap"
                    >
                      {service.buttonText}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}