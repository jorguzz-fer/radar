# RadarVet — Inteligência Editorial Veterinária

Plataforma de inteligência editorial que coleta, processa e ranqueia pautas frescas do setor veterinário para agências e laboratórios.

**Domínio:** radar.tudomudou.com.br · API: api.radar.tudomudou.com.br

---

## Stack

| Camada | Tecnologia |
|---|---|
| Monorepo | Turborepo + pnpm workspaces |
| API | NestJS 10 (Fastify) |
| Dashboard | Next.js 14 (App Router) |
| Banco | PostgreSQL 16 + Prisma |
| Vector DB | Pinecone (namespace por tenant) |
| LLM | Claude Sonnet (processamento) + Haiku (tarefas simples) |
| Coleta | N8N workflows |
| Deploy | Coolify |

## Estrutura

```
radar/
├── apps/
│   ├── api/              # NestJS — porta 3001
│   └── dashboard/        # Next.js — porta 3000
├── packages/
│   ├── database/         # Prisma schema + client
│   ├── types/            # Tipos TypeScript compartilhados
│   ├── claude-sdk/       # Wrapper Claude API (retry + custo)
│   ├── pinecone-sdk/     # Wrapper Pinecone (multi-tenant)
│   └── vocab-packs/      # Configurações por vertical (vet, etc)
└── n8n/workflows/        # JSON dos workflows N8N versionados
```

## Setup local

### Pré-requisitos

- Node.js >= 20
- pnpm >= 9 (`npm i -g pnpm`)
- Docker + Docker Compose

### 1. Instalar dependências

```bash
pnpm install
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
# Edite .env com suas credenciais
```

### 3. Subir banco de dados

```bash
docker compose up postgres -d
```

### 4. Rodar migrations + seed

```bash
pnpm db:migrate
pnpm db:seed
```

### 5. Subir em desenvolvimento

```bash
pnpm dev
```

- Dashboard: http://localhost:3000
- API: http://localhost:3001/api
- Health: http://localhost:3001/api/health

## Comandos úteis

```bash
pnpm build          # Build completo (todos os apps/packages)
pnpm db:generate    # Regenerar Prisma client
pnpm db:migrate     # Rodar migrations (produção)
pnpm db:seed        # Popular banco com dados iniciais (Alchemypet)
```

## Sprints

| Sprint | Objetivo | Status |
|---|---|---|
| 0 | Setup — scaffolding + infraestrutura | ✅ |
| 1 | Coleta MVP — N8N + ingestão | ⏳ |
| 2 | Processamento — Claude + Pinecone | ⏳ |
| 3 | Geração de pautas semanal | ⏳ |
| 4 | Dashboard de revisão | ⏳ |
| 5 | Multi-fonte avançado | ⏳ |
| 6 | Onboarding manual de clientes | ⏳ |
| 7 | Primeiros pagantes | ⏳ |

## Critério de sucesso (60 dias)

3 clientes pagantes · R$ 1.500-2.500 MRR · 10-15 pautas/cliente/semana

---

Construído por **Tudo Mudou** (Fernando Jorge)
