import { Injectable } from '@nestjs/common';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';

@Injectable()
export class ShoppingCartsService {

  async getCartItems(id: number) {
    id = parseInt(id.toString());
    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        shoppingCartId: id
      },
      include: {
        product: true
      }
    });


    return cartItems;
  }

  
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
