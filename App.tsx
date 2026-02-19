import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { KitContent } from './components/KitContent';
import { Bonuses } from './components/Bonuses';
import { PricingTable } from './components/PricingTable';
import { Summary } from './components/Summary';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Hero />
      <HowItWorks />
      <KitContent />

      <div className="py-12 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
                Pronto para transformar a educação do seu pequeno?
            </h2>
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-extrabold text-2xl py-6 px-12 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider"
            >
                Quero o Kit Agora!
            </button>
        </div>
      </div>

      <Bonuses />
      <PricingTable />
      <Summary />
      <FAQ />
      <Footer />

      {/* Sticky CTA for Mobile/Desktop */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50 transition-all duration-300 transform ${showStickyBtn ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:block">
                <p className="text-xs text-gray-500 uppercase font-bold">Oferta por tempo limitado</p>
                <p className="text-lg font-bold text-green-600">Apenas R$ 17,00</p>
            </div>
            <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors text-center"
            >
                APROVEITAR AGORA <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default App;
