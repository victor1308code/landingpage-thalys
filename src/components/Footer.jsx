import React from 'react';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <a href="#inicio" className="footer-brand" aria-label="Dr. Thalys Layber - Início">
            <img 
              src={logoEmblem} 
              alt="Logo Dr. Thalys Layber" 
              className="footer-brand-emblem"
            />
            <div className="footer-brand-text">
              <span className="footer-logo-title">DR. THALYS LAYBER</span>
              <span className="footer-logo-sub">CLÍNICO GERAL | CRM-RJ 1300210</span>
            </div>
          </a>
          
          <ul className="footer-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Especialidades</a></li>
            <li><a href="#artigos">Artigos</a></li>
            <li><a href="#contato">Agendamento</a></li>
          </ul>

          <div className="footer-social-wrap">
            <a 
              href="https://instagram.com/thalyslayber" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="Instagram @thalyslayber"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>@thalyslayber</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              <strong>Aviso Legal:</strong> As informações contidas neste site possuem caráter estritamente educativo e informativo. Não devem ser utilizadas para autodiagnóstico ou automedicação. O atendimento médico por telemedicina é regulamentado pela Resolução CFM nº 2.314/2022.
            </p>
          </div>
          <div className="footer-copy">
            <p>&copy; {currentYear} Dr. Thalys Carvalho Layber. Todos os direitos reservados.</p>
            <p className="developer-credits">Telemedicina com Excelência e Cuidado Humanizado</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
