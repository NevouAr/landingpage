// src/components/Footer1.tsx

import Image from 'next/image';

export function Footer() {
    
    return (
        <footer id="footer" className="bg-footer-gradient text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
                    <div className="text-left text-sm whitespace-nowrap">
                        <p className="font-bold uppercase mb-2">Formas de Pagamento</p>
                        <p className="text-gray-200">Aceitamos Pix, Cartão de Crédito e Débito.</p>
                    </div>
                    <div className="flex space-x-6">                        
                        {/* <a 
                            href="https://facebook.com/seuperfil" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Image 
                                src="/images/facebook.png" 
                                alt="Facebook"
                                width={32} 
                                height={32}
                            />
                        </a> */}
                        <a
                            href="https://www.instagram.com/nevou_arcondicionado/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Image 
                                src="/images/instagram.png"
                                alt="Instagram"
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                    <a href="#inicio">
                        <div className="flex items-center">
                        <Image 
                            src="/images/logo.png"
                            alt="NEVOU Ar Condicionado"
                            width={160} 
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}