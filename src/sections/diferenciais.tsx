import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const diferenciaisData = [
  {
    imageSrc: '/images/selo.png',
    title: "Técnicos especializados e certificados"
  },
  {
    imageSrc: '/images/wpp.png',
    title: "Suporte no Whatsapp"
  }
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-16">
          Nossos diferenciais
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diferenciaisData.map((item, index) => (
            <Card key={index} className="bg-white rounded-xl p-8 shadow-2xl h-full">
              <CardContent className="p-0 flex flex-col items-center justify-center h-full">
                <div className="mb-6">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    width={101.6}
                    height={119.2}
                    className="w-28 h-28"
                  />
                </div>
                
                <p className="text-lg font-extrabold text-gray-900">
                  {item.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}