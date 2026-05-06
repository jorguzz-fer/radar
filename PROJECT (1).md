# RadarVet — Inteligência Editorial Veterinária

> **One-liner:** Plataforma de inteligência editorial que coleta, processa e ranqueia pautas frescas do setor veterinário (Brasil + global) para agências e laboratórios pararem de produzir "mais do mesmo".

> **Construído por:** Tudo Mudou (Fernando Jorge) — agência de marketing veterinário com clientes ativos: Alchemypet (laboratório de apoio), Clinicat (hospital 24h), Vet Cuidar.

> **Status:** Sprint 0 — scaffolding inicial.

---

## Contexto estratégico (lê antes de começar a codar)

### O problema real

Agências de marketing veterinário e laboratórios produzem conteúdo repetitivo porque:

1. Copiam concorrentes brasileiros que também copiam (eco chamber)
2. Não acompanham PubMed, IDEXX, Antech, dvm360 — o que está saindo lá fora
3. Não têm memória do que já publicaram (repetem temas a cada 4-6 meses)
4. Calendário editorial é feito "no chute" pelo social media

**Resultado prático observado:** post planejado para 06/05 sobre "70% dos erros são pré-analíticos" colidiu diretamente com post da Alchemypet de 03/05 com a mesma tese — descoberto só por busca manual no Facebook deles. Esse erro é caro, recorrente e invisível.

### A tese

Existe demanda paga para uma ferramenta vertical que:

- Rastreia 30-50 fontes confiáveis do setor vet (BR + EN)
- Detecta semanticamente o que **já foi publicado pelo cliente** vs **o que está em alta no setor**
- Entrega 10-15 pautas frescas/semana com ângulo, fonte original e justificativa de novidade
- Custa **menos** que contratar um pesquisador júnior

### Decisão estratégica fundamental

**A engine é pluggable por design (multi-vertical no código), mas a venda é 100% vertical fechado.**

O marketing público diz "RadarVet — para o setor veterinário". Por dentro, o código suporta qualquer vertical via `vocab_pack` + `pilar_pack` + `source_pack`. Isso permite, em 6-12 meses, lançar **RadarHealth** (telemedicina/healthtech), **RadarPodcast**, etc — usando a mesma engine, branding diferente.

**O que NÃO é o produto na fase 1:**

- ❌ Multi-vertical aparente (não é "marketing pra qualquer setor")
- ❌ White-label para outras agências (roadmap longo)
- ❌ Self-service onboarding (clientes pilotos são manuais)
- ❌ Billing automático (cobranças manuais nos primeiros 6 meses)

### Metas de 60 dias

| Métrica | Meta |
|---|---|
| Clientes pagantes | 3-5 |
| Ticket médio | R$ 297-497/mês |
| Receita mensal recorrente | R$ 1.500-2.500 |
| Pautas entregues/cliente/semana | 10-15 |
| Taxa de aprovação de pautas | ≥ 60% |

### Critério para matar o projeto

Se em 60 dias após MVP funcional não houver **3 clientes pagantes**, a tese está errada. Pivot ou shutdown.

---

## Arquitetura técnica

### Stack

Reuso do stack Histocell — você já domina, já tem deploy via Coolify, já tem padrão de monorepo.

| Camada | Tecnologia |
|---|---|
| Monorepo | Turborepo |
| Backend API | NestJS (TypeScript) |
| Dashboard | Next.js 14 (App Router) |
| Banco relacional | PostgreSQL 16 |
| Vector DB | Pinecone (já em uso para Wendy) |
| Workflows de coleta | N8N (já em uso) |
| Scraping headless | Browserless (já em uso) |
| LLM principal | Claude API (Sonnet para processamento, Haiku para tarefas simples) |
| LLM fallback | OpenAI (GPT-4o) |
| Auth (futuro) | Clerk ou Supabase Auth |
| Billing (futuro) | Stripe |
| Deploy | Coolify em VPS própria |
| Logs/observabilidade | Pino + Better Stack |

### Estrutura do monorepo

