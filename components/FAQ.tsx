
import React, { useState } from 'react';

const faqs = [
  {
    q: "O material é físico ou digital?",
    a: "O Kit é 100% digital em formato PDF. Você receberá o link para download no seu e-mail logo após a confirmação da compra. Isso permite que o preço seja muito baixo e que você possa imprimir as atividades quantas vezes desejar."
  },
  {
    q: "Para qual idade é indicado?",
    a: "O material foi desenvolvido para crianças a partir dos 3 anos até cerca de 10 anos. Temos atividades mais simples (colorir, labirintos) e outras mais avançadas (estudo de versículos e oração)."
  },
  {
    q: "E se eu não gostar?",
    a: "Nós confiamos tanto na qualidade do nosso material que oferecemos uma garantia de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem perguntas."
  },
  {
    q: "Como faço para imprimir?",
    a: "Você pode imprimir em qualquer impressora doméstica comum ou levar em uma gráfica. O material está formatado em tamanho A4, pronto para o uso."
  },
  {
    q: "O acesso expira?",
    a: "Não! O acesso é vitalício. Você pode baixar os arquivos e guardá-los para sempre em seu computador, tablet ou celular."
  }
];

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIdx === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 bg-gray-50/30 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
