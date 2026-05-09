import type { VocabPack } from '@radar/types'

export const VetVocabPack: VocabPack = {
  vertical: 'vet',
  nome: 'Veterinária',

  termosCore: [
    'medicina veterinária', 'veterinary medicine', 'small animal',
    'cães e gatos', 'feline', 'canine', 'patologia veterinária',
    'diagnóstico veterinário', 'laboratório veterinário',
    'exame laboratorial pet', 'IDEXX', 'Antech', 'dvm360',
    'hemograma veterinário', 'bioquímica sérica', 'urianálise veterinária',
  ],

  pilaresPadrao: [
    { nome: 'Educação Técnica', pesoPct: 35, descricao: 'Conteúdo técnico-educativo sobre diagnósticos, exames e protocolos clínicos para médicos veterinários e tutores.' },
    { nome: 'Diferencial', pesoPct: 25, descricao: 'Tecnologia, inovação e diferenciais do laboratório: equipamentos, metodologias, tempo de resposta, qualidade.' },
    { nome: 'Autoridade Científica', pesoPct: 20, descricao: 'Estudos publicados, pesquisas recentes, evidências científicas referenciadas (PubMed, congressos CFMV).' },
    { nome: 'Datas e Campanhas', pesoPct: 12, descricao: 'Calendário pet: Dia do Veterinário, Agosto Dourado, Março Marrom, campanhas sazonais.' },
    { nome: 'Parceria Comercial', pesoPct: 8, descricao: 'Conteúdo de parceiros, comarketing com clínicas, ações conjuntas e apresentação de convênios.' },
  ],

  fontesPadrao: [
    { tipo: 'PUBMED', nome: 'PubMed Veterinary', config: { query: 'veterinary OR canine OR feline diagnosis treatment laboratory' } },
    { tipo: 'RSS', nome: 'Agência Pet', url: 'https://noticias.agencia.pet/feed' },
    { tipo: 'RSS', nome: 'dvm360', url: 'https://www.dvm360.com/rss' },
    { tipo: 'RSS', nome: 'IDEXX Blog', url: 'https://www.idexx.com/blog/feed' },
    { tipo: 'RSS', nome: 'VetMed Today', url: 'https://vetmedtoday.com/feed' },
    { tipo: 'INSTAGRAM', nome: '@idexx', config: { handle: 'idexx' } },
    { tipo: 'INSTAGRAM', nome: '@antechdiagnostics', config: { handle: 'antechdiagnostics' } },
    { tipo: 'GOOGLE_NEWS', nome: 'Google News Vet BR', config: { query: 'medicina veterinária diagnóstico laboratório pet', lang: 'pt-BR' } },
  ],

  datasComemorativas: [
    { dia: 5, mes: 'janeiro', nome: 'Dia Nacional do Gato', tema: 'saúde felina' },
    { mes: 'março', nome: 'Março Marrom — Leishmaniose', tema: 'leishmaniose canina' },
    { dia: 4, mes: 'abril', nome: 'Dia Mundial da Saúde Animal (OIE)', tema: 'saúde animal global' },
    { mes: 'maio', nome: 'Maio Amarelo — Saúde Renal Pet', tema: 'doença renal crônica' },
    { dia: 9, mes: 'agosto', nome: 'Dia Nacional dos Animais', tema: 'bem-estar animal' },
    { mes: 'agosto', nome: 'Agosto Dourado — Prevenção de Raiva', tema: 'vacinação antirrábica' },
    { dia: 9, mes: 'setembro', nome: 'Dia do Médico Veterinário', tema: 'valorização profissional' },
    { dia: 4, mes: 'outubro', nome: 'Dia Mundial dos Animais', tema: 'bem-estar animal' },
    { mes: 'novembro', nome: 'Novembro Azul — Saúde do Cão Macho', tema: 'orquiepididimite, próstata' },
    { mes: 'dezembro', nome: 'Dezembro Pet — Final de ano seguro', tema: 'acidentes domésticos, fogos' },
  ],

  promptInstructions: {
    classificacao: `Você é um especialista em marketing veterinário e está classificando conteúdo do setor veterinário brasileiro.
Analise o texto e classifique em um dos seguintes pilares editoriais:
- Educação Técnica: protocolos clínicos, exames, diagnósticos, tutoriais para MV
- Diferencial: tecnologia, inovação laboratorial, equipamentos, qualidade
- Autoridade Científica: pesquisas, estudos, evidências, PubMed, congressos
- Datas e Campanhas: datas comemorativas, campanhas sazonais, calendário pet
- Parceria Comercial: parcerias, comarketing, convênios

Responda APENAS com o nome do pilar, sem explicações.`,

    scoreNovidade: `Você é um analista de conteúdo veterinário. Avalie o grau de NOVIDADE de um conteúdo em relação ao histórico de publicações de um cliente.

Critérios (0.0 a 1.0):
- 0.0-0.3: tema idêntico ao publicado nos últimos 6 meses
- 0.4-0.6: tema relacionado, mas ângulo diferente
- 0.7-0.9: tema novo ou ângulo completamente diferente
- 1.0: tema inédito no histórico do cliente

Responda APENAS com um número decimal entre 0.0 e 1.0.`,

    scoreRelevancia: `Você é um especialista em estratégia de conteúdo veterinário. Avalie a RELEVÂNCIA para um laboratório veterinário brasileiro.

Pilares por prioridade: Educação Técnica (35%), Diferencial (25%), Autoridade Científica (20%), Datas e Campanhas (12%), Parceria Comercial (8%).

Critérios (0.0 a 1.0):
- 0.0-0.3: fora do escopo veterinário/laboratorial
- 0.4-0.6: relevância moderada
- 0.7-0.9: alta relevância, alinhado com pilares prioritários
- 1.0: encaixa perfeitamente no pilar de maior peso

Responda APENAS com um número decimal entre 0.0 e 1.0.`,
  },
}