```
radarvet/
├── apps/
│   ├── api/                  # NestJS - API principal
│   ├── dashboard/            # Next.js - dashboard interno (admin Tudo Mudou)
│   └── client-portal/        # Next.js - portal do cliente (futuro, sprint 6+)
├── packages/
│   ├── database/             # Prisma schema + client
│   ├── types/                # Tipos compartilhados (TypeScript)
│   ├── claude-sdk/           # Wrapper Claude API com retry, cache, custos
│   ├── pinecone-sdk/         # Wrapper Pinecone (multi-tenant)
│   └── vocab-packs/          # Setups por vertical (vet, healthtech, etc)
├── n8n/
│   └── workflows/            # JSON dos workflows N8N versionados
├── docker-compose.yml
├── Dockerfile.api
├── Dockerfile.dashboard
└── turbo.json
```

### Modelo de dados (Prisma)

```prisma
// ============ MULTI-TENANT CORE ============

model Tenant {
  id            String   @id @default(cuid())
  slug          String   @unique           // "alchemypet", "clinicat"
  nome          String
  vertical      String                     // "vet", "healthtech", "podcast"
  vocabPackId   String                     // referencia vocab-packs
  status        TenantStatus @default(ATIVO)
  plano         String   @default("piloto") // "piloto", "starter", "pro"
  criadoEm      DateTime @default(now())

  pilares       TenantPilar[]
  fontes        TenantFonte[]
  pautas        Pauta[]
  postsPublicados PostPublicado[]
  usuarios      Usuario[]

  @@map("tenants")
}

enum TenantStatus { ATIVO INATIVO TRIAL }

model TenantPilar {
  id          String  @id @default(cuid())
  tenantId    String
  nome        String                       // "Educação Técnica"
  pesoPct     Int                          // 35
  descricao   String?
  ordem       Int

  tenant      Tenant  @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@map("tenant_pilares")
}

model Usuario {
  id          String  @id @default(cuid())
  tenantId    String?                      // null = admin Tudo Mudou
  email       String  @unique
  nome        String
  role        Role    @default(VIEWER)

  tenant      Tenant? @relation(fields: [tenantId], references: [id])

  @@map("usuarios")
}

enum Role { ADMIN_PLATFORM ADMIN_TENANT EDITOR VIEWER }

// ============ COLETA ============

model Source {
  id           String     @id @default(cuid())
  tipo         SourceType
  nome         String                      // "PubMed Veterinary", "Agência Pet RSS"
  url          String
  idioma       String                      // "pt-BR", "en"
  frequencia   String                      // "diaria", "semanal"
  ativo        Boolean    @default(true)
  ultimaColeta DateTime?
  config       Json?                       // configurações específicas (ex: query PubMed)

  rawContents  RawContent[]
  tenantFontes TenantFonte[]

  @@map("sources")
}

enum SourceType { PUBMED RSS GOOGLE_NEWS INSTAGRAM TWITTER WEBSITE }

// Liga fontes a tenants (cada cliente assina um conjunto curado)
model TenantFonte {
  tenantId  String
  sourceId  String
  prioridade Int @default(1)              // 1-5

  tenant    Tenant @relation(fields: [tenantId], references: [id], onDelete: Cascade)
  source    Source @relation(fields: [sourceId], references: [id])

  @@id([tenantId, sourceId])
  @@map("tenant_fontes")
}

model RawContent {
  id           String   @id @default(cuid())
  sourceId     String
  externalUrl  String
  titulo       String
  rawText      String   @db.Text
  publishedAt  DateTime?
  idioma       String
  hash         String   @unique            // SHA256 para deduplicar
  coletadoEm   DateTime @default(now())

  source       Source   @relation(fields: [sourceId], references: [id])
  processed    ProcessedContent[]

  @@index([sourceId, publishedAt])
  @@map("raw_contents")
}

// ============ PROCESSAMENTO ============

model ProcessedContent {
  id              String   @id @default(cuid())
  rawId           String
  tenantId        String                    // mesmo conteúdo bruto pode gerar processamento DIFERENTE por tenant
  resumoPt        String   @db.Text
  pilarSugerido   String                    // "Educação Técnica"
  novidadeScore   Float                     // 0.0 a 1.0 - quão único vs histórico do tenant
  relevanciaScore Float                     // 0.0 a 1.0 - quão relevante para os pilares do tenant
  anguloSugerido  String   @db.Text
  embeddingPineconeId String?
  custoTokens     Int                       // tracking de custo Claude API
  processadoEm    DateTime @default(now())

  raw             RawContent @relation(fields: [rawId], references: [id])

  @@unique([rawId, tenantId])
  @@index([tenantId, novidadeScore, relevanciaScore])
  @@map("processed_contents")
}

// ============ MEMÓRIA DO PUBLICADO ============

model PostPublicado {
  id              String   @id @default(cuid())
  tenantId        String
  plataforma      String                    // "instagram", "linkedin", "blog"
  externalUrl     String?
  publicadoEm     DateTime
  titulo          String
  copyFull        String   @db.Text
  pilar           String?
  layout          String?
  embeddingPineconeId String?
  performanceJson Json?                     // alcance, engajamento, saves
  fonte           PostFonte                 // como foi importado

  tenant          Tenant   @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@index([tenantId, publicadoEm])
  @@map("posts_publicados")
}

enum PostFonte { MANUAL_INPUT INSTAGRAM_API SCRAPE PLANILHA_N8N }

// ============ PAUTAS (saída do sistema) ============

model Pauta {
  id              String     @id @default(cuid())
  tenantId        String
  processedId     String?                   // null se pauta criada manualmente
  status          PautaStatus @default(SUGERIDA)
  titulo          String
  resumo          String     @db.Text
  anguloSugerido  String     @db.Text
  pilarSugerido   String
  fonteOriginal   String                    // URL ou descrição
  scoreNovidade   Float
  scoreRelevancia Float
  scoreFinal      Float                     // calculado: novidade * 0.5 + relevancia * 0.5
  semanaRef       String                    // "2026-W19" - semana ISO
  aprovadoPor     String?                   // userId
  aprovadoEm      DateTime?
  rejeitadoMotivo String?
  postPublicadoId String?                   // se virou post de fato
  criadoEm        DateTime   @default(now())

  tenant          Tenant     @relation(fields: [tenantId], references: [id], onDelete: Cascade)

  @@index([tenantId, semanaRef, scoreFinal])
  @@map("pautas")
}

enum PautaStatus { SUGERIDA APROVADA REJEITADA EM_PRODUCAO PUBLICADA }

// ============ AUDITORIA E BILLING ============

model UsageLog {
  id        String   @id @default(cuid())
  tenantId  String?
  acao      String                          // "claude_api_call", "pinecone_query"
  custoUsd  Float?
  metadata  Json?
  criadoEm  DateTime @default(now())

  @@index([tenantId, criadoEm])
  @@map("usage_logs")
}
```

