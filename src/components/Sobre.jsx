import React from 'react';
import { GraduationCap, HeartHandshake, ShieldCheck, Stethoscope, Building2, Trophy, Activity, Award, CheckCircle } from 'lucide-react';
import doctorAboutCutout from '../assets/images/doctor-about-clean-cutout.png';
import logoEmblem from '../assets/images/logo-emblem-clean.png';
import './Sobre.css';

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-section">
      <div className="sobre-watermark-bg">
        <img src={logoEmblem} alt="" aria-hidden="true" />
      </div>

      <div className="container sobre-container">
        
        {/* Left Column: Transparent Cutout Doctor Portrait with Luxury Glass Accents */}
        <div className="sobre-image-column scroll-reveal reveal-left">
          <div className="sobre-cutout-wrapper">
            
            {/* Elegant glowing background aura / arch */}
            <div className="sobre-backdrop-arch"></div>
            <div className="sobre-glow-radial"></div>

            {/* Doctor Transparent Cutout Photo */}
            <img 
              src={doctorAboutCutout} 
              alt="Dr. Thalys Carvalho Layber - Médico Clínico Geral" 
              className="sobre-cutout-image"
            />
            
            {/* Floating Luxury CRM & Specialist Badge */}
            <div className="sobre-experience-badge scroll-reveal reveal-scale delay-3">
              <div className="badge-icon-box">
                <ShieldCheck size={22} className="badge-gold-icon" />
              </div>
              <div className="badge-text-box">
                <span className="badge-num">CRM-RJ 1300210</span>
                <span className="badge-txt">MÉDICO CLÍNICO GERAL</span>
              </div>
            </div>

            {/* Floating UNIRIO Tag */}
            <div className="sobre-floating-tag">
              <Award size={16} className="tag-gold-icon" />
              <span>Residência Médica UNIRIO</span>
            </div>
          </div>

          {/* Destaques Rápidos Acadêmicos */}
          <div className="sobre-awards-strip scroll-reveal reveal-up delay-4">
            <div className="award-mini-card">
              <Trophy size={20} className="award-gold-icon" />
              <div>
                <strong>1º Lugar Nacional</strong>
                <p>Prêmio Produtividade em Pesquisa</p>
              </div>
            </div>
            <div className="award-mini-card">
              <Activity size={20} className="award-gold-icon" />
              <div>
                <strong>Certificação ACLS</strong>
                <p>Suporte Avançado Cardiovascular</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Full Real Biography and Hospital Experience */}
        <div className="sobre-content-column">
          <div className="section-title-left scroll-reveal reveal-right">
            <span className="tag-category">CONHEÇA O MÉDICO</span>
            <h2>Dr. Thalys Carvalho Layber</h2>
            <p className="doctor-crm-tagline">
              Médico Clínico Geral • Residente de Clínica Médica no Hospital Universitário Gaffrée e Guinle (UNIRIO)
            </p>
            <div className="title-divider-gold"></div>
          </div>

          <p className="sobre-intro scroll-reveal reveal-right delay-1">
            Sou médico formado pela <strong>Faculdade de Ciências Médicas e da Saúde de Juiz de Fora (FCMS-JF / SUPREMA)</strong> e atualmente estou no segundo e último ano da Residência Médica em Clínica Médica no <strong>Hospital Universitário Gaffrée e Guinle, da Universidade Federal do Estado do Rio de Janeiro (UNIRIO)</strong>.
          </p>

          <p className="sobre-text scroll-reveal reveal-right delay-2">
            Acredito que a medicina deve ser fundamentada em conhecimento científico de ponta, atualização constante e, principalmente, em um atendimento humano e individualizado. Meu compromisso é ouvir com atenção, compreender as particularidades da sua rotina e explicar de forma clara cada etapa da sua avaliação e do seu tratamento.
          </p>

          {/* Experiência Profissional Hospitalar */}
          <div className="sobre-experience-section scroll-reveal reveal-up delay-2">
            <h3 className="experience-title">
              <Building2 size={20} className="section-inline-icon" />
              Experiência Profissional & Hospitais de Referência:
            </h3>

            <div className="hospital-grid">
              <div className="hospital-card">
                <div className="hospital-dot"></div>
                <div>
                  <h4>Hospital Universitário Gaffrée e Guinle (HUGG) & HUSE – UNIRIO</h4>
                  <span className="hospital-role">Residência Médica em Clínica Médica (2025 – atual)</span>
                  <p>Atuação intensiva em enfermaria clínica, ambulatórios de especialidades e Unidade de Terapia Intensiva (UTI).</p>
                </div>
              </div>

              <div className="hospital-card">
                <div className="hospital-dot"></div>
                <div>
                  <h4>Hospital Universitário Clementino Fraga Filho (HUCFF) – UFRJ</h4>
                  <span className="hospital-role">Pronto-Atendimento e Emergência Clínica (2026)</span>
                  <p>Abordagem e tomada de decisão ágil em quadros clínicos agudos e de alta complexidade.</p>
                </div>
              </div>

              <div className="hospital-card">
                <div className="hospital-dot"></div>
                <div>
                  <h4>Hospital de Clínicas Nossa Senhora da Conceição – Rede Santa Catarina</h4>
                  <span className="hospital-role">Médico Plantonista de Urgência e Emergência (2024 – atual)</span>
                  <p>Atendimento médico de urgência e suporte a pacientes críticos nas salas verde e vermelha.</p>
                </div>
              </div>

              <div className="hospital-card">
                <div className="hospital-dot"></div>
                <div>
                  <h4>Hospital Geral do Exército de Juiz de Fora (HGeJF)</h4>
                  <span className="hospital-role">Médico Militar – 2º Tenente (2024 – 2025)</span>
                  <p>Experiência em atendimento hospitalar integral e plantões de urgência/emergência militar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilares do Cuidado */}
          <div className="sobre-pillars">
            <div className="pillar-card scroll-reveal reveal-up delay-3">
              <div className="pillar-icon-wrapper">
                <HeartHandshake className="pillar-icon" />
              </div>
              <div className="pillar-info">
                <h3>Escuta Atenta & Humanizada</h3>
                <p>Consultas sem pressa, com acolhimento genuíno e respeito ao tempo e às dúvidas do paciente.</p>
              </div>
            </div>

            <div className="pillar-card scroll-reveal reveal-up delay-4">
              <div className="pillar-icon-wrapper">
                <Stethoscope className="pillar-icon" />
              </div>
              <div className="pillar-info">
                <h3>Medicina Baseada em Evidências</h3>
                <p>Diagnósticos e condutas terapêuticas apoiadas nas diretrizes científicas mais atualizadas.</p>
              </div>
            </div>
          </div>

          {/* Destaque Acadêmico Final */}
          <div className="sobre-credentials scroll-reveal reveal-up delay-5">
            <div className="credential-item">
              <GraduationCap className="cred-icon" />
              <div>
                <h4>Formação Acadêmica de Alto Nível</h4>
                <p>Graduação FCMS-JF / SUPREMA • Residência Clínica Médica UNIRIO • Premiado em Pesquisa Científica</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
