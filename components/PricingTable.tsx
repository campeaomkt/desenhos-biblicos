import React from 'react';

export const PricingTable: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
              NÃO PERCA MAIS TEMPO!
            </h2>
            <p className="text-yellow-400 text-xl font-bold">
              Últimas unidades com valor promocional de lançamento.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border-4 border-green-500">
            
            {/* Banner superior */}
            <div className="absolute top-0 left-0 right-0 bg-green-500 text-white py-4 text-center font-black text-lg md:text-xl uppercase tracking-widest">
              Plano Completo: Super Oferta
            </div>

            <div className="mt-20 md:mt-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">

                {/* Benefits List */}
                <div className="md:w-3/5 space-y-4">
                  {[
                    { text: '200+ Atividades Bíblicas', detail: 'Leve o material para divertir seu pequeno enquanto aprende o que é eterno;' },
                    { text: 'BÔNUS #1: Alfabeto Bíblico;', icon: '🎁' },
                    { text: 'BÔNUS #2: Andando com Jesus;', icon: '🎁' },
                    { text: 'BÔNUS #3: Complete o Nome dos Animais;', icon: '🎁' },
                    { text: 'ACESSO VITALÍCIO;', icon: '♾️' },
                    { text: '7 DIAS DE GARANTIA INCONDICIONAL.', icon: '🛡️' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start group">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <i className="fas fa-check text-xs"></i>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 leading-tight">
                          {item.icon && <span className="mr-2">{item.icon}</span>}
                          {item.text}
                        </p>
                        {item.detail && (
                          <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Box */}
                <div className="md:w-2/5 w-full">
                  <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 text-center flex flex-col items-center justify-center shadow-inner">
                    
                    <p className="text-gray-400 font-bold line-through mb-1">
                      VALOR TOTAL: R$ 97,00
                    </p>

                    <p className="text-gray-800 font-medium mb-4">
                      Pagamento único de:
                    </p>

                    <p className="text-green-600 text-7xl font-black mb-4">
                      R$ 17
                    </p>

                    <p className="text-green-600 font-bold text-xl mb-6">
                      À VISTA
                    </p>

                    <p className="text-xs text-gray-400 italic mb-8">
                      Ou em até 3x de R$ 6,00*
                    </p>
                    
                    <a
                      href="https://pay.kiwify.com.br/4iba5h0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full block bg-green-500 hover:bg-green-600 text-white font-black text-xl py-6 rounded-2xl shadow-xl transition-all transform hover:scale-105 uppercase tracking-widest active:scale-95 text-center"
                    >
                      Quero Aproveitar!
                    </a>

                  </div>
                </div>

              </div>
            </div>

            {/* Guarantee and Security */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-gray-100 pt-8">
              
              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/color/48/guarantee.png"
                  alt="Garantia"
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <p className="font-bold text-sm text-gray-800">
                    7 Dias de Garantia
                  </p>
                  <p className="text-xs text-gray-500">
                    Satisfação ou seu dinheiro de volta.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src="https://img.icons8.com/color/48/lock.png"
                  alt="Seguro"
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <p className="font-bold text-sm text-gray-800">
                    Pagamento 100% Seguro
                  </p>
                  <p className="text-xs text-gray-500">
                    Seus dados protegidos por criptografia.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-8 text-sm">
            APROVEITE AGORA: Você <span className="text-red-400 font-bold">NÃO</span> vai encontrar esse preço depois.
          </p>
        </div>
      </div>
    </section>
  );
};
