import { Module } from '@nestjs/common';
import { ManagersService } from './manages.service';
import { ManagersController } from './manages.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ManagersController],
  providers: [ManagersService, PrismaService],
  imports: [PrismaClient]
})
export class ManagersModule {}
