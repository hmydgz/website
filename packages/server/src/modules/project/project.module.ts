import { Module } from '@nestjs/common';
import { ProjectAdminController, ProjectController } from './project.controller';
import { ProjectService } from './project.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}

@Module({
  controllers: [ProjectAdminController],
  providers: [ProjectService]
})
export class ProjectAdminModule {}