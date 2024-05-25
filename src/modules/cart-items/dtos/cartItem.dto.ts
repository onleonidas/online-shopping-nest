import { ApiProperty } from '@nestjs/swagger';

export class CartItemDto {
  @ApiProperty({ example: 1, description: 'Id do produto' })
  productId: number;

  @ApiProperty({ example: 1, description: 'Quantidade do produto' })
  quantity: number;

  @ApiProperty({ example: 1, description: 'Id do carrinho de compras' })
  shoppingCartId: number;
}
