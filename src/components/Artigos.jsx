import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './Artigos.css';

export default function Artigos() {
  const artigosData = [
    {
      category: "Prevenção",
      title: "A Importância do Check-up Anual: Cuidado Silencioso",
      description: "Entenda por que a realização periódica de exames de rotina é a ferramenta mais eficaz para detectar alterações precocemente e garantir qualidade de vida a longo prazo.",
      date: "14 Ago, 2026"
    },
    {
      category: "Estilo de Vida",
      title: "Hábitos Práticos para Aumentar sua Vitalidade Diária",
      description: "Descubra como pequenas intervenções na sua rotina de sono, hidratação e movimentos podem impulsionar drasticamente seu foco, produtividade e bem-estar geral.",
      date: "10 Ago, 2026"
    },
    {
      category: "Saúde Integral",
      title: "Hipertensão Arterial: O Inimigo Silencioso no Dia a Dia",
      description: "Saiba por que a pressão alta raramente apresenta sintomas aparentes e conheça as principais formas de controle clínico e comportamental sugeridas por especialistas.",
      date: "05 Ago, 2026"
    }
  ];

  return (
    <section id="artigos" className="artigos-section">
      <div className="container">
        <div className="section-header scroll-reveal reveal-down">
          <span>BLOG & ARTIGOS</span>
          <h2>Artigos sobre Saúde e Bem-estar</h2>
          <p>Conteúdos informativos elaborados para auxiliar você a entender melhor o seu corpo e hábitos.</p>
        </div>

        <div className="artigos-grid">
          {artigosData.map((artigo, index) => (
            <article 
              key={index} 
              className={`artigo-card scroll-reveal reveal-up delay-${index + 1}`}
            >
              <div className="artigo-meta">
                <span className="artigo-category">{artigo.category}</span>
                <span className="artigo-date">
                  <Calendar size={14} />
                  {artigo.date}
                </span>
              </div>
              <h3 className="artigo-title">{artigo.title}</h3>
              <p className="artigo-desc">{artigo.description}</p>
              <span className="artigo-readmore">
                Ler Artigo Completo
                <ArrowRight size={16} className="arrow-icon" />
              </span>
            </article>
          ))}
        </div>

        <div className="artigos-more scroll-reveal reveal-up delay-4">
          <button className="btn btn-secondary">Ver Mais Artigos</button>
        </div>
      </div>
    </section>
  );
}
