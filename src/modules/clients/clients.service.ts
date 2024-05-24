import { Injectable } from '@nestjs/common';
import { ClientDTO } from './dtos/client.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ClientsService {

    constructor (private prisma: PrismaService) {}

    async create(user: ClientDTO) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                cpf: user.userId
            },
        })
        if (!userExists) {
            throw new Error('User not exists');
        }
       
        const newClient = await this.prisma.client.create({
            data: user,
        });

        return newClient;
        
    }

}
