import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

interface WhatsappNumberCheckResult {
  exists: boolean;
  jid: string | null;
  number: string;
}

interface EvolutionCheckResponse {
  exists: boolean;
  jid: string;
  number: string;
}

@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly instance: string;

  constructor(private readonly config: ConfigService) {
    this.baseUrl = this.config.getOrThrow<string>('EVOLUTION_API_URL');
    this.apiKey = this.config.getOrThrow<string>('EVOLUTION_API_KEY');
    this.instance = this.config.getOrThrow<string>('EVOLUTION_INSTANCE');
  }

  // Normaliza número BR para formato internacional (55 + DDD + número)
  private normalizePhone(phone: string): string {
    const digits = phone.replace(/\D/g, '');
    if (digits.startsWith('55') && digits.length >= 12) return digits;
    return `55${digits}`;
  }

  async checkNumberExists(phone: string): Promise<WhatsappNumberCheckResult> {
    const number = this.normalizePhone(phone);

    const response = await fetch(
      `${this.baseUrl}/chat/whatsappNumbers/${this.instance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: this.apiKey,
        },
        body: JSON.stringify({ numbers: [number] }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Evolution API error: ${response.status} ${response.statusText}`,
      );
    }

    const results = (await response.json()) as EvolutionCheckResponse[];
    const result = results[0];

    this.logger.log(
      `WhatsApp check for ${number}: exists=${result?.exists ?? false}`,
    );

    return {
      exists: result?.exists ?? false,
      jid: result?.jid ?? null,
      number,
    };
  }

  async sendTextMessage(phone: string, message: string): Promise<void> {
    const { exists, number } = await this.checkNumberExists(phone);

    if (!exists) {
      this.logger.warn(
        `Attempted to send message to ${number} but number has no WhatsApp`,
      );
      return;
    }

    const response = await fetch(
      `${this.baseUrl}/message/sendText/${this.instance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: this.apiKey,
        },
        body: JSON.stringify({
          number,
          textMessage: { text: message },
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Evolution API send error: ${response.status} ${response.statusText}`,
      );
    }

    this.logger.log(`Message sent to ${number}`);
  }
}
