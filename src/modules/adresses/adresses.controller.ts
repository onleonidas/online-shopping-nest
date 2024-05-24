import { Body, Controller, Post } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AddressDTO } from './dtos/address.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo endereço' })
  @ApiBody({ type: AddressDTO })
  @ApiResponse({
    status: 201,
    description: 'O endereço foi criado com sucesso',
    type: AddressDTO,
  })
  async create(@Body() address: AddressDTO){
    return this.adressesService.create(address);
  }
}
