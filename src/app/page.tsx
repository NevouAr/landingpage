import { Navbar } from '@/components/ui/Navbar';
import { TopBlock } from '@/sections/TopBlock';
import { MiddleBlock } from '@/sections/MiddleBlock';
import { BottomBlock } from '@/sections/BottomBlock'; 
import { Footer } from '@/sections/footer1'; 

export default function Home() {
  return (
    <div id="inicio">
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
      
      <footer className="bg-[#62bfff] text-white text-center py-4 text-xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <div className="text-left flex flex-col md:space-x-4">
            <p className="whitespace-nowrap">
              © {new Date().getFullYear()} NEVOU. Todos os direitos reservados.
            </p>
            <p className="whitespace-nowrap">
              CNPJ: 50.081.980.0001-72
            </p>
          </div>
          
          <p className="whitespace-nowrap mt-2 md:mt-0">
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
      </footer>
    </div>
  );
}