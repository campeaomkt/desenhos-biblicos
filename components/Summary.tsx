
import React from 'react';

export const Summary: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">NÃO LEU TUDO? VAMOS RESUMIR PARA VOCÊ...</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 text-lg text-gray-600 leading-relaxed text-center">
            <p>
                Você terá acesso a um material <span className="font-bold text-green-600">exclusivo</span> feito por professores Cristãos para pais e outros professores! São mais de <span className="font-bold">200 atividades Bíblicas</span> prontas para imprimir e utilizar com as crianças a partir dos 3 anos.
            </p>
            
            <div className="bg-green-50 border-2 border-dashed border-green-200 p-8 rounded-3xl relative">
                <i className="fas fa-quote-left absolute -top-4 left-8 text-4xl text-green-200"></i>
                <p className="italic font-medium text-green-800">
                    "A proposta é simples e clara: Você ganha acesso a um material de extrema qualidade e por um preço impossível de recusar."
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-gray-50 rounded-2xl text-left">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="fas fa-clock text-green-500"></i> Em quanto tempo recebo?
                    </h3>
                    <p className="text-sm">Logo após a aprovação do seu pagamento, você irá receber <span className="font-bold">no seu e-mail</span> os seus dados de acesso.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl text-left">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="fas fa-redo text-green-500"></i> Pagamento único?
                    </h3>
                    <p className="text-sm">Sim! O pagamento é único (<span className="font-bold text-red-500">NÃO é mensal</span>). Você paga uma vez e o acesso é para sempre.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
