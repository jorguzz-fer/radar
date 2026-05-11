#!/bin/sh
# docker-entrypoint.sh — sincroniza o schema do Prisma com o banco antes
# de subir o servidor Next.js. Roda em todo deploy.
#
# Comportamento:
# - Se DATABASE_URL não está setada, FALHA o boot (evita app subir sem DB
#   e quebrar silenciosamente no primeiro request). Para pular essa
#   checagem em troubleshooting, set SKIP_DB_PUSH=1
# - Se o schema está alinhado, prisma db push exit 0 ("Already in sync")
# - Se aplicar a sincronização exigiria perda de dados (DROP COLUMN, etc),
#   o comando FALHA e o container não sobe — segurança preferida sobre
#   conveniência. Pra forçar é só conectar e rodar manualmente
# - Se o banco está inacessível, o container falha e o orquestrador
#   (Coolify) reinicia
#
# Para pular o sync (ex: troubleshooting), set SKIP_DB_PUSH=1 no env.

set -e

if [ "${SKIP_DB_PUSH}" = "1" ]; then
  echo "[entrypoint] SKIP_DB_PUSH=1 — pulando sync de schema."
elif [ -z "${DATABASE_URL}" ]; then
  echo "[entrypoint] ERRO: DATABASE_URL não está setada. Configure a env var no orquestrador (ou set SKIP_DB_PUSH=1 para pular)." >&2
  exit 1
else
  echo "[entrypoint] Sincronizando Prisma schema com o banco..."
  prisma db push \
    --schema=/app/packages/database/prisma/schema.prisma \
    --skip-generate
  echo "[entrypoint] Schema OK."
fi

echo "[entrypoint] Iniciando servidor Next.js..."
exec "$@"
