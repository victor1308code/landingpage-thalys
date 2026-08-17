import React from 'react';
import { HeartPulse, Activity, Stethoscope, Zap, Search, Thermometer, ShieldAlert, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import './Servicos.css';

export default function Servicos() {
  const servicosData = [
    {
      icon: <HeartPulse className="servico-icon" />,
      title: "Check-up Geral & Prevenção",
      description: "Avaliação abrangente do estado de saúde geral, mapeamento de histórico familiar, hábitos de vida e solicitação direcionada de exames laboratoriais."
    },
    {
      icon: <Search className="servico-icon" />,
      title: "Alterações em Exames de Sangue",
      description: "Interpretação e conduta médica detalhada para alterações de colesterol, triglicerídeos, glicose, tireoide, anemia, vitaminas e ácido úrico."
    },
    {
      icon: <Zap className="servico-icon" />,
      title: "Cansaço Excessivo & Fadiga",
      description: "Investigação minuciosa das causas de esgotamento físico, sono não reparador, estresse crônico, deficiências nutricionais e alterações metabólicas."
    },
    {
      icon: <Stethoscope className="servico-icon" />,
      title: "Dores Abdominais & Queixas Digestivas",
      description: "Diagnóstico e plano terapêutico para dores estomacais, refluxo, queimação, alterações no hábito intestinal e desconfortos abdominais."
    },
    {
      icon: <Activity className="servico-icon" />,
      title: "Palpitações, Tonturas & Pressão",
      description: "Avaliação inicial de episódios de tontura, vertigem, sensação de coração acelerado e controle rigoroso da pressão arterial."
    },
    {
      icon: <Thermometer className="servico-icon" />,
      title: "Febre Persistente & Infecções",
      description: "Investigação de febre de origem obscura, infecções respiratórias, quadros virais, infecções urinárias e sintomas agudos gerais."
    },
    {
      icon: <ShieldAlert className="servico-icon" />,
      title: "Controle de Doenças Crônicas",
      description: "Acompanhamento longitudinal de pacientes com Hipertensão Arterial, Diabetes Mellitus, esteatose hepática e síndrome metabólica."
    },
    {
      icon: <FileSpreadsheet className="servico-icon" />,
      title: "Avaliação de Risco Cirúrgico",
      description: "Avaliação clínica pré-operatória criteriosa e emissão de laudo de risco cirúrgico para procedimentos eletivos com segurança."
    }
  ];

  return (
    <section id="servicos" className="servicos-section">
      <div className="container">
        <div className="section-header scroll-reveal reveal-down">
          <span>O QUE ATENDEMOS</span>
          <h2>Sintomas, Queixas & Condições Clínicas</h2>
          <p>Atendimento médico especializado em clínica médica através de teleconsulta individualizada para todo o Brasil.</p>
        </div>

        <div className="servicos-grid">
          {servicosData.map((servico, index) => (
            <div 
              key={index} 
              className={`servico-card scroll-reveal reveal-up delay-${(index % 4) + 1}`}
            >
              <div className="servico-icon-container">
                {servico.icon}
              </div>
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          ))}
        </div>

        {/* Banner de Destaque da Telemedicina */}
        <div className="telemedicina-highlight-banner scroll-reveal reveal-up delay-3">
          <div className="telemed-icon-wrapper">
            <CheckCircle2 size={32} className="telemed-gold-icon" />
          </div>
          <div className="telemed-text-wrapper">
            <h4>Atendimento por Telemedicina com Validade Nacional</h4>
            <p>
              Consultas online com segurança, privacidade e conforto para pacientes de todo o Brasil. Atendimento particular com emissão de receitas, pedidos de exames e atestados digitais com certificação eletrônica oficial (ICP-Brasil).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
