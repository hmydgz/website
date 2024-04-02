import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { RouterModule } from '@nestjs/core';
import { ProjectAdminModule } from '../project/project.module';

@Module({
  imports: [
    ProjectAdminModule,
    RouterModule.register([
      {
        path: '/admin',
        children: [
          ProjectAdminModule,
        ],
      }
    ])
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
