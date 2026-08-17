import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['inicio', 'sobre', 'servicos', 'artigos', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Navegação Principal">
        <div className="navbar-container container">
          <a href="#inicio" className="navbar-logo" aria-label="Dr. Thalys Layber - Página Inicial">
            <img 
              src={logoEmblem} 
              alt="Logo Dr. Thalys Layber" 
              className="navbar-brand-emblem"
            />
            <div className="logo-text">
              <span className="logo-title">DR. THALYS LAYBER</span>
              <span className="logo-subtitle">MÉDICO • CRM-RJ 1300210</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li>
              <a 
                href="#inicio" 
                className={activeSection === 'inicio' ? 'active' : ''}
              >
                Início
              </a>
            </li>
            <li>
              <a 
                href="#sobre" 
                className={activeSection === 'sobre' ? 'active' : ''}
              >
                Sobre
              </a>
            </li>
            <li>
              <a 
                href="#servicos" 
                className={activeSection === 'servicos' ? 'active' : ''}
              >
                Especialidades
              </a>
            </li>
            <li>
              <a 
                href="#artigos" 
                className={activeSection === 'artigos' ? 'active' : ''}
              >
                Artigos
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className={activeSection === 'faq' ? 'active' : ''}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#contato" 
                className={`btn-nav ${activeSection === 'contato' ? 'active' : ''}`}
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Panel */}
          <div className={`nav-menu-mobile ${isOpen ? 'active' : ''}`} aria-hidden={!isOpen}>
            <ul>
              <li>
                <a 
                  href="#inicio" 
                  className={activeSection === 'inicio' ? 'active' : ''} 
                  onClick={handleLinkClick}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#sobre" 
                  className={activeSection === 'sobre' ? 'active' : ''} 
                  onClick={handleLinkClick}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#servicos" 
                  className={activeSection === 'servicos' ? 'active' : ''} 
                  onClick={handleLinkClick}
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a 
                  href="#artigos" 
                  className={activeSection === 'artigos' ? 'active' : ''} 
                  onClick={handleLinkClick}
                >
                  Artigos
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className={activeSection === 'faq' ? 'active' : ''} 
                  onClick={handleLinkClick}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contato" 
                  className={`btn-nav-mobile ${activeSection === 'contato' ? 'active' : ''}`} 
                  onClick={handleLinkClick}
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
