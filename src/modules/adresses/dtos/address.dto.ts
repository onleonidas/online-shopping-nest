import { ApiProperty } from "@nestjs/swagger";

export class AddressDTO {

    @ApiProperty({ description: 'CEP do endereço', example: '12345-678' })
    cep: string;

    @ApiProperty({ description: 'Rua do endereço', example: 'Rua das Flores' })
    street: string;

    @ApiProperty({ description: 'Cidade do endereço', example: 'São Paulo' })
    city: string;

    @ApiProperty({ description: 'Estado do endereço', example: 'SP' })
    state: string;

    @ApiProperty({ description: 'Número do endereço', example: '123' })
    num: string;

    @ApiProperty({ description: 'Complemento do endereço', example: 'Apto 123' })
    complement: string;
}