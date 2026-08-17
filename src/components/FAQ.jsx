import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Como funciona a consulta com Clínico Geral?",
      answer: "A consulta é um momento de escuta detalhada. O clínico geral avalia seu histórico familiar, queixas atuais, hábitos, sono e saúde mental. Realiza-se um exame físico minucioso e, a partir disso, são traçados planos de investigação laboratorial, tratamento ou prevenção personalizada."
    },
    {
      question: "O Dr. Thalys aceita convênios ou planos de saúde?",
      answer: "O atendimento é exclusivamente particular. Isso garante tempo adequado de consulta para um acolhimento profundo. Fornecemos nota fiscal detalhada e relatório médico para que você solicite o reembolso (integral ou parcial) junto ao seu plano de saúde."
    },
    {
      question: "Como funciona a solicitação de reembolso?",
      answer: "Após a consulta, emitimos a nota fiscal do serviço médico. Você envia essa nota e, se necessário, o relatório médico que fornecemos pelo aplicativo do seu convênio. O plano de saúde realiza o reembolso direto na sua conta, conforme as normas do seu plano."
    },
    {
      question: "O que preciso levar para a primeira consulta?",
      answer: "Recomendamos levar seus exames de sangue ou de imagem mais recentes (feitos nos últimos 6 meses) e uma lista com os medicamentos e suplementos que toma continuamente com as respectivas dosagens."
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
          <h2>Dúvidas Frequentes</h2>
          <p>Encontre respostas rápidas para as principais dúvidas sobre consultas, exames e agendamentos.</p>
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
