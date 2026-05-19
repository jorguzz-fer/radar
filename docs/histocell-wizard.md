# Histocell — Wizard de Lançamento de Serviços

> Como transformar a planilha plana de 650 serviços (`Histocell-serviços.xlsx`)
> numa jornada guiada que a recepcionista consegue usar sem decorar código.

## 1. O problema

A planilha é um espelho do faturamento legado: cada variação vira uma linha
com código próprio. Exemplos reais extraídos:

- **Imunohistoquímica: 355 linhas.** O mesmo marcador aparece 2x —
  `Imuno com A/C do cliente Ki67` (cód **571**, R$ 32) e
  `Imuni c Anticorpo Histocell Ki67` (cód **460**, R$ 85).
- **Macroscopia:** o preço muda por nº de amostras —
  `Simples 1 amostra` cód 149, `Simples 2 amostras` cód **215** (R$ 12),
  `Simples 3 amostras` cód 69, `acima 3` cód 99.
- **40 colorações especiais** quase todas R$ 19,80 (rotina) / R$ 22 (pesquisa).

Pedir para a recepção achar isso numa lista de 650 itens é inviável. O pedido
médico não chega como "código 387" — chega como *"biópsia gástrica, HE +
pesquisa de H. pylori"* ou *"painel de mama"*.

## 2. Estratégia: falar a língua do pedido médico

O wizard captura a **intenção clínica**; um *resolver* traduz para os
códigos/preços reais por baixo. O usuário nunca vê código durante a escolha —
só no resumo, já pronto para o financeiro.

### Fluxo (4 passos)

1. **Finalidade** — Rotina vs Pesquisa. Decide a coluna de preço
   (`valorRotina` | `valorPesquisa`) para todo o pedido.
2. **Categoria** — Anátomo-Patológico · IHC · Colorações · Imunofluorescência · Citologia.
3. **Configuração dinâmica** — perguntas específicas por categoria (abaixo).
4. **Resumo** — carrinho com códigos reais traduzidos + total.

## 3. Inteligência clínica por categoria

### 3.1 Anátomo-Patológico — resolver de macroscopia

A recepção registra **o que chegou** (nº de frascos + tipo de material). O
sistema **pré-seleciona** o código provável, mas o nº final de blocos e o
código definitivo são **confirmados na clivagem** pelo patologista — a
recepcionista raramente sabe isso no balcão. Modelar isso como "verdade
definitiva na recepção" seria irreal.

Regra extra de domínio: **material ósseo exige descalcificação**. O wizard
**auto-anexa** o serviço `Descalcificação` (cód **10**) — a recepção não
precisa lembrar.

### 3.2 IHC — painéis clínicos + toggle de anticorpo

- **Toggle "A/C do cliente?"** alterna entre as duas famílias de código.
  O resolver lê a **linha real** (não fixa 32/85), então exceções como
  APP (R$ 60), beta-catenina (R$ 55) ou DNAJB9 (R$ 65) saem corretas.
- **Painéis clínicos de 1 clique** — o conhecimento que falta na planilha.
  O patologista pede "painel de mama", não 4 marcadores soltos:

  | Painel | Marcadores |
  |---|---|
  | Mama | RE, RP, HER2, Ki67 |
  | Linfoma (triagem) | CD20, CD3, CD5, CD23, CD10, BCL2, BCL6, Ki67 |
  | Próstata | PSA, Racemase, p63, AE1/AE3 |
  | Pulmão | TTF-1, p40, CK7, Napsina |
  | Origem indeterminada (CUP) | AE1/AE3, CK7, CK20, TTF-1, CDX2, PAX8 |
  | Neuroendócrino, Melanoma, Sarcoma, Rim, TGI | … |

  Cada painel expande nos **códigos reais** via índice de 326 marcadores.
- **Marcador não ofertado** (ex: SOX10, Sinaptofisina não existem na
  planilha): o resolver marca como faltante e mostra *"consultar
  laboratório"* — **nunca inventa código**.

### 3.3 Colorações — por pergunta clínica

Em vez de listar 40 técnicas alfabéticas, agrupa pela **pergunta diagnóstica**:

| Pergunta clínica | Coloração (código real) |
|---|---|
| Pesquisa de BAAR / micobactéria | Ziehl-Neelsen (44) |
| Pesquisa de fungos | Grocott (29), PAS (32) |
| Pesquisa de H. pylori | Giemsa (27), Warthin-Starry (845) |
| Amiloide | Vermelho Congo (42) |
| Fibrose hepática / colágeno | Masson (40), Reticulina (37), Picrossírius (36) |
| Ferro / cobre | Perls (35) / Rodanina (38) |
| Membrana basal glomerular | PAMS (31), Prata de Jones (195) |

### 3.4 Imunofluorescência / Citologia

Fluxos **separados** do bloco de parafina. IF traz o painel renal real
(C3C-IgM, C4D, IgG-IgA, K/L, PLA2R). Citologia é workflow sem bloco
(esfregaço, cell block, citospin, Papanicolaou).

## 4. Modelo de dados recomendado

Não modele cada linha como `Produto`. Modele:

```
Procedimento (lógico)  ── conhecimento clínico, estável
   + eixos de variação  (nº amostras, origem do A/C, finalidade)
        │
        ▼
   Resolver  ──────────▶  Código legado + preço  (catalog.json)
```

O wizard manipula **procedimentos + modificadores**; o resolver mapeia para o
código/preço legado, mantendo a integração de faturamento intacta.

## 5. Artefatos neste branch

| Arquivo | O que é |
|---|---|
| `data/histocell/catalog.json` | 650 serviços reais extraídos do xlsx, schema uniforme |
| `data/histocell/clinical-intelligence.json` | Índice de 326 marcadores + 10 painéis + colorações por pergunta + resolver de macroscopia |
| `histocell-data.js` | Bundle compacto consumido pelo mockup (auto-gerado) |
| `mockup-histocell.html` | Wizard funcional Vue 3 ligado aos **dados reais** |

> Os JSON são derivados de `Histocell-serviços.xlsx` (no branch `main`).
> A camada clínica (painéis, agrupamento de colorações) é **curada** —
> conhecimento de Anatomia Patológica — mas **todos os códigos e preços
> vêm da planilha real**, nunca inventados.
