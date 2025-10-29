'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const clientLogos = [
  { src: '/images/logos/clínicasLuiza.png', alt: 'Clínicas Luiza' },
  { src: '/images/logos/bsDesign.png', alt: 'BS Design' },
  { src: '/images/logos/biosaudeProdutosHospitalares.png', alt: 'Biosaude Produtos Hospitalares'},
  { src: '/images/logos/cleackSupermercados.png', alt: 'Cleack Supermercados' },
  { src: '/images/logos/hcpneu.png', alt: 'HC PNEU' },
  { src: '/images/logos/leFrancaBuffet.png', alt: 'Le França Buffet' },
];

const emblaOptions = {
  loop: true,
  align: 'start' as const,
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 640px)': { slidesToScroll: 2 },
    '(min-width: 1024px)': { slidesToScroll: 3 },
  }
};

export function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="clientes" className="relative py-14 z-0 overflow-hidden clip-bottom-curve rounded-b-[70px] sm:rounded-b-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-12 font-sans text-center">
          Empresas que confiam no nosso trabalho
        </h2>

        <div className="relative px-12">
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-white z-10"
            onClick={scrollPrev}
            aria-label="Anterior"
          >
            <ChevronLeft className="size-6" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-white hover: z-10"
            onClick={scrollNext}
            aria-label="Próximo"
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex touch-pan-y">
              {clientLogos.map((logo, index) => (
                <div key={index} className="embla__slide relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                  <div className="flex items-center justify-center h-30 bg-white rounded-lg p-4">
                    <Image 
                      src={logo.src} 
                      alt={logo.alt} 
                      width={150}
                      height={50}
                      className="object-contain w-auto h-full max-w-[150px]" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        
      <div className="mt-12 text-center relative z-20">
        <Button size="lg" className="btn-agenda-gradient text-white font-bold text-3xl py-8 px-6 rounded-full transition-all" asChild>
          <a href="https://wa.me/5585981773376?text=Quero%20fazer%20uma%20instala%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
            Solicite Orçamento
          </a>
        </Button>
      </div>
    </section>
  );
}