import { ApiProperty } from '@nestjs/swagger';

export class ClientDTO {
  @ApiProperty({
    description: 'CPF do usuário associado',
    example: '123.456.789-00',
  })
  userId: string;

  @ApiProperty({ description: 'ID do endereço associado', example: 1 })
  addressId: number;
}
