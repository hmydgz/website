import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly config: ConfigService) {}
  tokenMap = new Map<string, string>();

  async checkToken(token: string) {
    if (!this.tokenMap.has(token)) return false;
    return this.tokenMap.get(token) === process.env.ADMIN_ID;
  }

  async createToken(userId: string) {
    const token = randomUUID();
    this.tokenMap.set(token, userId);
    return token;
  }
}