### Vocab Packs (a alma da abstração)

Cada vertical tem um `vocab-pack` em TypeScript. **Esta é a chave da arquitetura pluggable.**

```typescript
// packages/vocab-packs/src/vet/index.ts

export const VetVocabPack: VocabPack = {
  vertical: 'vet',
  nome: 'Veterinária',

  // Termos do domínio para enriquecer queries de busca
  termosCore: [
    'medicina veterinária', 'veterinary medicine', 'small animal',
    'cães e gatos', 'feline', 'canine', 'patologia veterinária',
    'diagnóstico veterinário', 'laboratório veterinário'
  ],

  // Pilares editoriais sugeridos (cliente pode customizar)
  pilaresPadrao: [
    { nome: 'Educação Técnica', pesoPct: 35, descricao: '...' },
    { nome: 'Diferencial', pesoPct: 25, descricao: '...' },
    { nome: 'Autoridade Científica', pesoPct: 20, descricao: '...' },
    { nome: 'Datas e Campanhas', pesoPct: 12, descricao: '...' },
    { nome: 'Parceria Comercial', pesoPct: 8, descricao: '...' }
  ],

  // Fontes pré-aprovadas para o vertical
  fontesPadrao: [
    { tipo: 'PUBMED', nome: 'PubMed Veterinary', config: { query: 'veterinary OR canine OR feline' } },
    { tipo: 'RSS', nome: 'Agência Pet', url: 'https://noticias.agencia.pet/feed' },
    { tipo: 'RSS', nome: 'dvm360', url: 'https://www.dvm360.com/rss' },
    { tipo: 'RSS', nome: 'IDEXX Blog', url: 'https://www.idexx.com/blog/feed' },
    { tipo: 'INSTAGRAM', nome: '@idexx', config: { handle: 'idexx' } }
  ],

  // Datas comemorativas do setor
  datasComemorativas: [
    { data: '05', mes: 'maio', nome: 'Maio Amarelo - Saúde Renal Pet', tema: 'doença renal' },
    { data: '09', mes: 'setembro', dia: 9, nome: 'Dia do Veterinário' },
    // ...
  ],

  // Prompt parts para classificação e scoring
  promptInstructions: {
    classificacao: `Você está classificando conteúdo do setor veterinário...`,
    scoreNovidade: `Considere o histórico do cliente e classifique de 0.0 a 1.0...`,
    scoreRelevancia: `Considerando os pilares editoriais do cliente...`
  }
};

// packages/vocab-packs/src/healthtech/index.ts
export const HealthtechVocabPack: VocabPack = { /* análogo */ };
```

