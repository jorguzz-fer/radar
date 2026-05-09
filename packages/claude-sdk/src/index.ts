import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '@radar/database'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export type ClaudeModel = 'claude-sonnet-4-6' | 'claude-haiku-4-5-20251001'

export interface ClaudeCallOptions {
  model?: ClaudeModel
  maxTokens?: number
  tenantId?: string
  acao?: string
}

export interface ClaudeCallResult<T = string> {
  content: T
  inputTokens: number
  outputTokens: number
  totalTokens: number
  custoUsd: number
}

const COST_PER_1M: Record<ClaudeModel, { input: number; output: number }> = {
  'claude-sonnet-4-6': { input: 3.0, output: 15.0 },
  'claude-haiku-4-5-20251001': { input: 0.25, output: 1.25 },
}

export async function claudeCall(
  prompt: string,
  systemPrompt: string,
  options: ClaudeCallOptions = {},
): Promise<ClaudeCallResult> {
  const model: ClaudeModel = options.model ?? 'claude-sonnet-4-6'
  const maxTokens = options.maxTokens ?? 1024

  const response = await anthropic.messages.create({
    model,
    max_tokens: maxTokens,
    system: systemPrompt,
    messages: [{ role: 'user', content: prompt }],
  })

  const inputTokens = response.usage.input_tokens
  const outputTokens = response.usage.output_tokens
  const totalTokens = inputTokens + outputTokens
  const costs = COST_PER_1M[model]
  const custoUsd = (inputTokens / 1_000_000) * costs.input + (outputTokens / 1_000_000) * costs.output

  if (options.tenantId || options.acao) {
    await prisma.usageLog.create({
      data: {
        tenantId: options.tenantId,
        acao: options.acao ?? 'claude_api_call',
        custoUsd,
        metadata: { model, inputTokens, outputTokens },
      },
    })
  }

  const content = response.content[0].type === 'text' ? response.content[0].text : ''
  return { content, inputTokens, outputTokens, totalTokens, custoUsd }
}

export async function claudeCallWithRetry(
  prompt: string,
  systemPrompt: string,
  options: ClaudeCallOptions = {},
  maxRetries = 3,
): Promise<ClaudeCallResult> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await claudeCall(prompt, systemPrompt, options)
    } catch (err: unknown) {
      const isRateLimit =
        err instanceof Anthropic.RateLimitError || err instanceof Anthropic.APIStatusError
      if (!isRateLimit || attempt === maxRetries - 1) throw err
      const delay = Math.pow(2, attempt) * 1000
      await new Promise((r) => setTimeout(r, delay))
    }
  }
  throw new Error('claudeCallWithRetry: max retries exceeded')
}

export { anthropic }
