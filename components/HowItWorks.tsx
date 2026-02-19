
import React from 'react';

const steps = [
  {
    icon: 'fas fa-envelope-open-text',
    title: 'Chega no E-mail',
    desc: 'Após a confirmação do pagamento, você recebe os dados de acesso instantaneamente no seu e-mail cadastrado.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: 'fas fa-print',
    title: 'Pode Imprimir',
    desc: 'O material está em formato PDF de alta qualidade. Você pode imprimir quantas vezes quiser para seu filho ou alunos.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: 'fas fa-smile-beam',
    title: 'Hora da Diversão',
    desc: 'Pronto! Agora é só colocar em prática. Atividades lúdicas que ensinam valores bíblicos para a vida toda.',
    color: 'bg-yellow-100 text-yellow-600'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
            Simples, Prático e Educativo
          </h2>
          <p className="text-gray-600 text-lg">
            Criamos uma jornada de aprendizado pensada para facilitar a vida dos pais e maximizar o interesse das crianças.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                <i className={step.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              <div className="absolute top-4 right-8 text-6xl font-black text-gray-50 -z-10">0{idx + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
