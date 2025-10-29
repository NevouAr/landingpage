// src/sections/TopBlock.tsx

import { HeroSection } from '@/sections/HeroSection'; 
import { Services } from '@/sections/services';
import { Diferenciais } from '@/sections/diferenciais';
import { LogoCarousel } from '@/sections/logoCarousel';

export function TopBlock() {
    return (
        // ⚠️ SOLUÇÃO: Retornar um único DIV como wrapper principal
        <div className="top-block-wrapper"> 
            <HeroSection />
            <Services />
            <Diferenciais />
            <LogoCarousel />
        </div>
    );
}