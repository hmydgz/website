import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { GlobalService } from './modules/global/global.service';
import { GlobalController } from './modules/global/global.controller';
import { GlobalModule } from './modules/global/global.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      envFilePath: '.env.local',
    }),
    AdminModule,
    GlobalModule,
    AuthModule,
  ],
  controllers: [AppController, GlobalController],
  providers: [AppService, GlobalService],
})
export class AppModule {}
