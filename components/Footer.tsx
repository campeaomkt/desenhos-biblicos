
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
        
        <p className="mb-4">Todos os direitos reservados &copy; {new Date().getFullYear()} Crescendo com Cristo</p>
        <p className="text-xs mb-8 text-red-500/60 font-bold uppercase tracking-widest">PIRATARIA É CRIME!</p>

        <div className="max-w-4xl mx-auto border-t border-gray-800 pt-8 text-[10px] leading-relaxed">
            <p className="mb-4">
                ISENÇÃO DE RESPONSABILIDADE IMPORTANTE: Este site não faz parte do site do Facebook ou do Facebook, Inc.
                Além disso, este site não é endossado pelo Facebook de forma alguma. FACEBOOK é uma marca registrada da FACEBOOK, Inc.
            </p>
            <p>
                Os resultados podem variar de pessoa para pessoa. O uso deste material exige dedicação e constância por parte dos responsáveis.
                As imagens são ilustrativas. O produto é entregue em formato digital (PDF).
            </p>
        </div>
      </div>
    </footer>
  );
};
