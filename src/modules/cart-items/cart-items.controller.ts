import { Body, Controller, Post } from '@nestjs/common';
import { CartItemsService } from './cart-items.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CartItemDto } from './dtos/cartItem.dto';

@Controller('cart-items')
export class CartItemsController {
  constructor(private readonly cartItemsService: CartItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo item no carrinho de compras' })
  @ApiBody({ type: CartItemDto })
  @ApiResponse({
    status: 201,
    description: 'O item foi adicionado ao carrinho com sucesso',
    type: CartItemDto,
  })
  create(@Body() cartItem: CartItemDto) {
    return this.cartItemsService.create(cartItem);
  }
}
