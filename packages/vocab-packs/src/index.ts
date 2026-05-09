import type { VocabPack } from '@radar/types'
import { VetVocabPack } from './vet'

export { VetVocabPack } from './vet'

const registry: Record<string, VocabPack> = {
  vet: VetVocabPack,
}

export function getVocabPack(vertical: string): VocabPack {
  const pack = registry[vertical]
  if (!pack) throw new Error(`VocabPack não encontrado para vertical: ${vertical}`)
  return pack
}

export function listVerticals(): string[] {
  return Object.keys(registry)
}
