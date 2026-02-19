
import React, { useState } from 'react';
import { getSpiritualLesson } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [age, setAge] = useState(5);
  const [topic, setTopic] = useState('Obediência');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const lesson = await getSpiritualLesson(age, topic);
    setResult(lesson);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border-4 border-yellow-400 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold text-sm shadow-md flex items-center gap-2">
            <i className="fas fa-robot"></i> ASSISTENTE IA DE FÉ
          </div>

          <h3 className="text-2xl font-black text-gray-800 mb-4 mt-4">
            Deseja uma amostra do que ensinar hoje?
          </h3>
          <p className="text-gray-600 mb-8">
            Nossa Inteligência Artificial sugere uma atividade rápida baseada na idade do seu filho e em um tema bíblico.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Idade da Criança</label>
              <select 
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {[3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} anos</option>)}
              </select>
            </div>
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Tema Desejado</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ex: Amor, Perdão, Jonas..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-green-200 disabled:opacity-50"
          >
            {loading ? <i className="fas fa-spinner fa-spin mr-2"></i> : <i className="fas fa-sparkles mr-2"></i>}
            GERAR IDEIA DE ATIVIDADE
          </button>

          {result && (
            <div className="mt-8 p-6 bg-green-50 rounded-2xl text-left border border-green-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                <i className="fas fa-lightbulb"></i> Sugestão para hoje:
              </h4>
              <p className="text-gray-700 italic text-sm leading-relaxed whitespace-pre-wrap">{result}</p>
            </div>
          )}

          <div className="mt-8 text-xs text-gray-400 flex items-center justify-center gap-2">
            <i className="fas fa-info-circle"></i> No Kit completo você encontra mais de 200 atividades como esta!
          </div>
        </div>
      </div>
    </section>
  );
};
