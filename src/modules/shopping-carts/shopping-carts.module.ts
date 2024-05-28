import { Module } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ShoppingCartsController } from './shopping-carts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { OrdersService } from '../orders/orders.service';
import { OrdersModule } from '../orders/orders.module';
import { ClientsService } from '../clients/clients.service';
import { ClientsModule } from '../clients/clients.module';
import { OrderItemsService } from '../order-items/order-items.service';
import { OrderItemsModule } from '../order-items/order-items.module';

@Module({
  controllers: [ShoppingCartsController],
  providers: [ShoppingCartsService, PrismaService, OrdersService, ClientsService, OrderItemsService],
  imports: [OrdersModule, ClientsModule, OrderItemsModule],

})
export class ShoppingCartsModule {}