**Para abrir um novo vertical no futuro: criar 1 arquivo de vocab-pack. Não toca no código da engine.**

---

## Sprints — plano de execução

### Sprint 0 — Setup (3 dias)

**Objetivo:** repo funcional, infraestrutura up, primeiro endpoint vivo.

- [ ] `git init` + push para GitHub privado `tudomudou/radarvet`
- [ ] Scaffolding Turborepo com 2 apps (api, dashboard) + 4 packages
- [ ] Postgres + Pinecone provisionados na VPS Coolify
- [ ] Prisma schema completo (cole o schema deste documento)
- [ ] Migrations rodando
- [ ] NestJS API com endpoint `GET /health` funcionando
- [ ] Next.js dashboard vazio com layout base + auth stub
- [ ] Docker Compose dev local + Dockerfiles produção
- [ ] Coolify: deploy preview de API e Dashboard
- [ ] `.env.example` documentado
- [ ] README com setup instructions

**Critério de aceite:** dashboard em `radar.tudomudou.com.br` carrega tela vazia logada como admin; API em `api.radar.tudomudou.com.br/health` retorna 200.

### Sprint 1 — Coleta MVP (5 dias)

**Objetivo:** primeiro fluxo coletando conteúdo real, populando `raw_contents`.

- [ ] Vocab pack `vet` populado com pilares e 5 fontes core
- [ ] Tenant `alchemypet` criado via seed
- [ ] N8N workflow: PubMed scheduler (semanal)
- [ ] N8N workflow: RSS multi-source (diário) — ler 5 RSS feeds vet
- [ ] Endpoint `POST /api/internal/ingest` que recebe payload do N8N e popula `raw_contents`
- [ ] Deduplicação por hash SHA256
- [ ] Logs estruturados (Pino) de cada coleta

**Critério de aceite:** após 1 semana rodando, `raw_contents` tem ≥ 100 registros únicos do setor vet.

### Sprint 2 — Processamento (5 dias)

**Objetivo:** Claude API processa cada raw_content para cada tenant relevante.

- [ ] Wrapper `@radarvet/claude-sdk` com retry, cache, log de custo
- [ ] Worker (BullMQ ou simples cron) que pega `raw_contents` não processados
- [ ] Pipeline por registro: tradução PT (se EN) → resumo → classificação por pilar → ângulo sugerido
- [ ] Geração de embedding via `text-embedding-3-large` (OpenAI) ou Cohere
- [ ] Salvar em Pinecone com metadados `{tenant_id, pilar, data, tipo}`
- [ ] Score de novidade: query Pinecone vs embeddings de `posts_publicados` do mesmo tenant
- [ ] Score de relevância: comparar resumo vs pilares do tenant
- [ ] Popular `processed_contents`

