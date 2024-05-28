import { Injectable } from '@nestjs/common';
import { UserDTO } from './dtos/user.dto';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    async getUserRoles(id: any) {
      const role = await this.prisma.user.findUnique({
        where: {
          cpf: id
        },
        select: {
          roles: true
        }
      })

      return role.roles;
    }
    
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

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const userWithHashedPassword = {
            ...user,
            password: hashedPassword
        };
        
        const newUser = await this.prisma.user.create({
            data: userWithHashedPassword,
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

    async findByCpf(cpf: string) {
        return await this.prisma.user.findUnique({
            where: {
                cpf: cpf
            },
        });
    }
}
