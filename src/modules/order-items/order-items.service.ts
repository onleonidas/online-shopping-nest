import { Injectable } from '@nestjs/common';
import { OrderItemDto } from './dtos/orderItems.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  async create(orderItem: OrderItemDto) {
    const newOrderItem = await this.prisma.orderItem.create({
      data: orderItem,
    });

    return newOrderItem;
  }
}
