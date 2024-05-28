import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';
import { CreateOrderDto } from '../orders/dtos/order.dto';
import { OrdersService } from '../orders/orders.service';
import { parse } from 'path';
import { ClientsService } from '../clients/clients.service';
import { stat } from 'fs';
import { OrderItemsService } from '../order-items/order-items.service';

@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService,
    private readonly ordersService: OrdersService,
  private readonly clientsServices: ClientsService,
private readonly orderItemsServices: OrderItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo carrinho de compras' })
  @ApiBody({ type: ShoppingCartDto })
  @ApiResponse({
    status: 201,
    description: 'O carrinho de compras foi criado com sucesso',
    type: ShoppingCartDto,
  })
  create(@Body() shoppingCart: ShoppingCartDto) {
    return this.shoppingCartsService.create(shoppingCart);
  }

  @Post('add-product')
  @ApiOperation({ summary: 'Adicionar um produto ao carrinho de compras' })
  @ApiBody({ type: CartItemDto })
  @ApiResponse({
    status: 201,
    description: 'O produto foi adicionado ao carrinho de compras com sucesso',
    type: CartItemDto,
  })
  addProduct(@Body() item: CartItemDto) {
    return this.shoppingCartsService.addProduct(item);
  }


  @Get('items-list')
  @ApiOperation({ summary: 'Obter os itens de um carrinho de compras' })
  @ApiResponse({
    status: 200,
    description: 'Itens do carrinho de compras',
    type: CartItemDto,
    isArray: true,
  })
  async getCartItems(@Query('id') id?: number, @Query('clientId') clientId?: string): Promise<any> {
    return await this.shoppingCartsService.getCartItems(id);
  }

  @Post('create-order')
  @ApiOperation({ summary: 'Criar um pedido a partir de um carrinho de compras' })
  @ApiBody({ type: ShoppingCartDto })
  @ApiResponse({
    status: 201,
    description: 'O pedido foi criado com sucesso',
    type: CreateOrderDto,
  })
  async createOrderFromCart(@Body() shoppingCart: ShoppingCartDto): Promise<CreateOrderDto> {
    console.log(shoppingCart)
    const cartItems = await this.shoppingCartsService.getCartItems(shoppingCart.id);

    let total = 0;
    for (const cartItem of cartItems) {
      total += cartItem.product.price * cartItem.quantity;
    }
    
    const ownerAddress = await this.clientsServices.findByCpf(shoppingCart.clientId);
    
    const order: CreateOrderDto = {
      clientId: shoppingCart.clientId,
      status: 'Pendente',
      addressId: ownerAddress.addressId,
      total: total,
    };

    const newOrder = await this.ordersService.create(order);
    const orderItems = cartItems.map(cartItem => ({
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
