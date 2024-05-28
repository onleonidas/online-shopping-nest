import { Injectable } from '@nestjs/common';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';
import { CreateOrderDto } from '../orders/dtos/order.dto';
import { OrdersService } from '../orders/orders.service';
import { ClientsService } from '../clients/clients.service';
import { OrderItemsService } from '../order-items/order-items.service';

@Injectable()
export class ShoppingCartsService {
  constructor(
    private prisma: PrismaService,
    private readonly ordersService: OrdersService,
    private readonly clientsServices: ClientsService,
    private readonly orderItemsServices: OrderItemsService,
  ) {}

  async create(shoppingCart: ShoppingCartDto) {
    const newShoppingCart = await this.prisma.shoppingCart.create({
      data: shoppingCart,
    });

    return newShoppingCart;
  }

  async getCartItems(id: number) {
    id = parseInt(id.toString());
    const cartItems = await this.prisma.cartItem.findMany({
      where: {
        shoppingCartId: id,
      },
      include: {
        product: true,
      },
    });

    return cartItems;
  }

  addProduct(product: CartItemDto) {
    return this.prisma.cartItem.create({
      data: product,
    });
  }

  async createOrderFromCart(shoppingCart: ShoppingCartDto) {
    const cartItems = await this.getCartItems(shoppingCart.id);

    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.product.price * cartItem.quantity;
    }

    const ownerAddress = await this.clientsServices.findByCpf(
      shoppingCart.clientId,
    );

    const order: CreateOrderDto = {
      clientId: shoppingCart.clientId,
      status: 'Pendente',
      addressId: ownerAddress.addressId,
      total: total,
    };

    const newOrder = await this.ordersService.create(order);

    const orderItems = cartItems.map((cartItem) => ({
      product_quantity: cartItem.quantity,
      orderId: newOrder.id,
      product_name: cartItem.product.name,
      product_price: cartItem.product.price,
      product_image: cartItem.product.image,
      product_description: cartItem.product.description,
      categoryId: cartItem.product.categoryId,
    }));

    for (const orderItem of orderItems) {
      await this.orderItemsServices.create(orderItem);
    }

    return await this.ordersService.getOrders(newOrder.id);
  }
}
