import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaService],
  imports: [PrismaClient],
})
export class ProductsModule {}
