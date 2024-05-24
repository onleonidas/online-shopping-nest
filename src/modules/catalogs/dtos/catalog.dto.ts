import { ApiProperty } from "@nestjs/swagger";

export class CatalogDTO {
    @ApiProperty({ description: 'Nome do catálogo', example: 'Eletrônicos' })
    name: string;

    @ApiProperty({ description: 'Descrição do catálogo', example: 'Catálogo de produtos eletrônicos' })
    description: string;
}