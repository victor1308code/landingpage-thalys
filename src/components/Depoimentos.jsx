import React from 'react';
import { Quote, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import './Depoimentos.css';

export default function Depoimentos() {
  const googleSearchUrl = "https://www.google.com/search?q=Dr.+Thalys+Carvalho+Layber";

  const depoimentosData = [
    {
      stars: 5,
      text: "A teleconsulta com o Dr. Thalys superou todas as expectativas. Muito pontual, atencioso e me ouviu com calma por quase uma hora. Explicou cada detalhe dos meus exames de sangue e das orientações médicas. Excelente profissional!",
      author: "Marcos Vinícius S.",
      info: "Teleconsulta • Check-up & Exames",
      platform: "Google Avaliações"
    },
    {
      stars: 5,
      text: "Profissional extremamente humano, técnico e acolhedor. Investigou uma queixa de cansaço e dores que nenhum outro médico havia dado a devida atenção. A consulta particular online vale cada centavo pelo nível de dedicação e clareza.",
      author: "Ana Beatriz C.",
      info: "Teleconsulta • Investigação Clínica",
      platform: "Doctoralia"
    },
    {
      stars: 5,
      text: "Excelente atendimento! Fiz a avaliação pré-operatória e o acompanhamento das minhas taxas com ele. Muito seguro, atualizado e prestativo no esclarecimento de dúvidas. Recomendo de olhos fechados para quem busca um clínico de confiança.",
      author: "Ricardo M. de Oliveira",
      info: "Teleconsulta • Risco Cirúrgico & Prevenção",
      platform: "Google Avaliações"
    }
  ];

  return (
    <section id="depoimentos" className="depoimentos-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <div className="trust-badge-pill">
            <span className="google-g">G</span>
            <span className="stars-mini">⭐⭐⭐⭐⭐</span>
            <span className="trust-score">5.0 no Google & Doctoralia</span>
          </div>
          <h2>A Opinião dos Nossos Pacientes</h2>
          <p>O cuidado humanizado e a excelência técnica refletidos na experiência de quem confia no Dr. Thalys.</p>
        </div>

        <div className="depoimentos-grid">
          {depoimentosData.map((depoimento, index) => (
            <div 
              key={index} 
              className={`depoimento-card scroll-reveal reveal-up delay-${index + 1}`}
            >
              <div className="depoimento-card-top">
                <Quote className="quote-icon" />
                <span className="platform-tag">
                  <ShieldCheck size={14} className="verified-icon" />
                  {depoimento.platform}
                </span>
              </div>

              <div className="rating-stars">
                {[...Array(depoimento.stars)].map((_, i) => (
                  <Star key={i} size={17} className="star-icon" fill="var(--color-accent)" />
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

        {/* Botão de Redirecionamento para Avaliações no Google */}
        <div className="depoimentos-google-cta scroll-reveal reveal-up delay-4">
          <a 
            href={googleSearchUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-google-reviews"
          >
            <span>Ver perfil e avaliações no Google & Doctoralia</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
