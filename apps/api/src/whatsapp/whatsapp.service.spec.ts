import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { WhatsappService } from './whatsapp.service';

const mockConfig = {
  getOrThrow: (key: string) => {
    const values: Record<string, string> = {
      EVOLUTION_API_URL: 'http://evolution.test',
      EVOLUTION_API_KEY: 'test-key',
      EVOLUTION_INSTANCE: 'test-instance',
    };
    return values[key];
  },
};

describe('WhatsappService', () => {
  let service: WhatsappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WhatsappService,
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<WhatsappService>(WhatsappService);
  });

  describe('normalizePhone (via checkNumberExists)', () => {
    it('normalizes BR number with parens and hyphen', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ exists: true, jid: '5511911157456@s.whatsapp.net', number: '5511911157456' }],
      }) as jest.Mock;

      const result = await service.checkNumberExists('(11) 91115-7456');
      expect(result.number).toBe('5511911157456');
    });

    it('keeps number already in international format', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ exists: false, jid: '', number: '5511911157456' }],
      }) as jest.Mock;

      const result = await service.checkNumberExists('5511911157456');
      expect(result.number).toBe('5511911157456');
    });
  });

  describe('checkNumberExists', () => {
    it('returns exists=true when Evolution API says so', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ exists: true, jid: '5511911157456@s.whatsapp.net', number: '5511911157456' }],
      }) as jest.Mock;

      const result = await service.checkNumberExists('(11) 91115-7456');
      expect(result.exists).toBe(true);
      expect(result.jid).toBe('5511911157456@s.whatsapp.net');
    });

    it('returns exists=false when number has no WhatsApp', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ exists: false, jid: '', number: '5511911157456' }],
      }) as jest.Mock;

      const result = await service.checkNumberExists('(11) 91115-7456');
      expect(result.exists).toBe(false);
    });

    it('throws when Evolution API returns non-ok status', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 401,
        statusText: 'Unauthorized',
      }) as jest.Mock;

      await expect(service.checkNumberExists('(11) 91115-7456')).rejects.toThrow(
        'Evolution API error: 401 Unauthorized',
      );
    });
  });

  describe('sendTextMessage', () => {
    it('skips send when number has no WhatsApp', async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ exists: false, jid: '', number: '5511911157456' }],
      }) as jest.Mock;

      await service.sendTextMessage('(11) 91115-7456', 'Olá!');
      // only the check call, no send call
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('sends message when number exists', async () => {
      global.fetch = jest
        .fn()
        .mockResolvedValueOnce({
          ok: true,
          json: async () => [{ exists: true, jid: '5511911157456@s.whatsapp.net', number: '5511911157456' }],
        })
        .mockResolvedValueOnce({ ok: true }) as jest.Mock;

      await service.sendTextMessage('(11) 91115-7456', 'Olá!');
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });
});
