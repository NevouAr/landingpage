// src/components/sections/FinalCTASection.tsx

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function FinalCTASection() {
    return (

        <section 
            id="final-cta" 
            className=" text-white pt-20 pb-16 relative overflow-hidden rounded-t-[70px] sm:rounded-t-[200px]"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-4xl sm:text-3xl lg:text-4xl font-extrabold mb-8 leading-tight font-sans">
                   Garanta o máximo de eficiência do seu <br /><span className="text-[#62bfff]"> ar-condicionado</span> ainda hoje.
                </h2>

                <div className="relative w-full max-w-2xl mx-auto my-8">
                    <Image 
                        src="/images/ar-condicionado2.png"
                        alt="Unidade de Ar Condicionado" 
                        width={600} 
                        height={350}
                        priority
                        className="w-full h-auto"
                    />
                </div>

                <p className="text-xl sm:text-2xl mb-8 font-bold">
                    Garanta agora conforto imediato <br /><span className="text-[#62bfff]">em sua residência ou empresa.</span>
                </p>

                <Button 
                    size= "pq"
                    className="btn-agenda-gradient hover:bg-sky-600 text-white font-bold text-2xl sm:text-3xl py-6 px-8 rounded-full transition-all font-sans mb-20 w-auto mx-auto"
                    asChild
                >
                    <a href="https://wa.me/5585981773376?text=Quero%20fazer%20uma%20instala%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                        Quero agendar agora
                    </a>
                </Button>

            </div>
        </section>
    );
}