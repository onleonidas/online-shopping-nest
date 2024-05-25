import { Body, Controller, Post } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ShoppingCartDto } from './dtos/shoppingCart.dto';

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
}
