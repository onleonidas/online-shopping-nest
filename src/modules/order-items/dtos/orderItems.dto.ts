import { ApiProperty } from "@nestjs/swagger";

export class OrderItemDto {

    @ApiProperty({ example: 1, description: 'Identificador do produto' })
    productId: number;

    @ApiProperty({ example: 2, description: 'Quantidade do produto' })
    quantity: number;

    @ApiProperty({ example: 1, description: 'Identificador do pedido' })
    orderId: number;
}