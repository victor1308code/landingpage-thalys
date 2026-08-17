import React, { useState } from 'react';
import { MessageSquare, BookOpenCheck, ChevronDown, ChevronUp, Stethoscope } from 'lucide-react';
import './Artigos.css';

export default function Artigos() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const whatsappNumber = '5521983140249';

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const artigosData = [
    {
      category: "Cardiologia & Sintomas",
      title: "Palpitação: quando investigar?",
      summary: "A palpitação é a sensação de perceber os batimentos do próprio coração, que podem parecer acelerados, fortes ou irregulares.",
      fullText: "A palpitação é a sensação de perceber os batimentos do próprio coração, que podem parecer acelerados, fortes ou irregulares. Em muitos casos pode ocorrer por situações como ansiedade, estresse, consumo de cafeína, privação de sono ou esforço físico. No entanto, quando as palpitações são frequentes, prolongadas ou acompanhadas de tontura, falta de ar, dor no peito ou desmaio, é importante investigar. Esse sintoma pode estar relacionado a alterações do ritmo cardíaco, problemas da tireoide, anemia ou outras condições clínicas. Nesses casos, o ideal é procurar avaliação médica para identificar a causa e orientar o tratamento adequado.",
      topic: "Palpitação"
    },
    {
      category: "Saúde Mental & Bem-estar",
      title: "Ansiedade: quando procurar ajuda?",
      summary: "A ansiedade é uma reação natural do organismo diante de situações de preocupação ou estresse, mas pode trazer sintomas físicos.",
      fullText: "A ansiedade é uma reação natural do organismo diante de situações de preocupação ou estresse. No entanto, quando se torna frequente, intensa ou começa a interferir na rotina, pode trazer sintomas físicos e emocionais. Muitas pessoas relatam palpitações, falta de ar, tontura, insônia, irritabilidade ou dificuldade de concentração. Nesses casos, é importante avaliar se a ansiedade está impactando a qualidade de vida. Uma avaliação médica ajuda a compreender os sintomas, identificar possíveis causas e orientar o melhor tratamento. Se a ansiedade tem sido persistente ou difícil de controlar, o ideal é procurar avaliação médica.",
      topic: "Ansiedade"
    },
    {
      category: "Medicina do Sono & Fadiga",
      title: "Sono não reparador: quando investigar?",
      summary: "O sono não reparador ocorre quando a pessoa dorme, mas acorda com a sensação de cansaço, como se não tivesse descansado o suficiente.",
      fullText: "O sono não reparador ocorre quando a pessoa dorme, mas acorda com a sensação de cansaço, como se não tivesse descansado o suficiente. Isso pode acontecer por diferentes motivos, como estresse, ansiedade, má qualidade do sono, apneia do sono, uso de estimulantes ou hábitos inadequados antes de dormir. Quando essa sensação é frequente e começa a causar cansaço durante o dia, dificuldade de concentração ou irritabilidade, é importante investigar. Uma avaliação médica pode ajudar a identificar possíveis causas e orientar mudanças ou tratamentos adequados. Se esse problema tem sido recorrente, o ideal é procurar avaliação médica.",
      topic: "Sono não reparador"
    },
    {
      category: "Qualidade do Sono",
      title: "Distúrbios do sono: quando investigar?",
      summary: "Dificuldade para iniciar o sono, despertares frequentes ou sensação de cansaço diurno afetam diretamente a sua saúde e concentração.",
      fullText: "Os distúrbios do sono são mais comuns do que muitas pessoas imaginam. Dificuldade para iniciar o sono, despertares frequentes durante a noite ou sensação de sono não reparador podem afetar a qualidade de vida, a concentração e o bem-estar ao longo do dia. Esses problemas podem estar relacionados a fatores como estresse, ansiedade, hábitos inadequados de sono, uso de estimulantes ou algumas condições médicas. Quando a dificuldade para dormir se torna frequente ou começa a impactar a rotina, é importante investigar. O ideal é procurar avaliação médica para identificar a causa e receber orientação adequada.",
      topic: "Distúrbios do sono"
    },
    {
      category: "Gastroenterologia & Sintomas",
      title: "Sangue nas fezes: quando investigar?",
      summary: "A presença de sangue nas fezes pode causar preocupação e sempre merece uma avaliação médica cuidadosa.",
      fullText: "A presença de sangue nas fezes pode causar preocupação e sempre merece atenção. Em alguns casos, pode estar relacionada a causas mais simples, como hemorroidas ou pequenas fissuras anais, especialmente quando o sangue é vermelho vivo. No entanto, também pode estar associada a outras condições do trato digestivo, como inflamações intestinais, infecções ou pólipos. Quando o sangramento se repete, vem acompanhado de dor abdominal, alteração do hábito intestinal ou perda de peso, é importante investigar. Nesses casos, o ideal é procurar avaliação médica para identificar a causa e orientar o tratamento adequado.",
      topic: "Sangue nas fezes"
    },
    {
      category: "Infectologia & Prevenção",
      title: "Infecções sexualmente transmissíveis: quando investigar?",
      summary: "As ISTs são causadas por vírus ou bactérias e podem passar despercebidas sem sintomas aparentes na fase inicial.",
      fullText: "As chamadas doenças sexualmente transmissíveis (DSTs) são atualmente denominadas infecções sexualmente transmissíveis (ISTs), termo mais utilizado na medicina hoje. São causadas por vírus, bactérias ou outros microrganismos e podem ser transmitidas principalmente pelo contato sexual sem proteção. Muitas ISTs podem causar sintomas como corrimento, feridas, dor ao urinar ou coceira, mas em vários casos podem não apresentar sintomas. Assim, a testagem e a avaliação médica são importantes após situações de risco ou quando surgem dúvidas. Em caso de suspeita, o ideal é procurar avaliação médica para orientação, exames e tratamento adequado.",
      topic: "ISTs e Prevenção"
    }
  ];

  const generalWhatsappMessage = encodeURIComponent('Olá, Dr. Thalys! Gostaria de agendar uma teleconsulta médica.');
  const generalWhatsappLink = `https://wa.me/${whatsappNumber}?text=${generalWhatsappMessage}`;

  return (
    <section id="artigos" className="artigos-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>BLOG & ARTIGOS DO MÉDICO</span>
          <h2>Orientações Médicas & Sintomas</h2>
          <p>Artigos elaborados pelo Dr. Thalys Carvalho Layber para esclarecer quando é o momento ideal de buscar avaliação clínica.</p>
        </div>

        <div className="artigos-grid">
          {artigosData.map((artigo, index) => {
            const isExpanded = expandedIndex === index;
            const waCustomMsg = encodeURIComponent(`Olá, Dr. Thalys! Li o seu artigo sobre "${artigo.topic}" no site e gostaria de agendar uma teleconsulta para avaliação médica.`);
            const waArticleLink = `https://wa.me/${whatsappNumber}?text=${waCustomMsg}`;

            return (
              <article 
                key={index} 
                className={`artigo-card scroll-reveal reveal-up delay-${(index % 3) + 1} ${isExpanded ? 'expanded' : ''}`}
              >
                <div className="artigo-meta">
                  <span className="artigo-category">{artigo.category}</span>
                  <span className="artigo-author-badge">
                    <Stethoscope size={13} />
                    Dr. Thalys Layber
                  </span>
                </div>

                <h3 className="artigo-title">{artigo.title}</h3>
                
                <p className="artigo-desc">
                  {isExpanded ? artigo.fullText : artigo.summary}
                </p>

                <div className="artigo-actions">
                  <button 
                    onClick={() => toggleExpand(index)} 
                    className="artigo-toggle-btn"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Ler Menos" : "Ler Artigo Completo"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  <a 
                    href={waArticleLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="artigo-cta-whatsapp"
                    title={`Agendar consulta sobre ${artigo.topic}`}
                  >
                    <MessageSquare size={14} />
                    <span>Agendar Consulta</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Intermediário Estratégico dentro da Seção de Artigos */}
        <div className="artigos-inline-cta scroll-reveal reveal-up delay-4">
          <div className="cta-icon-box">
            <BookOpenCheck size={28} className="cta-gold-icon" />
          </div>
          <div className="cta-text-box">
            <h4>Apresenta algum desses sintomas ou deseja realizar uma avaliação clínica?</h4>
            <p>Agende sua teleconsulta médica particular com o Dr. Thalys e receba atendimento atencioso, seguro e individualizado.</p>
          </div>
          <a 
            href={generalWhatsappLink} 
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
