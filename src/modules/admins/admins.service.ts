import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AdminDTO } from './dtos/admin.dto';

@Injectable()
export class AdminsService {

    constructor (private prisma: PrismaService) {}

    async create(admin: AdminDTO) {

        const userExists = await this.prisma.user.findUnique({
            where: { cpf: admin.userId },
        });
    
        if (!userExists) {
            throw new Error('User does not exist');
        }
    
        const newAdmin = await this.prisma.admin.create({
            data: admin,
        });
    
        await this.prisma.user.update({
            where: { cpf: admin.userId },
            data: { roles: "ADMIN" },
        });
    
        return newAdmin;
    }
    
    
}
