import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AddressDTO } from './dtos/address.dto';

@Injectable()
export class AdressesService {
  constructor(private prisma: PrismaService) {}

  async create(address: AddressDTO) {
    const newAddress = await this.prisma.address.create({
      data: address,
    });
    return newAddress;
  }

  async findAll() {
    const allAddresses = await this.prisma.address.findMany();
    return allAddresses;
  }
}
