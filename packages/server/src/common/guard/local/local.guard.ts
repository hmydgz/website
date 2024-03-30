import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

/**
 * 限制只有本地IP可以访问
 */
@Injectable()
export class LocalGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ip = context.switchToHttp().getRequest<Request>().ip;
    return ['::1', '127.0.0.1'].some(v => ip.includes(v));
  }
}
