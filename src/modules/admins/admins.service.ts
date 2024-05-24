import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { adminDTO } from './dtos/admin.dto';

@Injectable()
export class AdminsService {

    constructor (private prisma: PrismaService) {}

    async create(admin: adminDTO) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                cpf: admin.userId
            },
        });

        if (!userExists) {
            throw new Error('User not exists');
        }

        const newAdmin = await this.prisma.admin.create({
            data: admin,
        });

        return newAdmin;
        
    }
    
}
