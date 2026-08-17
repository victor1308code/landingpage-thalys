import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Stethoscope } from 'lucide-react';
import './Artigos.css';

export default function Artigos() {
  // Guarda apenas o índice do card atualmente expandido (null = nenhum)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const artigosData = [
    {
      category: "Cardiologia & Sintomas",
      title: "Palpitação: quando investigar?",
      summary: "A palpitação é a sensação de perceber os batimentos do próprio coração, que podem parecer acelerados, fortes ou irregulares. Em muitos casos pode ocorrer por ansiedade ou cafeína, mas quando frequente exige avaliação médica.",
      fullText: "A palpitação é a sensação de perceber os batimentos do próprio coração, que podem parecer acelerados, fortes ou irregulares. Em muitos casos pode ocorrer por situações como ansiedade, estresse, consumo de cafeína, privação de sono ou esforço físico. No entanto, quando as palpitações são frequentes, prolongadas ou acompanhadas de tontura, falta de ar, dor no peito ou desmaio, é importante investigar. Esse sintoma pode estar relacionado a alterações do ritmo cardíaco, problemas da tireoide, anemia ou outras condições clínicas. Nesses casos, o ideal é procurar avaliação médica para identificar a causa e orientar o tratamento adequado."
    },
    {
      category: "Saúde Mental & Bem-estar",
      title: "Ansiedade: quando procurar ajuda?",
      summary: "A ansiedade é uma reação natural do organismo, mas quando persistente e interferindo na rotina com sintomas físicos como taquicardia e insônia, deve ser avaliada clinicamente.",
      fullText: "A ansiedade é uma reação natural do organismo diante de situações de preocupação ou estresse. No entanto, quando se torna frequente, intensa ou começa a interferir na rotina, pode trazer sintomas físicos e emocionais. Muitas pessoas relatam palpitações, falta de ar, tontura, insônia, irritabilidade ou dificuldade de concentração. Nesses casos, é importante avaliar se a ansiedade está impactando a qualidade de vida. Uma avaliação médica ajuda a compreender os sintomas, identificar possíveis causas e orientar o melhor tratamento. Se a ansiedade tem sido persistente ou difícil de controlar, o ideal é procurar avaliação médica."
    },
    {
      category: "Medicina do Sono & Fadiga",
      title: "Sono não reparador: quando investigar?",
      summary: "O sono não reparador ocorre quando a pessoa acorda com sensação de cansaço constante. Quando essa fadiga diurna se torna frequente, uma investigação clínica é essencial.",
      fullText: "O sono não reparador ocorre quando a pessoa dorme, mas acorda com a sensação de cansaço, como se não tivesse descansado o suficiente. Isso pode acontecer por diferentes motivos, como estresse, ansiedade, má qualidade do sono, apneia do sono, uso de estimulantes ou hábitos inadequados antes de dormir. Quando essa sensação é frequente e começa a causar cansaço durante o dia, dificuldade de concentração ou irritabilidade, é importante investigar. Uma avaliação médica pode ajudar a identificar possíveis causas e orientar mudanças ou tratamentos adequados. Se esse problema tem sido recorrente, o ideal é procurar avaliação médica."
    },
    {
      category: "Qualidade do Sono",
      title: "Distúrbios do sono: quando investigar?",
      summary: "Dificuldade para adormecer ou despertares frequentes impactam diretamente a memória, a concentração e a imunidade. Entenda quando investigar clinicamente.",
      fullText: "Os distúrbios do sono são mais comuns do que muitas pessoas imaginam. Dificuldade para iniciar o sono, despertares frequentes durante a noite ou sensação de sono não reparador podem afetar a qualidade de vida, a concentração e o bem-estar ao longo do dia. Esses problemas podem estar relacionados a fatores como estresse, ansiedade, hábitos inadequados de sono, uso de estimulantes ou algumas condições médicas. Quando a dificuldade para dormir se torna frequente ou começa a impactar a rotina, é importante investigar. O ideal é procurar avaliação médica para identificar a causa e receber orientação adequada."
    },
    {
      category: "Gastroenterologia & Sintomas",
      title: "Sangue nas fezes: quando investigar?",
      summary: "A presença de sangramento intestinal sempre merece atenção médica cuidadosa para diferenciar causas comuns de outras condições do trato digestivo.",
      fullText: "A presença de sangue nas fezes pode causar preocupação e sempre merece atenção. Em alguns casos, pode estar relacionada a causas mais simples, como hemorroidas ou pequenas fissuras anais, especialmente quando o sangue é vermelho vivo. No entanto, também pode estar associada a outras condições do trato digestivo, como inflamações intestinais, infecções ou pólipos. Quando o sangramento se repete, vem acompanhado de dor abdominal, alteração do hábito intestinal ou perda de peso, é importante investigar. Nesses casos, o ideal é procurar avaliação médica para identificar a causa e orientar o tratamento adequado."
    },
    {
      category: "Infectologia & Prevenção",
      title: "Infecções sexualmente transmissíveis: quando investigar?",
      summary: "Muitas ISTs podem evoluir de forma silenciosa e sem sintomas na fase inicial. A testagem preventiva e a avaliação médica periódica são indispensáveis.",
      fullText: "As chamadas doenças sexualmente transmissíveis (DSTs) são atualmente denominadas infecções sexualmente transmissíveis (ISTs), termo mais utilizado na medicina hoje. São causadas por vírus, bactérias ou outros microrganismos e podem ser transmitidas principalmente pelo contato sexual sem proteção. Muitas ISTs podem causar sintomas como corrimento, feridas, dor ao urinar ou coceira, mas em vários casos podem não apresentar sintomas. Assim, a testagem e a avaliação médica são importantes após situações de risco ou quando surgem dúvidas. Em caso de suspeita, o ideal é procurar avaliação médica para orientação, exames e tratamento adequado."
    }
  ];

  const handleToggle = (index) => {
    // Se o card clicado já estiver aberto, fecha ele. Se for outro, abre somente o clicado.
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section id="artigos" className="artigos-section">
      <div className="container">
        
        <div className="section-header scroll-reveal reveal-down">
          <span>BLOG & ORIENTAÇÕES DO MÉDICO</span>
          <h2>Artigos & Condições Clínicas</h2>
          <p>Conteúdos informativos elaborados pelo Dr. Thalys Carvalho Layber sobre sintomas comuns e quando buscar avaliação médica.</p>
        </div>

        <div className="artigos-grid">
          {artigosData.map((artigo, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <article 
                key={index} 
                className={`artigo-card ${isExpanded ? 'artigo-card-expanded' : ''}`}
              >
                <div className="artigo-meta">
                  <span className="artigo-category">{artigo.category}</span>
                  <span className="artigo-author-badge">
                    <Stethoscope size={13} />
                    Dr. Thalys Layber
                  </span>
                </div>

                <h3 className="artigo-title">{artigo.title}</h3>
                
                {/* Texto do Artigo (Resumo ou Completo baseado no estado individual deste card) */}
                <div className="artigo-text-container">
                  <p className={`artigo-text ${isExpanded ? 'text-full' : 'text-summary'}`}>
                    {isExpanded ? artigo.fullText : artigo.summary}
                  </p>
                </div>

                <div className="artigo-actions">
                  <button 
                    type="button"
                    onClick={() => handleToggle(index)} 
                    className="artigo-toggle-btn"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Ler Menos" : "Ler Artigo Completo"}</span>
                    {isExpanded ? (
                      <ChevronUp size={17} className="toggle-icon" />
                    ) : (
                      <ChevronDown size={17} className="toggle-icon" />
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
