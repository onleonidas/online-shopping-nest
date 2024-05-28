import { Injectable } from '@nestjs/common';
import { ClientDTO } from './dtos/client.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  findByCpf(clientId: string) {
    return this.prisma.client.findUnique({
      where: {
        userId: clientId,
      },
    });
  }

  async create(client: ClientDTO) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        cpf: client.userId,
      },
    });
    if (!userExists) {
      throw new Error('User not exists');
    }

    const newClient = await this.prisma.client.create({
      data: client,
    });

    await this.prisma.user.update({
      where: { cpf: client.userId },
      data: { roles: 'CLIENT' },
    });

    return newClient;
  }
}
