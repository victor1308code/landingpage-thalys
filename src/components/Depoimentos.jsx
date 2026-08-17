import React from 'react';
import { Quote, Star } from 'lucide-react';
import './Depoimentos.css';

export default function Depoimentos() {
  const depoimentosData = [
    {
      stars: 5,
      text: "O atendimento do Dr. Thalys é impecável. Ele realmente ouve o paciente com calma, investiga tudo com atenção e explica o tratamento de forma clara. Me senti muito acolhido.",
      author: "Marcos Vinícius S.",
      info: "Check-up Geral"
    },
    {
      stars: 5,
      text: "Profissional extremamente humano e atencioso. A consulta particular vale totalmente a pena pelo nível de detalhe, cuidado e pontualidade. Excelente médico clínico.",
      author: "Ana Beatriz C.",
      info: "Acompanhamento Contínuo"
    },
    {
      stars: 5,
      text: "Fiz minha avaliação de risco cirúrgico com ele e depois acabei voltando para fazer meu acompanhamento preventivo. Atencioso, técnico e muito educado.",
      author: "Ricardo M.",
      info: "Risco Cirúrgico e Prevenção"
    }
  ];

  return (
    <section id="depoimentos" className="depoimentos-section">
      <div className="container">
        <div className="section-header scroll-reveal reveal-down">
          <span>DEPOIMENTOS</span>
          <h2>A Opinião dos Pacientes</h2>
          <p>O cuidado humanizado refletido na experiência de quem confia no nosso trabalho.</p>
        </div>

        <div className="depoimentos-grid">
          {depoimentosData.map((depoimento, index) => (
            <div 
              key={index} 
              className={`depoimento-card scroll-reveal reveal-up delay-${index + 1}`}
            >
              <Quote className="quote-icon" />
              <div className="rating-stars">
                {[...Array(depoimento.stars)].map((_, i) => (
                  <Star key={i} size={16} className="star-icon" fill="var(--color-accent)" />
                ))}
              </div>
              <p className="depoimento-text">"{depoimento.text}"</p>
              <div className="depoimento-author">
                <span className="author-name">{depoimento.author}</span>
                <span className="author-info">{depoimento.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
