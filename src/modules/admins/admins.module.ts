import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, PrismaService],
  imports: [PrismaClient]
})
export class AdminsModule {}
