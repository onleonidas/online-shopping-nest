import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
  imports: [PrismaClient],
})
export class OrdersModule {}
