// src/components/sections/FAQSection.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: "Vocês instalam todos os tipos de ar-condicionado?",
    answer: "Sim! Trabalhamos com modelos split, cassete e piso teto."
  },
  {
    question: "Fazem atendimento residencial e comercial?",
    answer: "Sim, atendemos ambos! Nossa equipe é estruturada para oferecer soluções personalizadas, desde a climatização de residências e apartamentos até grandes projetos de climatização comercial."
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer: "Em média, a instalação completa de um aparelho do zero leva de 3 a 4 horas. Nossa equipe trabalha com rapidez e eficiência, seguindo todos os padrões técnicos para garantir que você tenha seu ar-condicionado com total eficiência e rendimento."
  },
  {
    question: "Com que frequência devo fazer manutenção?",
    answer: "A manutenção preventiva é essencial e deve ser feita de forma personalizada. Regra Geral: Recomendamos a cada 6 meses em residências e 3 meses em empresas. No entanto, dependendo do tipo e da demanda da sua empresa (uso intenso ou ambientes críticos), a preventiva pode ser necessária até mensalmente. Consulte nosso técnico para um plano ideal."
  },
  {
    question: "Oferecem garantia?",
    answer: "Sim, oferecemos garantia total de 3 meses em todos os serviços de instalação. Isso assegura a qualidade do nosso trabalho e a sua tranquilidade após a conclusão do serviço."
  },
];

export function FAQSection() {

  return (
    <section id="faq" className="py-20 mb-20"> 
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-1">

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-none rounded-lg shadow-md overflow-hidden" 
            >
              
              <AccordionTrigger 
                className="bg-faq-gradient text-white font-extrabold text-2xl px-6 py-6 transition-colors rounded-t-lg"
              >
                {item.question}
              </AccordionTrigger>
              
              <AccordionContent 
                className="bg-[#5694BD] text-white px-6 py-4 border-t border-blue-200 rounded-b-lg text-xl font-bold "
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}