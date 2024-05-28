import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AddressDTO } from './dtos/address.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Endereço')
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
  async create(@Body() address: AddressDTO) {
    return this.adressesService.create(address);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os endereços' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @ApiBearerAuth('ADMIN')
  @ApiResponse({
    status: 200,
    description: 'Lista de endereços',
    type: [AddressDTO],
  })
  async findAll() {
    return this.adressesService.findAll();
  }
}
