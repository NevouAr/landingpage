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
            <Image src="/images/logo.png" alt="NEVOU Logo" width={207.8} height={61.2} priority /> 
        </div>

        {/* 1. Menu Desktop (CORRIGIDO) */}
        <nav className="hidden sm:flex space-x-6 text-sm font-semibold tracking-wider">
          {navLinks.map((link) => (
            <a 
                key={link.hrefId} // Usamos hrefId como key (ou label)
                href={`#${link.hrefId}`} // 👈 CORREÇÃO: Usa a propriedade hrefId para o destino
                className="hover:text-blue-400 transition-colors"
            >
              {link.label} {/* 👈 CORREÇÃO: Usa a propriedade label para o texto */}
            </a>
          ))}
        </nav>

        {/* 2. Menu Mobile (Sheet) (CORRIGIDO) */}
        <div className="sm:hidden">
          <Sheet> 
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Menu className="h-6 w-6" />
              </Button></SheetTrigger>
            <SheetContent side="right" className="bg-blue-950 text-white border-none">
              <nav className="flex flex-col space-y-4 pt-8">
                {navLinks.map((link) => (
                  <a 
                        key={link.hrefId} 
                        href={`#${link.hrefId}`} // 👈 CORREÇÃO
                        className="text-lg font-medium hover:text-blue-400 transition-colors"
                    >
                    {link.label} {/* 👈 CORREÇÃO */}
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