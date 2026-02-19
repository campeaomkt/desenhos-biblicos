
import React from 'react';

const bonusList = [
  {
    title: 'Alfabeto Bíblico',
    desc: 'Ensina o alfabeto de A a Z com personagens e versículos bíblicos marcantes.',
    value: 'R$ 17,00',
    img: 'imagens/capa_bonus_1.webp',
    id: 1
  },
  {
    title: 'Andando com Jesus',
    desc: 'Um livro lúdico que conta a história da vida de Cristo, do nascimento à ressurreição.',
    value: 'R$ 27,00',
    img: 'imagens/capa_bonus_2.webp',
    id: 2
  },
  {
    title: 'Nome dos Animais',
    desc: 'Interatividade onde as crianças descobrem os nomes dos animais criados por Deus.',
    value: 'R$ 17,00',
    img: 'imagens/capa_bonus_3.webp',
    id: 3
  }
];

export const Bonuses: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-xs font-black uppercase mb-4 tracking-widest">
            Presente Especial
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Adquirindo HOJE, <span className="text-green-600">Ganha 3 Bônus Extras!</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Estes bônus complementam o aprendizado e custariam R$ 61,00 se comprados separadamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {bonusList.map((bonus) => (
            <div key={bonus.id} className="relative bg-gray-50 rounded-3xl p-6 border border-gray-100 flex flex-col items-center text-center group">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold py-1 px-4 rounded-xl shadow-lg z-20 group-hover:scale-110 transition-transform">
                GRÁTIS
              </div>
              <img src={bonus.img} alt={bonus.title} className="w-48 h-auto rounded-xl shadow-xl mb-6 transform group-hover:rotate-2 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">#BÔNUS {bonus.id}</h3>
              <p className="text-green-600 font-bold mb-4">{bonus.title}</p>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{bonus.desc}</p>
              <div className="text-sm font-bold text-gray-400 line-through">VALOR TOTAL: {bonus.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
