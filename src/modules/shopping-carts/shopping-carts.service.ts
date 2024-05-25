import { Injectable } from '@nestjs/common';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ShoppingCartsService {
  constructor(private prisma: PrismaService) {}

  async create(shoppingCart: ShoppingCartDto) {
    const newShoppingCart = await this.prisma.shoppingCart.create({
        data: shoppingCart
    });

    return newShoppingCart;
  }
}
