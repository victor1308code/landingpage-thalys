import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  Share2, 
  ChevronRight,
  Stethoscope,
  Building2,
  GraduationCap
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import doctorPhoto from '../assets/images/doctor-about-clean-cutout.png';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import { artigosData } from '../data/artigosData';
import './ArtigoDetalhe.css';

export default function ArtigoDetalhe({ slug, onBack, onSelectArtigo }) {
  const artigo = artigosData.find(a => a.slug === slug) || artigosData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const whatsappNumber = '5521983140249';
  const whatsappMessage = encodeURIComponent(`Olá, Dr. Thalys! Li seu artigo sobre "${artigo.title}" e gostaria de agendar uma consulta.`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Filtrar outros 2 artigos relacionados
  const relatedArtigos = artigosData
    .filter(a => a.slug !== artigo.slug)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${artigo.title} - Dr. Thalys Layber`,
        text: artigo.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link do artigo copiado para a área de transferência!');
    }
  };

  return (
    <article className="artigo-detalhe-page">
      {/* Background ambient lighting effects */}
      <div className="artigo-bg-glow-gold"></div>
      <div className="artigo-bg-glow-blue"></div>

      {/* Main Article Content Container */}
      <div className="container artigo-main-container">
        
        {/* Seamless Top Navigation Row */}
        <div className="artigo-nav-row">
          <button 
            type="button" 
            onClick={onBack} 
            className="artigo-back-btn"
            aria-label="Voltar para a lista de artigos"
          >
            <ArrowLeft size={18} />
            <span>Voltar aos Artigos</span>
          </button>

          <nav className="artigo-breadcrumbs" aria-label="Navegação estrutural">
            <span onClick={onBack} className="crumb-link">Início</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span onClick={onBack} className="crumb-link">Blog</span>
            <ChevronRight size={14} className="crumb-sep" />
            <span className="crumb-current">{artigo.category}</span>
          </nav>

          <button 
            type="button" 
            onClick={handleShare} 
            className="artigo-share-btn"
            title="Compartilhar artigo"
          >
            <Share2 size={16} />
            <span>Compartilhar</span>
          </button>
        </div>

        {/* Article Headline Header */}
        <div className="artigo-title-block">
          <div className="artigo-top-tags">
            <span className="artigo-category-tag">{artigo.category}</span>
            <span className="artigo-read-time">
              <Clock size={14} />
              {artigo.readTime}
            </span>
          </div>

          <h1 className="artigo-main-title">{artigo.title}</h1>
          <p className="artigo-main-subtitle">{artigo.subtitle}</p>

          {/* Author Strip */}
          <div className="artigo-author-strip">
            <div className="author-avatar-badge">
              <img 
                src={logoEmblem} 
                alt="Dr. Thalys Layber Emblema" 
                className="author-emblem-mini"
              />
            </div>
            <div className="author-meta-info">
              <div className="author-name-row">
                <strong>Dr. Thalys Carvalho Layber</strong>
                <span className="author-crm-pill">CRM-RJ 1300210</span>
              </div>
              <span className="author-residency-text">
                Médico Clínico Geral • Residente de Clínica Médica no Hospital Universitário Gaffrée e Guinle (UNIRIO)
              </span>
            </div>
            <div className="artigo-date-box">
              <Calendar size={14} />
              <span>{artigo.date}</span>
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="artigo-content-body">
          
          {/* Lead Intro Paragraph */}
          <p className="artigo-lead-text">{artigo.intro}</p>

          {/* Dynamic Sections */}
          {artigo.sections.map((sec, sIdx) => (
            <section key={sIdx} className="artigo-body-section">
              <h2 className="artigo-section-heading">{sec.heading}</h2>
              
              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="artigo-paragraph">{p}</p>
              ))}

              {/* Bulleted List */}
              {sec.list && (
                <ul className="artigo-bullet-list">
                  {sec.list.map((item, lIdx) => (
                    <li key={lIdx}>
                      <CheckCircle2 size={18} className="list-check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Callout Box */}
              {sec.callout && (
                <div className={`artigo-callout-box callout-${sec.callout.type}`}>
                  <div className="callout-header">
                    {sec.callout.type === 'warning' ? (
                      <AlertTriangle size={22} className="callout-icon-warning" />
                    ) : (
                      <Info size={22} className="callout-icon-info" />
                    )}
                    <strong>{sec.callout.title}</strong>
                  </div>
                  {sec.callout.text && (
                    <p className="callout-desc">{sec.callout.text}</p>
                  )}
                  {sec.callout.items && (
                    <ul className="callout-items-list">
                      {sec.callout.items.map((cItem, cIdx) => (
                        <li key={cIdx}>{cItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </section>
          ))}

          {/* In-Article WhatsApp CTA Box */}
          <div className="artigo-intext-cta">
            <div className="cta-icon-aura">
              <WhatsAppIcon size={32} />
            </div>
            <div className="cta-text-side">
              <h3>{artigo.ctaText}</h3>
              <p>Consultas online detalhadas, escuta atenta e conduta fundamentada em evidências científicas.</p>
            </div>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-artigo-whatsapp"
            >
              <WhatsAppIcon size={20} />
              {artigo.ctaButton}
            </a>
          </div>

          {/* Author Box / Card Final do Médico */}
          <div className="artigo-author-box">
            <div className="author-photo-column">
              <img 
                src={doctorPhoto} 
                alt="Dr. Thalys Carvalho Layber" 
                className="author-bio-photo"
              />
            </div>
            <div className="author-bio-column">
              <span className="author-box-label">SOBRE O AUTOR</span>
              <h3 className="author-box-name">Dr. Thalys Carvalho Layber</h3>
              <p className="author-box-role">
                Médico Clínico Geral • CRM-RJ 1300210
              </p>
              <p className="author-box-desc">
                Formado pela <strong>Faculdade de Ciências Médicas e da Saúde de Juiz de Fora (FCMS-JF / SUPREMA)</strong> e médico residente do 2º ano de Clínica Médica no <strong>Hospital Universitário Gaffrée e Guinle (UNIRIO)</strong>. Atua com medicina baseada em evidências, prevenção e acolhimento humanizado em telemedicina para todo o Brasil.
              </p>
              <div className="author-box-badges">
                <span className="bio-pill">
                  <Building2 size={14} />
                  Residência Clínica Médica UNIRIO
                </span>
                <span className="bio-pill">
                  <GraduationCap size={14} />
                  1º Lugar em Pesquisa Científica
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Related Articles Section */}
        <section className="artigo-related-section">
          <div className="related-header">
            <span className="related-tag">CONTINUE LENDO</span>
            <h2 className="related-title">Artigos Recomendados</h2>
          </div>

          <div className="related-grid">
            {relatedArtigos.map((relArtigo) => (
              <div 
                key={relArtigo.slug} 
                className="related-card"
                onClick={() => onSelectArtigo(relArtigo.slug)}
              >
                <span className="related-card-category">{relArtigo.category}</span>
                <h3 className="related-card-title">{relArtigo.title}</h3>
                <p className="related-card-summary">{relArtigo.summary}</p>
                <div className="related-card-footer">
                  <span className="related-card-link">
                    Ler Artigo Completo
                    <ChevronRight size={16} />
                  </span>
                  <span className="related-read-time">{relArtigo.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}
