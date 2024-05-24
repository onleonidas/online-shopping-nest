import { ApiProperty } from "@nestjs/swagger";

export class ManagerDTO {

    @ApiProperty({ description: 'ID do administrador associado', example: '123.456.789-00' })
    adminId: string;

    @ApiProperty({ description: 'ID do catálogo associado', example: 1 })
    catalogId: number;
}