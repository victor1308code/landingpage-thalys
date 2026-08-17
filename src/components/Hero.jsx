import React from 'react';
import { MessageSquare, Shield, Mail, ArrowRight } from 'lucide-react';
import doctorTransparent from '../assets/images/doctor-hero-transparent.png';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import './Hero.css';

export default function Hero() {
  const whatsappNumber = '5521983140249';
  const whatsappMessage = encodeURIComponent('Olá, Dr. Thalys! Gostaria de agendar uma consulta.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="hero-section">
      {/* Background ambient lighting effects */}
      <div className="hero-bg-overlay"></div>
      <div className="hero-glow-gold"></div>
      <div className="hero-glow-blue"></div>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Main Title & Brand Block with LARGE TRANSPARENT LOGO on the left */}
          <div className="hero-anim-title">
            <div className="hero-brand-block">
              <img 
                src={logoEmblem} 
                alt="Emblema Dr. Thalys Layber" 
                className="hero-emblem-large"
              />
              <div className="hero-name-block">
                <div className="hero-crm-badge">
                  <Shield size={14} className="badge-shield-icon" />
                  <span>CRM-RJ 1300210</span>
                </div>
                <h1 className="hero-doctor-name">DR. THALYS LAYBER</h1>
                <span className="hero-title-sub">
                  Medicina com <span className="text-gold-gradient">Excelência</span> e Cuidado Humanizado
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle & Highlights (Animation: Left entrance, delay 0.6s) */}
          <div className="hero-anim-subtitle">
            <p className="hero-description">
              Consultas médicas individualizadas focadas na sua saúde integral, prevenção e qualidade de vida. Atendimento particular de clínico geral no Rio de Janeiro e Telemedicina para todo o Brasil.
            </p>
            
            <div className="hero-features">
              <div className="feature-item">
                <span className="bullet"></span>
                <span>Atendimento Particular</span>
              </div>
              <div className="feature-item">
                <span className="bullet"></span>
                <span>Avaliação Integral</span>
              </div>
              <div className="feature-item">
                <span className="bullet"></span>
                <span>Foco em Longevidade</span>
              </div>
            </div>
          </div>

          {/* Action Buttons & Social Channels (Animation: Bottom-Up entrance, delay 0.8s) */}
          <div className="hero-anim-cta">
            <div className="hero-cta-group">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-hero-primary"
                id="hero-btn-agendar"
              >
                <MessageSquare size={20} />
                Agendar Consulta
              </a>
              <a href="#sobre" className="btn btn-hero-secondary" id="hero-btn-sobre">
                Conhecer o Médico
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Quick Contact & Social Icons */}
            <div className="hero-social-strip">
              <span className="social-label">Canais diretos:</span>
              <div className="social-icons">
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn whatsapp" 
                  aria-label="WhatsApp Dr. Thalys"
                  title="Falar no WhatsApp"
                >
                  <MessageSquare size={18} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn instagram" 
                  aria-label="Instagram Dr. Thalys"
                  title="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="mailto:drthalyslayber@outlook.com" 
                  className="social-icon-btn email" 
                  aria-label="E-mail Dr. Thalys"
                  title="drthalyslayber@outlook.com"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Doctor Transparent Cutout Image */}
      <div className="hero-doctor">
        <img 
          src={doctorTransparent} 
          alt="Dr. Thalys Carvalho Layber - Médico Clínico Geral" 
          className="hero-doctor-img"
        />
        <div className="doctor-gradient-fade"></div>
      </div>
    </section>
  );
}
