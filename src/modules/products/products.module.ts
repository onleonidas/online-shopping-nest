import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from 'src/authorization/roles.guard';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService, JwtService, RolesGuard],
  imports: [PrismaClient],
})
export class ProductsModule {}
