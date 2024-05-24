import { Body, Controller, Post } from '@nestjs/common';
import { ManagersService } from './manages.service';
import { ManagerDTO } from './dtos/manager.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('manages')
export class ManagersController {
  constructor(private readonly managersService: ManagersService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar admin como gerenciador de um catálogo' })
  @ApiBody({ type: ManagerDTO })
  @ApiResponse({
    status: 201,
    description: 'O admin foi registrado como gerenciador com sucesso',
    type: ManagerDTO,
  })
  async create(@Body() manager: ManagerDTO) {
    return this.managersService.create(manager);
  }

}
