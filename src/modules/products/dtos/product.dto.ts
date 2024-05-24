import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

    @ApiProperty({description: 'Nome do produto', example: 'Produto 1'})
    name: string;
    
    @ApiProperty({description: 'Descrição do produto', example: 'Descrição do produto 1'})
    description: string;

    @ApiProperty({description: 'Preço do produto', example: 100.00})
    price: number;

    @ApiProperty({description: 'Estoque do produto', example: 10})
    stock: number;

    @ApiProperty({description: 'Categoria do produto', example: 1})
    categoryId: number;

    @ApiProperty({description: 'Imagem do produto', example: 'https://example.com/image.jpg'})
    image: string;

    @ApiProperty({description: 'ID do catálogo do produto', example: 1})
    catalogId: number;
}