import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
  constructor(
    readonly projectService: ProjectService
  ) {}

  @Get()
  async getProjects() {
    return await this.projectService.getAll();
  }
}

@Controller('project')
export class ProjectAdminController extends ProjectController {
  @Post()
  async createProject(@Body() project: CreateProjectDto) {
    return await this.projectService.create(project);
  }
}
