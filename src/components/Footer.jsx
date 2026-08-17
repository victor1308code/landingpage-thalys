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
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>
              <strong>Aviso Legal:</strong> As informações contidas neste site possuem caráter estritamente educativo e informativo. Não devem ser utilizadas para autodiagnóstico ou automedicação. Sob nenhuma circunstância substituem a consulta, avaliação física ou diagnóstico clínico individualizado realizado por um médico qualificado.
            </p>
          </div>
          <div className="footer-copy">
            <p>&copy; {currentYear} Dr. Thalys Carvalho Layber. Todos os direitos reservados.</p>
            <p className="developer-credits">Medicina com Excelência e Cuidado Humanizado</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
