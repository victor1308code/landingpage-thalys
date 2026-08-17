import React from 'react';
import { Award, BookOpen, GraduationCap, HeartHandshake, CheckCircle } from 'lucide-react';
import doctorPhoto from '../assets/images/doctor-about-photo.jpg';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import './Sobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-watermark-bg">
        <img src={logoEmblem} alt="" aria-hidden="true" />
      </div>
      <div className="container sobre-container">
        
        {/* Left Column: Genuine Doctor Photo with Floating Luxury Badge */}
        <div className="sobre-image-column scroll-reveal reveal-left">
          <div className="sobre-image-frame">
            <div className="frame-border-accent"></div>
            <img 
              src={doctorPhoto} 
              alt="Dr. Thalys Carvalho Layber em seu consultório" 
              className="sobre-image"
            />
            <div className="sobre-experience-badge scroll-reveal reveal-scale delay-3">
              <div className="badge-icon-box">
                <CheckCircle size={20} className="badge-gold-icon" />
              </div>
              <div className="badge-text-box">
                <span className="badge-num">100%</span>
                <span className="badge-txt">Foco no Paciente</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Biography and Pillars */}
        <div className="sobre-content-column">
          <div className="section-title-left scroll-reveal reveal-right">
            <span className="tag-category">SOBRE O MÉDICO</span>
            <h2>Dr. Thalys Carvalho Layber</h2>
            <p className="doctor-crm-tagline">Médico Clínico Geral • CRM-RJ 1300210</p>
            <div className="title-divider-gold"></div>
          </div>

          <p className="sobre-intro scroll-reveal reveal-right delay-1">
            Como clínico geral, meu compromisso é olhar para a sua saúde de forma integral. Acredito que a medicina vai muito além de tratar sintomas: ela acolhe e cuida de pessoas. Cada consulta é desenhada para entender sua rotina, suas necessidades e seus objetivos de saúde.
          </p>

          <p className="sobre-text scroll-reveal reveal-right delay-2">
            Ofereço uma avaliação médica minuciosa, integrando diagnósticos precisos com um plano de prevenção estruturado. Busco estabelecer uma relação de confiança mútua para acompanhar você em todas as etapas da sua jornada de bem-estar.
          </p>

          <div className="sobre-pillars">
            <div className="pillar-card scroll-reveal reveal-up delay-2">
              <div className="pillar-icon-wrapper">
                <HeartHandshake className="pillar-icon" />
              </div>
              <div className="pillar-info">
                <h3>Atendimento Humanizado</h3>
                <p>Escuta ativa, acolhimento e respeito ao ritmo de cada paciente.</p>
              </div>
            </div>

            <div className="pillar-card scroll-reveal reveal-up delay-3">
              <div className="pillar-icon-wrapper">
                <Award className="pillar-icon" />
              </div>
              <div className="pillar-info">
                <h3>Excelência Médica</h3>
                <p>Diagnóstico fundamentado em evidências científicas e rigor técnico.</p>
              </div>
            </div>

            <div className="pillar-card scroll-reveal reveal-up delay-4">
              <div className="pillar-icon-wrapper">
                <BookOpen className="pillar-icon" />
              </div>
              <div className="pillar-info">
                <h3>Avaliação Completa & Preventiva</h3>
                <p>Análise detalhada do seu histórico de saúde, hábitos de vida e bem-estar geral.</p>
              </div>
            </div>
          </div>

          <div className="sobre-credentials scroll-reveal reveal-up delay-5">
            <div className="credential-item">
              <GraduationCap className="cred-icon" />
              <div>
                <h4>Formação Acadêmica de Alto Nível</h4>
                <p>Qualificação constante em clínica médica e promoção contínua da saúde.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
