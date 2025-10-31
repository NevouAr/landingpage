import { Menu } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { label: 'INÍCIO', hrefId: 'inicio' },
  { label: 'SERVIÇOS', hrefId: 'servicos' }, 
  { label: 'DEPOIMENTOS', hrefId: 'depoimentos' },
  { label: 'FAQ', hrefId: 'faq' }
];

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-6 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Image 
                src="/images/logo.png" 
                alt="NEVOU Logo" 
                
                // ⚠️ CORREÇÃO APLICADA AQUI
                // w-[120px] é o tamanho Mobile (padrão)
                // md:w-[207.8px] é o tamanho Desktop
                className="w-[120px] h-auto md:w-[207.8px]" 
                
                // Definimos o tamanho máximo para que a otimização funcione
                width={208} 
                height={62} 
                priority 
            />
        </div>

        <nav className="hidden sm:flex space-x-6 text-sm font-semibold tracking-wider">
          {navLinks.map((link) => (
            <a 
              key={link.hrefId}
              href={`#${link.hrefId}`}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sm:hidden">
          <Sheet> 
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-950 text-white border-none text-center p">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.hrefId} 
                    href={`#${link.hrefId}`}
                    className="text-lg font-medium hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}