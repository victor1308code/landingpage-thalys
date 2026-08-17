import React from 'react';
import { Calendar, ArrowRight, MessageSquare, BookOpenCheck } from 'lucide-react';
import './Artigos.css';

export default function Artigos() {
  const whatsappNumber = '5521983140249';
  const whatsappMessage = encodeURIComponent('Olá, Dr. Thalys! Li os artigos no seu site e gostaria de agendar uma teleconsulta.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const artigosData = [
    {
      category: "Prevenção & Check-up",
      title: "Check-up Anual: Por que exames de rotina salvam vidas silenciosamente?",
      description: "Muitas alterações metabólicas, como diabetes inicial e alterações de tireoide ou colesterol, não apresentam nenhum sintoma no começo. Descubra a importância da investigação clínica periódica.",
      date: "14 Ago, 2026"
    },
    {
      category: "Estilo de Vida & Energia",
      title: "Cansaço Constante e Esgotamento: Quando procurar um Clínico Geral?",
      description: "Acordar cansado e sem disposição nem sempre é apenas estresse. Anemia, alterações hormonais, deficiência de vitaminas e distúrbios do sono devem ser investigados minuciosamente.",
      date: "10 Ago, 2026"
    },
    {
      category: "Saúde Cardiovascular",
      title: "Hipertensão Arterial: O que fazer diante de picos de pressão e tonturas?",
      description: "A pressão alta é um dos principais fatores de risco para a saúde do coração e dos rins. Entenda como o acompanhamento clínico contínuo e personalizado garante longevidade e proteção.",
      date: "05 Ago, 2026"
    }
  ];

  return (
    <section id="artigos" className="artigos-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>BLOG & CONTEÚDOS</span>
          <h2>Artigos sobre Saúde & Bem-estar</h2>
          <p>Orientações médicas e conteúdos baseados em evidências para você cuidar melhor da sua saúde.</p>
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

        {/* CTA Intermediário Estratégico dentro da Seção de Artigos */}
        <div className="artigos-inline-cta scroll-reveal reveal-up delay-4">
          <div className="cta-icon-box">
            <BookOpenCheck size={28} className="cta-gold-icon" />
          </div>
          <div className="cta-text-box">
            <h4>Apresenta algum desses sintomas ou deseja realizar seu check-up preventivo?</h4>
            <p>Agende sua teleconsulta particular e tire todas as suas dúvidas com o Dr. Thalys com total comodidade.</p>
          </div>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary cta-btn-schedule"
          >
            <MessageSquare size={18} />
            Agendar Teleconsulta
          </a>
        </div>

      </div>
    </section>
  );
}
