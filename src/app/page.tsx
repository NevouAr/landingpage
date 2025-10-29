// src/app/page.tsx

import { Navbar } from '@/components/ui/Navbar';
import { TopBlock } from '@/sections/TopBlock';
import { MiddleBlock } from '@/sections/MiddleBlock';
import { BottomBlock } from '@/sections/BottomBlock'; 


import { Footer } from '@/sections/footer1'; 

export default function Home() {
  return (
    <div>
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
      <footer className="bg-[#62bfff] text-white text-center py-4 text-xl ">
        © {new Date().getFullYear()} NEVOU. Todos os direitos reservados.
      </footer>
    </div>
  );
}