
import React from 'react';

const books = [
  { img: 'imagens/capa_atividades_biblicas.webp', title: 'Atividades Bíblicas', tag: 'LIVRO 1' },
  { img: 'imagens/capa_aprendendo_com_alegria.webp', title: 'Aprendendo com Alegria', tag: 'LIVRO 2' },
  { img: 'imagens/capa_passatempos_biblicos.webp', title: 'Passatempos Bíblicos', tag: 'LIVRO 3' },
  { img: 'imagens/capa_pequenos_guerreiros.webp', title: 'Pequenos Guerreiros da Oração', tag: 'LIVRO 4' },
];

const colorBooks = [
  { img: 'imagens/capa_colorindo_versiculos.webp', title: 'Colorindo Versículos', tag: 'ARTE' },
  { img: 'imagens/capa_vida_de_jesus.webp', title: 'A Vida de Jesus', tag: 'ARTE' },
  { img: 'imagens/capa_colorindo_com_proposito.webp', title: 'Colorindo com Propósito', tag: 'ARTE' },
];

export const KitContent: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">O Que Você Irá Receber</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Um acervo completo com mais de 200 páginas de puro conteúdo bíblico, educativo e lúdico.</p>
        </div>

        {/* First Set: Activities */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="text-xl font-bold text-green-600 bg-white px-6 py-2 rounded-full border border-green-100 shadow-sm">4 Livros de Atividades Temáticas</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {books.map((book, i) => (
              <div key={i} className="group cursor-default">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">{book.tag}</div>
                </div>
                <p className="mt-4 text-center font-bold text-gray-700">{book.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Set: Coloring */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h3 className="text-xl font-bold text-blue-600 bg-white px-6 py-2 rounded-full border border-blue-100 shadow-sm">3 Livros de Colorir Interativos</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {colorBooks.map((book, i) => (
              <div key={i} className="group cursor-default">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <img src={book.img} alt={book.title} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">{book.tag}</div>
                </div>
                <p className="mt-4 text-center font-bold text-gray-700">{book.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 border-2 border-dashed border-yellow-200 p-8 rounded-3xl text-center max-w-3xl mx-auto">
            <p className="text-lg font-medium text-yellow-800">
                <i className="fas fa-magic mr-2"></i> São centenas de atividades desenvolvidas por <span className="font-bold underline">Educadores Cristãos</span> para envolver e educar as crianças de forma leve e eficaz.
            </p>
        </div>
      </div>
    </section>
  );
};
