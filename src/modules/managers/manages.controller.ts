import { Body, Controller, Post } from '@nestjs/common';
import { ManagersService } from './manages.service';
import { ManagerDTO } from './dtos/manager.dto';

@Controller('manages')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  async create(@Body() manager: ManagerDTO) {
    return this.managersService.create(manager);
  }

}
