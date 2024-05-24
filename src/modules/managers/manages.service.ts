import { Injectable } from '@nestjs/common';
import { ManagerDTO } from './dtos/manager.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ManagersService {

    constructor (private prisma: PrismaService) {}

    async create(manager: ManagerDTO){
        const newManager = await this.prisma.manages.create({
            data: manager
        })

        return newManager;
    }


}
