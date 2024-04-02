import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { GlobalService } from './modules/global/global.service';
import { GlobalController } from './modules/global/global.controller';
import { GlobalModule } from './modules/global/global.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResInterceptor } from './common/interceptor/res.interceptor';
import { DbModule } from '@app/db';
import { Project } from '@app/db/schemas';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env.local',
    }),
    DbModule.forRoot('MONGODB_URI', { dbName: 'website' }),
    DbModule.forFeature([
      Project,
    ]),
    AuthModule,
    AdminModule,
    GlobalModule,
  ],
  controllers: [AppController, GlobalController],
  providers: [
    AppService,
    GlobalService,
    { provide: APP_INTERCEPTOR, useClass: ResInterceptor },
  ],
})
export class AppModule {}
