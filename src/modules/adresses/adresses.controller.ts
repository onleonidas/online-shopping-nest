import { Body, Controller, Post } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { addressDTO } from './dtos/address.dto';

@Controller('adresses')
export class AdressesController {
  constructor(private readonly adressesService: AdressesService) {}

  @Post()
  async create(@Body() address: addressDTO){
    return this.adressesService.create(address);
  }
}
