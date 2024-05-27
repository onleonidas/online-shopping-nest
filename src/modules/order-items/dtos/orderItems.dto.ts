import { ApiProperty } from "@nestjs/swagger";

export class OrderItemDto {

    @ApiProperty({ example: 2, description: 'Quantidade do produto' })
    product_quantity: number;

    @ApiProperty({ example: 1, description: 'Identificador do pedido' })
    orderId: number;

    @ApiProperty({ example: 'Produto 1', description: 'Nome do produto'})
    product_name: string;

    @ApiProperty({ example: 10.00, description: 'Preço do produto' })
    product_price: number;

    @ApiProperty({ example: 'https://example.com/image.jpg', description: 'Imagem do produto' })
    product_image: string;

    @ApiProperty({ example: 'Descrição do produto', description: 'Descrição do produto' })
    product_description: string;

    @ApiProperty({ example: '1', description: 'Categoria do produto' })
    product_category: number;
}