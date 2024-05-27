import { Injectable } from '@nestjs/common';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';

@Injectable()
export class ShoppingCartsService {

  
  constructor(private prisma: PrismaService) {}

  async create(shoppingCart: ShoppingCartDto) {
    const newShoppingCart = await this.prisma.shoppingCart.create({
        data: shoppingCart
    });

    return newShoppingCart;
  }

  addProduct(product: CartItemDto) {
    return this.prisma.cartItem.create({
        data: product
    });
  }
}
