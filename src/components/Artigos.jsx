import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { artigosData } from '../data/artigosData';
import './Artigos.css';

export default function Artigos({ onSelectArtigo }) {
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
              {/* Cover Image */}
              <div className="artigo-card-cover">
                <img 
                  src={artigo.image} 
                  alt={artigo.title} 
                  className="artigo-cover-img"
                  loading="lazy"
                />
                <div className="artigo-cover-overlay"></div>
                <div className="artigo-cover-badges">
                  <span className="artigo-category-pill">{artigo.category}</span>
                  <span className="artigo-read-pill">
                    <Clock size={12} />
                    {artigo.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="artigo-card-content">
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
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
