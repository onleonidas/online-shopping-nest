import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AdressesController],
  providers: [AdressesService, PrismaService, JwtService],
  imports: [PrismaClient],
})
export class AdressesModule {}
