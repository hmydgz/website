import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('check-token/:token')
  async checkAdmin(@Param('token') token: string) {
    return { data: await this.authService.checkToken(token) };
  }

  @Post('token')
  async createToken(@Body('userId') userId: string) {
    return { token: await this.authService.createToken(userId) };
  }
}
