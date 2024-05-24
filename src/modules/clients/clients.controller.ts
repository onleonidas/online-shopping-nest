import { Body, Controller, Post } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientDTO } from './dtos/client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() user: ClientDTO) {
    return this.clientsService.create(user);
  }
}
