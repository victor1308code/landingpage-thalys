import React from 'react';
import { HeartPulse, Activity, Stethoscope, Sparkles, ClipboardCheck, ArrowRightLeft } from 'lucide-react';
import './Servicos.css';

export default function Servicos() {
  const servicosData = [
    {
      icon: <HeartPulse className="servico-icon" />,
      title: "Consulta Médica & Check-up",
      description: "Avaliação global do seu estado de saúde, exames preventivos, anamnese minuciosa e solicitação orientada de exames laboratoriais."
    },
    {
      icon: <Activity className="servico-icon" />,
      title: "Manejo de Doenças Crônicas",
      description: "Acompanhamento dedicado e contínuo para controle da hipertensão arterial, diabetes, colesterol elevado, entre outros quadros."
    },
    {
      icon: <Stethoscope className="servico-icon" />,
      title: "Sintomas Agudos & Queixas",
      description: "Diagnóstico e tratamento rápido de infecções respiratórias, quadros de dor, desconforto intestinal, cansaço inexplicável e estresse."
    },
    {
      icon: <Sparkles className="servico-icon" />,
      title: "Longevidade & Bem-estar",
      description: "Direcionamento focado em hábitos de vida saudáveis, qualidade de sono, reeducação alimentar leve e promoção de vitalidade."
    },
    {
      icon: <ClipboardCheck className="servico-icon" />,
      title: "Avaliação Pré-Operatória",
      description: "Realização do Risco Cirúrgico essencial, assegurando total estabilidade clínica antes de qualquer procedimento sob anestesia."
    },
    {
      icon: <ArrowRightLeft className="servico-icon" />,
      title: "Cuidado Integrado",
      description: "Coordenação central dos seus cuidados de saúde, com encaminhamento preciso para subespecialidades quando estritamente necessário."
    }
  ];

  return (
    <section id="servicos" className="servicos-section">
      <div className="container">
        <div className="section-header scroll-reveal reveal-down">
          <span>O QUE FAZEMOS</span>
          <h2>Especialidades & Atendimento</h2>
          <p>Oferecemos suporte médico especializado em clínica médica, focado em todas as fases da sua saúde.</p>
        </div>

        <div className="servicos-grid">
          {servicosData.map((servico, index) => (
            <div 
              key={index} 
              className={`servico-card scroll-reveal reveal-up delay-${(index % 3) + 1}`}
            >
              <div className="servico-icon-container">
                {servico.icon}
              </div>
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
            </div>
          ))}
        </div>

        <div className="particular-alert scroll-reveal reveal-up delay-3">
          <p>
            <strong>Aviso Importante:</strong> Todos os atendimentos são realizados na modalidade <strong>particular</strong>, emitindo nota fiscal e documentação médica necessária para solicitação de reembolso junto ao seu convênio/plano de saúde.
          </p>
        </div>
      </div>
    </section>
  );
}
