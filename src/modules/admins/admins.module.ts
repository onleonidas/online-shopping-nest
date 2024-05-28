import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService, PrismaService, JwtService],
  imports: [PrismaClient],
})
export class AdminsModule {}
