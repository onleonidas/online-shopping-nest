import { Body, Controller, Post } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';
import { CartItemDto } from '../cart-items/dtos/cartItem.dto';

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

}
