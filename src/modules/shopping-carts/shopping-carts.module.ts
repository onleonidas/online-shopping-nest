import { Module } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ShoppingCartsController } from './shopping-carts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ShoppingCartsController],
  providers: [ShoppingCartsService, PrismaService],

})
export class ShoppingCartsModule {}
