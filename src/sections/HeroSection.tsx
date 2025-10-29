import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 text-white flex flex-col items-center sm:pt-28 lg:pt-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 leading-tight text-left max-w-7xl mx-auto">
          Não espere o seu <span className="text-[#62bfff]">ar-condicionado</span> parar de funcionar!
        </h1>
        
        {/* Imagem - Já tem a largura total (w-full) e max-w-xl (garantindo que não seja gigante) */}
        <div className="relative w-full max-w-xl mx-auto my-12">
          <Image 
            src="/images/ar-condicionado.png" 
            alt="Ar-condicionado Split" 
            width={800}
            height={400}
            priority
            className="w-full h-auto"
          />
        </div>
        
        <div className="mt-8">
          <p className="text-base sm:text-lg mb-6">
            <strong className="font-bold">Solicite sua manutenção preventiva</strong>
            {' '}
            <br />
            <strong className="font-bold text-[#62bfff]">e economize até 30% de energia.</strong>
          </p>

          <Button 
            size="pq"
            className="btn-agenda-gradient hover:bg-sky-600 text-white font-bold text-2xl sm:text-3xl py-6 px-8 rounded-full transition-all font-sans mb-20 w-auto mx-auto"
            asChild
          >
            <a href="https://wa.me/5585981773376?text=Ol%C3%A1%2C%20quero%20fazer%20manutenção%20preventiva" target="_blank" rel="noopener noreferrer">
              Solicite no Whatsapp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}