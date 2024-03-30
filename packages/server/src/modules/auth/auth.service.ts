import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class AuthService {
  tokenMap = new Map<string, string>();
  userIdMap = new Map<string, string>();
  adminId: string;
  constructor(private readonly config: ConfigService) {
    this.adminId = this.config.get('ADMIN_ID')
  }

  async checkToken(token: string) {
    return this.tokenMap.has(token);
  }

  async createToken(userId: string) {
    const token = randomUUID()
    if (userId !== this.adminId) return token
    if (this.userIdMap.has(userId)) this.tokenMap.delete(this.userIdMap.get(userId))
    this.tokenMap.set(token, userId)
    this.userIdMap.set(userId, token)
    return token
  }
}
