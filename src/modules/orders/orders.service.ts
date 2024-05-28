import { Injectable } from '@nestjs/common';
import { CreateOrderDto, OrderDTO } from './dtos/order.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(order: CreateOrderDto) {
    const newOrder = await this.prisma.order.create({
      data: order,
    });
    return newOrder;
  }

  updateStatus(order: OrderDTO) {
    return this.prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: 'Concluído',
      },
    });
  }

  async getOrders(id: number) {
    const orders = await this.prisma.order.findUnique({
      where: {
        id: id,
      },
    });
    return orders;
  }
}
