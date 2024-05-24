import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { addressDTO } from './dtos/address.dto';

@Injectable()
export class AdressesService {

    constructor (private prisma: PrismaService) {}

    async create(address: addressDTO){
        const newAddress = await this.prisma.address.create({
            data: address
        })
        return newAddress;
    }
}
