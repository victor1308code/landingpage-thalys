// ==============================================================================
// BASE DE DADOS DE ARTIGOS CLÍNICOS - DR. THALYS LAYBER
// ==============================================================================

import imgPalpitacao from '../assets/images/artigos/palpitacao.jpg';
import imgAnsiedade from '../assets/images/artigos/ansiedade.jpg';
import imgSonoFadiga from '../assets/images/artigos/sono-fadiga.jpg';
import imgDisturbiosSono from '../assets/images/artigos/disturbios-sono.jpg';
import imgGastro from '../assets/images/artigos/gastroenterologia.jpg';
import imgPrevencaoIsts from '../assets/images/artigos/prevencao-ists.jpg';

export const artigosData = [
  {
    id: "palpitacao-quando-investigar",
    slug: "palpitacao-quando-investigar",
    category: "Cardiologia & Sintomas",
    title: "Palpitação: quando investigar?",
    subtitle: "Entenda o que são as palpitações, as causas mais comuns e quando elas indicam a necessidade de uma avaliação médica detalhada.",
    readTime: "4 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgPalpitacao,
    summary: "A palpitação é a sensação de perceber os batimentos do próprio coração, que podem parecer acelerados, fortes ou irregulares. Em muitos casos pode ocorrer por ansiedade ou cafeína, mas quando frequente exige avaliação médica.",
    intro: "A palpitação é a sensação incômoda ou atípica de perceber os batimentos do próprio coração. Ela pode se manifestar como se o coração estivesse disparado, dando 'pulos', batendo com mais força no peito ou até mesmo com sensação de batimentos na garganta ou no pescoço.",
    sections: [
      {
        heading: "Quais são as causas mais comuns de palpitação?",
        paragraphs: [
          "Na maioria das pessoas, as palpitações esporádicas estão ligadas a fatores do dia a dia e alterações fisiológicas temporárias. No entanto, é fundamental diferenciar causas benignas de condições que necessitam de intervenção.",
          "Entre os gatilhos e causas mais frequentes, destacam-se:"
        ],
        list: [
          "Ansiedade, crises de pânico e estresse emocional intenso;",
          "Consumo excessivo de estimulantes (café, energéticos, termogênicos ou pré-treinos);",
          "Privação de sono e exaustão física;",
          "Desidratação ou desequilíbrios de eletrólitos (como potássio e magnésio);",
          "Alterações hormonais, como disfunções da tireoide (hipertireoidismo);",
          "Anemia e deficiência de ferro;",
          "Arritmias cardíacas (como fibrilação atrial, extrassístoles e taquicardias supraventriculares)."
        ]
      },
      {
        heading: "Sinais de Alerta: quando procurar atendimento imediato?",
        paragraphs: [
          "Embora muitas palpitações sejam benignas, existem sinais associados que indicam risco aumentado e exigem investigação médica ágil ou atendimento de emergência."
        ],
        callout: {
          type: "warning",
          title: "Atenção aos sinais de alarme associados:",
          items: [
            "Palpitação acompanhada de dor, aperto ou queimação no peito;",
            "Falta de ar intensa ou dificuldade para respirar;",
            "Tontura importante, sensação de desmaio ou perda de consciência (síncope);",
            "Início súbito e batimentos extremamente acelerados em repouso;",
            "Histórico pessoal ou familiar de doenças cardíacas ou morte súbita."
          ]
        }
      },
      {
        heading: "Como é realizada a investigação médica?",
        paragraphs: [
          "Durante a consulta clínica, o médico realiza uma anamnese minuciosa para entender o padrão das palpitações, a frequência, os fatores desencadeantes e o histórico de saúde do paciente.",
          "Podem ser solicitados exames complementares como eletrocardiograma (ECG), Holter 24 horas, ecocardiograma e exames laboratoriais (hemograma, função tireoidiana e eletrólitos) para identificar a causa exata e definir o melhor plano de cuidado individualizado."
        ]
      }
    ],
    ctaText: "Apresenta palpitações frequentes ou dúvidas sobre a saúde do seu coração?",
    ctaButton: "Agendar Teleconsulta com o Dr. Thalys"
  },
  {
    id: "ansiedade-quando-procurar-ajuda",
    slug: "ansiedade-quando-procurar-ajuda",
    category: "Saúde Mental & Bem-estar",
    title: "Ansiedade: quando procurar ajuda médica?",
    subtitle: "Aprenda a diferenciar a ansiedade normal do dia a dia do transtorno de ansiedade que compromete a saúde física e mental.",
    readTime: "5 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgAnsiedade,
    summary: "A ansiedade é uma reação natural do organismo, mas quando persistente e interferindo na rotina com sintomas físicos como taquicardia e insônia, deve ser avaliada clinicamente.",
    intro: "Sentir ansiedade antes de uma prova, uma entrevista de emprego ou uma decisão importante é uma reação natural e protetora do organismo. No entanto, quando a preocupação se torna constante, desproporcional e começa a afetar o sono, o trabalho e as relações pessoais, estamos diante de um quadro que requer acolhimento e avaliação clínica.",
    sections: [
      {
        heading: "Como a ansiedade se manifesta no corpo?",
        paragraphs: [
          "Muitas pessoas não associam sintomas físicos à ansiedade e acabam buscando diversos especialistas antes de receberem o diagnóstico correto. O sistema nervoso simpático, quando hiperativado, produz sinais reais em todo o corpo:"
        ],
        list: [
          "Sensação de aperto no peito e respiração curta (falta de ar subjetiva);",
          "Taquicardia ou palpitações repentinas;",
          "Tensão muscular constante (dores nos ombros, nuca e mandíbula);",
          "Tremores, sudorese fria nas mãos e sensação de 'nó na garganta';",
          "Problemas gastrointestinais (gastrite nervosa, diarreia ou cólicas abdominais);",
          "Insônia inicial ou sono fragmentado com despertares noturnos em alerta."
        ]
      },
      {
        heading: "Quando a ansiedade passa do limite saudável?",
        paragraphs: [
          "A linha entre a ansiedade funcional e o transtorno está no nível de sofrimento e prejuízo que ela causa no seu cotidiano."
        ],
        callout: {
          type: "info",
          title: "Critérios para buscar avaliação médica:",
          items: [
            "Preocupação excessiva presente na maior parte dos dias por semanas ou meses;",
            "Sensação constante de que 'algo ruim está prestes a acontecer';",
            "Dificuldade persistente de relaxar ou 'desligar a mente';",
            "Prejuízo no rendimento profissional, acadêmico ou nas relações familiares;",
            "Uso frequente de automedicação, álcool ou outras substâncias para tentar acalmar os sintomas."
          ]
        }
      },
      {
        heading: "Qual é o papel do Médico Clínico no tratamento?",
        paragraphs: [
          "O médico clínico realiza a avaliação global do paciente, descartando causas orgânicas que simulam ansiedade (como hipertireoidismo ou arritmias), orienta medidas de estilo de vida, sono e manejo do estresse, e, quando indicado, conduz o tratamento medicamentoso seguro e integrado com a psicoterapia."
        ]
      }
    ],
    ctaText: "A ansiedade tem impactado a sua qualidade de vida e o seu bem-estar?",
    ctaButton: "Agendar Teleconsulta Humanizada"
  },
  {
    id: "sono-nao-reparador-quando-investigar",
    slug: "sono-nao-reparador-quando-investigar",
    category: "Medicina do Sono & Fadiga",
    title: "Sono não reparador: quando investigar?",
    subtitle: "Dormir várias horas e acordar com a sensação de cansaço extremo não é normal. Conheça as principais causas da fadiga crônica.",
    readTime: "4 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgSonoFadiga,
    summary: "O sono não reparador ocorre quando a pessoa acorda com sensação de cansaço constante. Quando essa fadiga diurna se torna frequente, uma investigação clínica é essencial.",
    intro: "Você dorme 7, 8 ou até 9 horas por noite, mas acorda com a sensação de que não descansou nada? O sono não reparador é uma queixa muito frequente na prática clínica e indica que, embora haja tempo de cama, a arquitetura e as fases profundas do sono estão sendo prejudicadas.",
    sections: [
      {
        heading: "Principais causas do sono de baixa qualidade",
        paragraphs: [
          "A sensação de cansaço contínuo ao acordar pode ter origens clínicas, comportamentais e respiratórias:"
        ],
        list: [
          "Apneia Obstrutiva do Sono (interrupções na respiração que provocam microdespertares imperceptíveis);",
          "Bruxismo e Síndrome das Pernas Inquietas;",
          "Deficiências nutricionais (ferro/ferritina, vitamina D, vitamina B12);",
          "Disfunções da tireoide (hipotireoidismo);",
          "Uso excessivo de telas (luz azul) antes de dormir, inibindo a produção natural de melatonina;",
          "Consumo de álcool à noite (que fragmenta as fases REM do sono) ou cafeína tardia."
        ]
      },
      {
        heading: "Consequências da privação crônica de sono de qualidade",
        paragraphs: [
          "Não tratar o sono não reparador pode trazer reflexos sérios para a saúde a médio e longo prazo:"
        ],
        callout: {
          type: "warning",
          title: "Impactos no organismo:",
          items: [
            "Queda na concentração, lapsos de memória e redução da produtividade;",
            "Aumento da irritabilidade, instabilidade de humor e risco de depressão;",
            "Desregulação dos hormônios da fome (grelina e leptina), favorecendo ganho de peso;",
            "Queda da imunidade e aumento do risco cardiovascular (hipertensão arterial)."
          ]
        }
      },
      {
        heading: "Como a consulta médica ajuda a restabelecer seu descanso?",
        paragraphs: [
          "Na consulta, avaliamos seu padrão de sono, sintomas associados (como ronco, boca seca ao acordar ou fadiga vespertina), solicitamos exames laboratoriais específicos e indicamos higiene do sono estruturada ou exames especializados como a polissonografia."
        ]
      }
    ],
    ctaText: "Acordar cansado tem sido a sua rotina? Recupere sua disposição diária.",
    ctaButton: "Agendar Avaliação do Sono"
  },
  {
    id: "disturbios-do-sono-quando-investigar",
    slug: "disturbios-do-sono-quando-investigar",
    category: "Qualidade do Sono",
    title: "Distúrbios do sono: quando investigar?",
    subtitle: "Da insônia ao ronco excessivo: descubra quando as dificuldades para dormir exigem diagnóstico e tratamento clínico.",
    readTime: "4 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgDisturbiosSono,
    summary: "Dificuldade para adormecer ou despertares frequentes impactam diretamente a memória, a concentração e a imunidade. Entenda quando investigar clinicamente.",
    intro: "Uma boa noite de sono é um dos três pilares fundamentais da saúde humana, ao lado da alimentação e da atividade física. Quando o sono falha sistematicamente, todo o equilíbrio fisiológico entra em colapso.",
    sections: [
      {
        heading: "Quais são os distúrbios do sono mais comuns?",
        paragraphs: [
          "Existem mais de 80 tipos de distúrbios do sono catalogados pela medicina, sendo os mais prevalentes:"
        ],
        list: [
          "Insônia Inicial (demorar mais de 30 a 45 minutos para conseguir adormecer);",
          "Insônia de Manutenção (acordar várias vezes durante a madrugada e ter dificuldade para voltar a dormir);",
          "Despertar Precoce (acordar muito antes do horário desejado sem conseguir retomar o sono);",
          "Ronco frequente e engasgos noturnos (sinal clássico de apneia do sono);",
          "Sonolência Diurna Excessiva (dormir involuntariamente durante reuniões, leitura ou ao volante)."
        ]
      },
      {
        heading: "Quando investigar com um médico?",
        paragraphs: [
          "A regra geral na medicina do sono é avaliar a frequência e o impacto dos sintomas:"
        ],
        callout: {
          type: "info",
          title: "Sinais de que você deve agendar uma consulta:",
          items: [
            "Dificuldade para dormir ocorrendo 3 ou mais vezes por semana há mais de um mês;",
            "Necessidade frequente de soníferos ou remédios por conta própria;",
            "Sensação constante de névoa mental e fadiga durante o dia;",
            "Relatos de parceiros sobre roncos altos, pausas respiratórias ou agitação motora à noite."
          ]
        }
      },
      {
        heading: "Tratamento baseado em evidências",
        paragraphs: [
          "O tratamento moderno dos distúrbios do sono prioriza a identificação da causa raiz, ajuste de hábitos circadianos, terapia comportamental e uso criterioso de medicamentos quando estritamente necessário, evitando a dependência farmacológica."
        ]
      }
    ],
    ctaText: "Quer voltar a ter noites de sono tranquilas e reparadoras?",
    ctaButton: "Agendar Consulta com Dr. Thalys"
  },
  {
    id: "sangue-nas-fezes-quando-investigar",
    slug: "sangue-nas-fezes-quando-investigar",
    category: "Gastroenterologia & Sintomas",
    title: "Sangue nas fezes: quando investigar?",
    subtitle: "Entenda o que as cores do sangramento indicam e por que esse sinal nunca deve ser ignorado ou normalizado.",
    readTime: "5 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgGastro,
    summary: "A presença de sangramento intestinal sempre merece atenção médica cuidadosa para diferenciar causas comuns de outras condições do trato digestivo.",
    intro: "Notar sangue nas fezes ou no papel higiênico é uma situação que assusta muitos pacientes. Embora em grande parte das vezes esteja associado a condições orificiais comuns e benignas, o sangramento digestivo é um sinal de alerta que sempre deve ser avaliado por um médico.",
    sections: [
      {
        heading: "O que a tonalidade do sangue revela?",
        paragraphs: [
          "A cor do sangue dá pistas importantes sobre a localização do sangramento no trato gastrointestinal:"
        ],
        list: [
          "Sangue Vermelho Vivo (Enterorragia / Hematêmese baixa): Geralmente indica sangramento no final do intestino grosso, reto ou ânus (hemorroidas, fissuras anais ou proctites);",
          "Sangue Escuro ou Fezes Pastosas Pretas como Piche (Melena): Tem cheiro muito forte característico e indica sangramento na parte alta do trato digestivo (estômago, duodeno ou esôfago), onde o sangue foi digerido pelo ácido estomacal;",
          "Sangue Oculto: Invisível a olho nu, detectado apenas através de exame laboratorial de fezes de rotina."
        ]
      },
      {
        heading: "Causas frequentes de sangramento digestivo",
        paragraphs: [
          "As causas variam desde quadros simples até doenças que exigem investigação urgente:"
        ],
        list: [
          "Hemorroidas internas ou externas inflamadas/trombosadas;",
          "Fissuras anais decorrentes de constipação intestinal crônica e fezes ressecadas;",
          "Doenças Inflamatórias Intestinais (Retocolite Ulcerativa e Doença de Crohn);",
          "Pólipos intestinais (lesões benignas que devem ser removidas preventivamente);",
          "Diverticulose e sangramento diverticular;",
          "Neoplasias do cólon e reto (câncer colorretal)."
        ]
      },
      {
        heading: "Sinais de Alerta que exigem investigação rápida",
        paragraphs: [
          "Qualquer sangramento deve ser avaliado, mas a presença destes sintomas requer consulta imediata:"
        ],
        callout: {
          type: "warning",
          title: "Sinais de Alarme:",
          items: [
            "Sangramento recorrente ou volumoso;",
            "Perda de peso involuntária sem explicação;",
            "Alteração recente do hábito intestinal (fezes finas, diarreia ou constipação súbita);",
            "Dor abdominal persistente ou anemia diagnosticada em exames de sangue;",
            "Idade superior a 45 anos sem realização prévia de colonoscopia preventiva."
          ]
        }
      }
    ],
    ctaText: "Identificou algum episódio de sangramento? Não adie sua avaliação clínica preventiva.",
    ctaButton: "Agendar Consulta Médica Preventiva"
  },
  {
    id: "infeccoes-sexualmente-transmissiveis-quando-investigar",
    slug: "infeccoes-sexualmente-transmissiveis-quando-investigar",
    category: "Infectologia & Prevenção",
    title: "Infecções Sexualmente Transmissíveis (ISTs): quando investigar?",
    subtitle: "Muitas infecções evoluem sem sintomas evidentes. Entenda a importância do rastreio laboratorial e do diagnóstico precoce.",
    readTime: "5 min de leitura",
    date: "Atualizado em Fevereiro de 2026",
    image: imgPrevencaoIsts,
    summary: "Muitas ISTs podem evoluir de forma silenciosa e sem sintomas na fase inicial. A testagem preventiva e a avaliação médica periódica são indispensáveis.",
    intro: "As Infecções Sexualmente Transmissíveis (ISTs) são condições causadas por vírus, bactérias e outros microrganismos transmitidos principalmente por via sexual desprotegida. Um dos maiores desafios da medicina moderna é que uma parcela expressiva das pessoas infectadas não apresenta nenhum sintoma nas fases iniciais.",
    sections: [
      {
        heading: "Sintomas comuns de ISTs que exigem consulta imediata",
        paragraphs: [
          "Quando presentes, os sintomas mais característicos incluem:"
        ],
        list: [
          "Corrimentos anormais na uretra, vagina ou ânus (amarelados, esverdeados ou esbranquiçados);",
          "Dor, ardor ou queimação intensa ao urinar ou durante a relação sexual;",
          "Presença de feridas, úlceras, bolhas ou verrugas na região genital, anal ou oral (mesmo que indolores);",
          "Coceira ou irritação persistente na área genital;",
          "Surgimento de ínguas (gânglios aumentados e dolorosos) na virilha."
        ]
      },
      {
        heading: "O Perigo do 'Período Silencioso'",
        paragraphs: [
          "Infecções como Clamídia, Gonorreia, Sífilis, Hepatites B e C e HIV frequentemente não causam dor ou incômodo no início, mas continuam se multiplicando e podem causar complicações graves (como infertilidade, doença inflamatória pélvica e danos neurológicos ou hepáticos), além de permitir a transmissão involuntária para parceiros."
        ],
        callout: {
          type: "info",
          title: "Quando fazer exames de rastreio (check-up de ISTs)?",
          items: [
            "Após qualquer relação sexual desprotegida ou rompimento de preservativo;",
            "Ao iniciar um novo relacionamento afetivo;",
            "Como rotina anual de check-up de saúde preventiva;",
            "Diante do diagnóstico de IST em uma parceria recente."
          ]
        }
      },
      {
        heading: "Atendimento acolhedor, sigiloso e sem julgamentos",
        paragraphs: [
          "A consulta com o Dr. Thalys Layber garante sigilo médico absoluto, escuta empática e solicitação assertiva de sorologias e exames específicos, com prescrição imediata dos esquemas terapêuticos recomendados pelas diretrizes do Ministério da Saúde e da OMS."
        ]
      }
    ],
    ctaText: "Precisa de orientação preventiva, exames de rotina ou esclarecimento de sintomas?",
    ctaButton: "Agendar Teleconsulta Sigilosa"
  }
];
