import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Como funciona a teleconsulta médica online com o Dr. Thalys?",
      answer: "A teleconsulta é realizada através de uma plataforma segura e confidencial em vídeo. No dia e horário agendados, você acessa o link enviado diretamente no seu WhatsApp ou e-mail. A consulta dura o tempo necessário para uma escuta atenta, detalhamento do seu histórico, análise de queixas e elaboração do plano diagnóstico ou de tratamento."
    },
    {
      question: "As receitas médicas, atestados e pedidos de exames digitais são aceitos em todo o Brasil?",
      answer: "Sim! Todos os documentos médicos emitidos pelo Dr. Thalys contam com assinatura digital certificada pelo padrão ICP-Brasil (com QR Code de validação). Eles têm validade jurídica plena e são aceitos em qualquer farmácia (inclusive para medicamentos de controle especial), laboratório de análises clínicas e operadora de saúde em todo o território nacional."
    },
    {
      question: "O Dr. Thalys aceita convênios ou planos de saúde?",
      answer: "Os atendimentos são exclusivamente particulares. Isso garante tempo dedicado, escuta atenta e sem pressa para cada paciente, proporcionando uma avaliação clínica integral e acompanhamento médico personalizado."
    },
    {
      question: "Quais queixas ou sintomas posso avaliar por teleconsulta?",
      answer: "A telemedicina em Clínica Médica é indicada para check-up preventivo, interpretação minuciosa de exames de sangue e imagem, investigação de fadiga, dores de cabeça ou abdominais, palpitações, febre, sintomas respiratórios, controle contínuo de pressão alta, diabetes, colesterol e avaliação de risco cirúrgico pré-operatório."
    },
    {
      question: "O que preciso preparar para a minha teleconsulta?",
      answer: "Recomendamos estar em um ambiente silencioso com boa conexão de internet. Tenha em mãos seus exames mais recentes (feitos nos últimos 6 a 12 meses) e uma lista com as medicações e suplementos de uso contínuo com as dosagens."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>FAQ</span>
          <h2>Dúvidas Frequentes sobre Telemedicina</h2>
          <p>Tudo o que você precisa saber sobre as consultas online e emissão de documentos digitais.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item scroll-reveal reveal-up delay-${index + 1} ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  {isOpen ? <ChevronUp size={20} className="faq-arrow" /> : <ChevronDown size={20} className="faq-arrow" />}
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