**Critério de aceite:** dado um `raw_content`, o sistema gera um `processed_content` com scores razoáveis em < 30s.

### Sprint 3 — Geração de Pautas (4 dias)

**Objetivo:** ranking semanal das melhores pautas por tenant.

- [ ] Worker semanal (toda segunda 06h) que:
  - Lê `processed_contents` da última semana com `score_final ≥ 0.7`
  - Cria registros em `pautas` com status `SUGERIDA`
  - Limita a 15 pautas/tenant/semana (top scores)
- [ ] Notificação WhatsApp via Evolution API: "RadarVet: 12 pautas frescas pra Alchemypet esta semana"

**Critério de aceite:** toda segunda às 6h, Fernando recebe notificação com link pro dashboard.

### Sprint 4 — Dashboard (5 dias)

**Objetivo:** interface pra revisar e aprovar pautas.

- [ ] Login admin Tudo Mudou (Clerk ou solução simples por enquanto)
- [ ] Tela "Pautas da Semana" por tenant
- [ ] Cada pauta como card: título, resumo, ângulo, fonte, score, botões aprovar/rejeitar
- [ ] Filtros por pilar, score, status
- [ ] Aprovação one-click → muda status pra APROVADA
- [ ] Botão "Exportar para planilha N8N" (CSV ou Google Sheets API)
- [ ] Tela "Histórico do Cliente" — mostra `posts_publicados` para contexto
- [ ] Tela "Importar posts publicados" — paste de URLs ou upload CSV

**Critério de aceite:** Fernando consegue, em 15 minutos toda segunda, revisar e aprovar 10 pautas para Alchemypet.

### Sprint 5 — Multi-fonte avançado (5 dias)

**Objetivo:** ampliar fontes para realmente "monitorar o setor".

- [ ] N8N workflow: scraper Browserless de Instagram (5 perfis vet de referência: IDEXX, Antech, dvm360, etc)
- [ ] N8N workflow: Google News com query do vocab-pack
- [ ] N8N workflow: monitoramento de concorrentes BR (Vetnos, Provet, Tecsa, NeoVet)
- [ ] Tratamento de rate-limit e retry

**Critério de aceite:** ≥ 30 fontes ativas, ≥ 500 raw_contents/semana.

### Sprint 6 — Onboarding manual de cliente (3 dias)

**Objetivo:** processo claro para adicionar cliente novo.

- [ ] Tela admin "Novo Cliente" — wizard de 4 etapas:
  1. Dados básicos (nome, slug, vocab_pack)
  2. Pilares editoriais (sugestão automática do vocab-pack, editável)
  3. Fontes (sugestão automática do vocab-pack, marcar quais ativar)
  4. Importar histórico de posts publicados (URLs ou CSV)
- [ ] Trigger inicial de coleta + processamento

**Critério de aceite:** Fernando consegue adicionar Clinicat como segundo cliente em < 30min.

### Sprint 7 — Polimento + Primeiros Pagantes (paralelo aos anteriores)

- [ ] Landing simples em `radar.tudomudou.com.br` (página de venda)
- [ ] Pricing definido: Piloto R$ 297/mês, Pro R$ 497/mês
- [ ] Manual operacional para uso do dashboard
- [ ] Primeira reunião comercial com Alchemypet (apresentar valor, propor piloto)

---

## Variáveis de ambiente (.env)

