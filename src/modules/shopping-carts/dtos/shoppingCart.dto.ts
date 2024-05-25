import { ApiProperty } from "@nestjs/swagger";

export class ShoppingCartDto {

    @ApiProperty({ example: '1', description: 'Id do cliente' })
    clientId: string;
}