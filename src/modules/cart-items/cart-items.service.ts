import { Injectable } from '@nestjs/common';
import { CartItemDto } from './dtos/cartItem.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CartItemsService {
  constructor(private prisma: PrismaService) {}

  async create(cartItem: CartItemDto) {
    const newCartItem = await this.prisma.cartItem.create({
      data: cartItem,
    });

    return newCartItem;
  }
}