```bash
# Database
DATABASE_URL="postgresql://radarvet:senha@postgres:5432/radarvet"
DIRECT_URL="postgresql://radarvet:senha@postgres:5432/radarvet"

# LLMs
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...

# Vector DB
PINECONE_API_KEY=...
PINECONE_INDEX_NAME=radarvet
PINECONE_ENVIRONMENT=...

# N8N (interno)
N8N_WEBHOOK_INGEST_URL=http://n8n:5678/webhook/ingest
RADARVET_API_INGEST_TOKEN=token-secreto-rotacionavel

# WhatsApp (Evolution API existente)
EVOLUTION_API_URL=...
EVOLUTION_API_KEY=...
EVOLUTION_INSTANCE=tudomudou-bot

# Auth (futuro - sprint 6+)
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Observabilidade
BETTER_STACK_TOKEN=

# App
NEXT_PUBLIC_API_URL=https://api.radar.tudomudou.com.br
NODE_ENV=development
```

---

## Decisões arquiteturais (ADRs resumidos)

### ADR-001: Multi-tenant desde o dia 1
**Decisão:** Toda tabela com dados de cliente tem `tenant_id`. Pinecone usa namespace por tenant.
**Por quê:** Refatorar multi-tenant depois custa 5x mais caro. Tese de SaaS futuro requer.

### ADR-002: Vocab Packs em código, não em banco
**Decisão:** Configurações por vertical são código TypeScript, não JSON em banco.
**Por quê:** Type safety, versionamento via Git, code review obrigatório. Banco para dados de clientes, código para configuração de produto.

### ADR-003: Claude Sonnet para processamento, Haiku para tarefas simples
**Decisão:** Tradução, classificação, ângulo → Sonnet. Tarefas de validação simples → Haiku.
**Por quê:** Custo. Sonnet ~10x mais caro que Haiku. Use só onde qualidade importa.

### ADR-004: N8N para coleta, NestJS para processamento
**Decisão:** N8N coleta e POST pra API. API faz processamento inteligente.
**Por quê:** N8N é ótimo pra agendamento e integrações simples. Lógica complexa (Claude, Pinecone, scoring) em código TypeScript versionado.

### ADR-005: Sem self-service nos primeiros 6 meses
**Decisão:** Onboarding de cliente é manual via interface admin.
**Por quê:** Complexidade brutal vs zero ROI antes de 10+ clientes pagantes.

---

## Primeira mensagem para Claude Code

Cole isto no Claude Code para começar:

```
Olá! Vou construir o RadarVet — uma plataforma de inteligência editorial veterinária.

Leia o arquivo PROJECT.md neste repositório para contexto completo. Lá está tudo:
- Visão de produto e estratégia
- Stack técnico (Turborepo + NestJS + Next.js + Postgres + Pinecone)
- Schema Prisma completo
- Estrutura de pastas
- Sprints planejados

Estamos no Sprint 0 — Setup. Quero que você:

1. Confirme que leu o PROJECT.md me devolvendo um resumo de 5 linhas
2. Liste o que falta da minha máquina (verificar Node, pnpm, Docker, etc)
3. Proponha o primeiro commit com o scaffolding inicial do monorepo
4. NÃO comece a codar antes de eu aprovar o plano

Importante:
- Reuso máximo do padrão Histocell (já uso esse stack em produção)
- Multi-tenant desde a primeira tabela criada
- Nada de over-engineering — MVP funcional em 5-6 semanas

Pode começar.
```

---

## Próximos checkpoints comigo (Claude no chat)

Quando você voltar pra cá, traga:

1. **Após Sprint 0:** print do dashboard vazio rodando em `radar.tudomudou.com.br` — eu valido o setup
2. **Após Sprint 1:** primeira lista de raw_contents coletados — eu reviso a qualidade das fontes
3. **Após Sprint 2:** 5 processed_contents de exemplo — eu reviso o output do Claude e ajuste prompts
4. **Após Sprint 3:** primeira leva de pautas geradas — eu valido se "fariam diferença" pro Alchemypet
5. **Antes do Sprint 7:** roteiro da reunião comercial com o primeiro cliente

O resto (código, debug, deploy) você executa no Claude Code.

---

**Última coisa importante:** se em qualquer ponto você sentir que está saindo do escopo (white-label, multi-vertical aparente, novas features fora do plano), volte aqui. Eu vou ser duro novamente. Disciplina é o ativo mais valioso desse projeto.

— Tudo Mudou + Claude
05 de maio de 2026
