import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, PrismaService],
  imports: [PrismaClient],
})
export class ClientsModule {}
