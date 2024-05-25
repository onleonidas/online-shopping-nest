import { Module } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { OrderItemsController } from './order-items.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [OrderItemsController],
  providers: [OrderItemsService, PrismaService],
  imports: [PrismaClient],
})
export class OrderItemsModule {}
