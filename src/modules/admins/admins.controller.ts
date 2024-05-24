import { Body, Controller, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminDTO } from './dtos/admin.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar um novo administrador' })
  @ApiBody({ type: AdminDTO })
  @ApiResponse({
    status: 201,
    description: 'O administrador foi registrado com sucesso',
    type: AdminDTO,
  })
  async create(@Body() user: AdminDTO){
    return this.adminsService.create(user);
  }

}
