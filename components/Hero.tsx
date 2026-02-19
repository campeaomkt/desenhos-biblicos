import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-br from-green-500 to-green-700">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <div className="inline-block bg-yellow-400 text-green-900 px-4 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-widest shadow-lg animate-pulse">
                Oportunidade Única de Formação Espiritual
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Proteja o Futuro de Quem Você Ama: <span className="text-yellow-300 underline decoration-yellow-300">Troque as Telas</span> pela Palavra.
            </h1>

            <p className="text-xl md:text-2xl text-green-50 mb-8 font-light leading-relaxed">
                As telas estão roubando a atenção e os valores dos nossos filhos. Resgate o tempo em família com o <span className="font-bold">Kit Crescendo com Cristo</span>: 200+ atividades que ensinam princípios bíblicos de forma divertida.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8 inline-block lg:block">
                <p className="text-sm uppercase font-semibold text-green-100 mb-2">Preço Promocional Exclusivo</p>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="text-2xl line-through text-red-300 opacity-80">De R$ 97,00</span>
                    <span className="text-5xl font-black text-yellow-300">Por R$ 17,00</span>
                </div>
                <p className="text-xs mt-2 text-green-200">*Pagamento único. Acesso vitalício. Garantia de 7 dias.</p>
            </div>

            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-green-400 hover:bg-green-300 text-green-900 font-black text-xl md:text-2xl py-5 px-10 rounded-2xl shadow-[0_10px_0_0_rgba(22,101,52,1)] transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none mb-6"
            >
                QUERO O ACESSO AGORA!
            </button>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 group">
                <img 
                    src="/imagens/hero.webp" 
                    alt="Jesus com crianças" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

               {/* Prova Social Encostada embaixo */}
<div className="
    absolute 
    bottom-2 left-1/2 -translate-x-1/2
    w-[75%] max-w-[260px]
    lg:left-4 lg:translate-x-0 lg:bottom-4 lg:w-auto lg:max-w-none
    bg-white/95 backdrop-blur-md
    p-2 lg:p-4
    rounded-xl
    flex items-center gap-2
    shadow-lg
">
    <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-sm lg:text-2xl">
        <i className="fas fa-check"></i>
    </div>
    <div>
        <p className="font-bold text-xs lg:text-base text-gray-800 leading-tight">
            +35.000 Famílias
        </p>
        <p className="text-[10px] lg:text-xs text-gray-500">
            Impactadas no Brasil
        </p>
    </div>
</div>

            </div>

            {/* Playful element (garantido visível) */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold text-center leading-none text-sm -rotate-12 shadow-xl border-4 border-white z-20">
                PDF<br/>PRONTO
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
