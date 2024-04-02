import { Project } from '@app/db/schemas';
import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { DbModule } from 'src/common/decorator/db-module.decorator';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @DbModule(Project) private readonly projectModule: ReturnModelType<typeof Project>
  ) {}

  create(project: CreateProjectDto) {
    return this.projectModule.create(project);
  }

  getAll() {
    return this.projectModule.find();
  }
}
