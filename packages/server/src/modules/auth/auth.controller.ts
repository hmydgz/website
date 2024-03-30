import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from 'src/common/guard/local/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 检查token是否有效，仅限本地调用
   */
  @UseGuards(LocalGuard)
  @Get('check-token/:token')
  async checkAdmin(@Param('token') token: string) {
    return { data: await this.authService.checkToken(token) };
  }

  @Post('token')
  async createToken(@Body('userId') userId: string) {
    return { token: await this.authService.createToken(userId) };
  }
}
