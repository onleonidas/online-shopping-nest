import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';
import { CreateOrderDto } from '../orders/dtos/order.dto';

@ApiTags('Carrinho de compras')
@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}

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
  async getCartItems(@Query('id') id?: number): Promise<any> {
    return await this.shoppingCartsService.getCartItems(id);
  }

  @Post('create-order')
  @ApiOperation({
    summary: 'Criar um pedido a partir de um carrinho de compras',
  })
  @ApiBody({ type: ShoppingCartDto })
  @ApiResponse({
    status: 201,
    description: 'O pedido foi criado com sucesso',
    type: CreateOrderDto,
  })
  async createOrderFromCart(
    @Body() shoppingCart: ShoppingCartDto,
  ): Promise<CreateOrderDto> {
    return await this.shoppingCartsService.createOrderFromCart(shoppingCart);
  }
}
