import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/order.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OrdersService {

    constructor(private prisma: PrismaService) {}

    async create(order: CreateOrderDto) {
        const newOrder = await this.prisma.order.create({
            data: order
        })

        console.log(newOrder);

        return newOrder;
    }
}
