import { Navbar } from '@/components/ui/Navbar';
import { TopBlock } from '@/sections/TopBlock';
import { MiddleBlock } from '@/sections/MiddleBlock';
import { BottomBlock } from '@/sections/BottomBlock'; 
import { Footer } from '@/sections/footer1'; 
import { WhatsAppFAB } from '@/components/ui/WhatsAppFAB';

export default function Home() {
  return (
    <div id="inicio " className="overflow-x-hidden">
      <Navbar />
      <main>
        <div className="bg-[url('/images/bg.png')] bg-cover bg-center relative rounded-b-[70px] sm:rounded-b-[200px]"> 
          <TopBlock />
        </div>

        <div className="bg-white">
          <MiddleBlock />
        </div>

        <div className="bg-[url('/images/bg.png')] bg-cover bg-center relative rounded-t-[70px] sm:rounded-t-[200px]">
          <BottomBlock />
        </div>
      </main> 
      <Footer /> 
<footer className="bg-[#62bfff] text-white text-center py-4 text-sm md:text-base font-sans">
    
    {/* Contêiner Principal: Usa Grid para garantir 2 colunas iguais onde o texto não se esprema */}
    <div className="max-w-7xl mx-auto px-4 
                    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
                    gap-4 md:gap-8 text-left"> 
        
        {/* COLUNA 1: COPYRIGHT e CNPJ (Fica no topo em telas pequenas) */}
        {/* Usamos flex-col para empilhar o Copyright e o CNPJ em telas menores */}
        <div className="flex flex-col space-y-1 text-center md:text-left">
            
            <p className="break-words"> 
                © {new Date().getFullYear()} NEVOU. Todos os direitos reservados.
            </p>
            
            <p className="break-words"> 
                CNPJ: 50.081.980.0001-72
            </p>
        </div>
        
        <div className="text-center md:text-right"> 
            <p className="break-words">
                Desenvolvido por{' '}
                <a
                    href="https://www.instagram.com/desbugdigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-200 transition-colors"
                >
                    DesbugDigital
                </a>
            </p>
        </div>
        
    </div>
</footer>
<WhatsAppFAB />
    </div>
  );
}