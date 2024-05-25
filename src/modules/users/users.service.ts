import { Injectable } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
    
    constructor (private prisma: PrismaService) {}
    
    async create(user: UserDTO) {
        const userExists = await this.prisma.user.findUnique({
            where: {
                cpf: user.cpf
            },
        });
        
        if (userExists) {
            throw new Error('User already exists');
        }
        
        const newUser = await this.prisma.user.create({
            data: user,
        });
        
        return newUser;
        
    }
    
    async findByEmail(email: string) {
        return await this.prisma.user.findUnique({
            where: {
                email: email
            },
        });
    }
}
