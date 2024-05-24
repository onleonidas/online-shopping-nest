import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientDTO } from './dtos/client.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiBody({ type: ClientDTO })
  @ApiResponse({
    status: 201,
    description: 'O cliente foi criado com sucesso',
    type: ClientDTO,
  })
  async create(@Body() user: ClientDTO) {
    return this.clientsService.create(user);
  }
}
