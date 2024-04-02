import { Module } from '@nestjs/common';
import { GlobalController } from './global.controller';
import { GlobalService } from './global.service';
import { ProjectModule } from '../project/project.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ProjectModule,
    RouterModule.register([
      {
        path: 'global',
        children: [
          ProjectModule,
        ]
      },
    ]),
  ],
  controllers: [GlobalController],
  providers: [GlobalService],
})
export class GlobalModule { }
