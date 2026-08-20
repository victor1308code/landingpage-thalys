import React from 'react';
import { ArrowRight, Clock, Stethoscope, HeartPulse, Brain, Moon, Sparkles, AlertCircle, ShieldAlert } from 'lucide-react';
import { artigosData } from '../data/artigosData';
import './Artigos.css';

export default function Artigos({ onSelectArtigo }) {
  // Ícones representativos para cada categoria
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Cardiologia & Sintomas":
        return <HeartPulse size={20} className="card-category-icon" />;
      case "Saúde Mental & Bem-estar":
        return <Brain size={20} className="card-category-icon" />;
      case "Medicina do Sono & Fadiga":
      case "Qualidade do Sono":
        return <Moon size={20} className="card-category-icon" />;
      case "Gastroenterologia & Sintomas":
        return <AlertCircle size={20} className="card-category-icon" />;
      case "Infectologia & Prevenção":
        return <ShieldAlert size={20} className="card-category-icon" />;
      default:
        return <Stethoscope size={20} className="card-category-icon" />;
    }
  };

  return (
    <section id="artigos" className="artigos-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>BLOG & ORIENTAÇÕES DO MÉDICO</span>
          <h2>Artigos & Condições Clínicas</h2>
          <p>Conteúdos informativos elaborados pelo Dr. Thalys Carvalho Layber sobre sintomas comuns e quando buscar avaliação médica.</p>
        </div>

        <div className="artigos-grid">
          {artigosData.map((artigo, index) => (
            <article 
              key={artigo.id || index} 
              className="artigo-card scroll-reveal reveal-up"
              onClick={() => onSelectArtigo && onSelectArtigo(artigo.slug)}
            >
              <div className="artigo-card-top">
                <div className="artigo-icon-badge">
                  {getCategoryIcon(artigo.category)}
                </div>
                <span className="artigo-read-time-pill">
                  <Clock size={13} />
                  {artigo.readTime}
                </span>
              </div>

              <div className="artigo-meta">
                <span className="artigo-category">{artigo.category}</span>
              </div>

              <h3 className="artigo-title">{artigo.title}</h3>
              
              <p className="artigo-summary-text">
                {artigo.summary}
              </p>

              <div className="artigo-actions">
                <button 
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectArtigo && onSelectArtigo(artigo.slug);
                  }} 
                  className="artigo-saiba-mais-btn"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight size={16} className="btn-arrow-icon" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
