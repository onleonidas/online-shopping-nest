import { ApiProperty } from '@nestjs/swagger';

export class AdminDTO {
  @ApiProperty({
    description: 'CPF do usuário associado',
    example: '123.456.789-00',
  })
  userId: string;
}
