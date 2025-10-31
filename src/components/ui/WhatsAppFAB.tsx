// src/components/ui/WhatsAppFAB.tsx

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone oficial
import { Button } from '@/components/ui/button'; // Usando seu Button padronizado

// URL do WhatsApp (Use o link direto de agendamento que você já tem)
const WHATSAPP_URL = "https://wa.me/5585981773376?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20orçamento.";

export function WhatsAppFAB() {
    return (
        // ⚠️ POSICIONAMENTO FIXO: fixed para flutuar, bottom-4 e right-4 para o canto
        <div className="fixed bottom-4 right-4 z-50">
            <Button
                // Usando a variação de tamanho para ícone e cores vibrantes
                size="icon" 
                className="bg-green-500 hover:bg-green-600 size-12 rounded-full shadow-lg transition-transform hover:scale-105"
                asChild
            >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
                    {/* Ícone do WhatsApp grande */}
                    <FaWhatsapp className="size-8 text-white" />
                </a>
            </Button>
        </div>
    );
}