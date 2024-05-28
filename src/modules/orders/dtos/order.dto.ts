import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({
    description: 'CPF do cliente associado',
    example: '123456789',
  })
  clientId: string;

  @ApiProperty({ description: 'Status do pedido', example: 'Pendente' })
  status: string;

  @ApiProperty({ description: 'ID do endereço de entrega', example: 1 })
  addressId: number;

  @ApiProperty({ description: 'Valor total do pedido', example: 100.0 })
  total: number;
}

export class OrderDTO {
  @ApiProperty({ description: 'ID do pedido', example: 1 })
  id: number;

  @ApiProperty({
    description: 'CPF do cliente associado',
    example: '123456789',
  })
  clientId: string;

  @ApiProperty({ description: 'Status do pedido', example: 'Pendente' })
  status: string;

  @ApiProperty({ description: 'ID do endereço de entrega', example: 1 })
  addressId: number;

  @ApiProperty({ description: 'Valor total do pedido', example: 100.0 })
  total: number;
}
