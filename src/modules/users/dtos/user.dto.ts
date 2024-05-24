import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({ description: 'CPF do usuário', example: '123.456.789-00' })
  cpf: string;

  @ApiProperty({ description: 'Nome do usuário', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'Email do usuário', example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ description: 'Telefone do usuário', example: '(11) 98765-4321' })
  phone: string;

  @ApiProperty({ description: 'Senha do usuário', example: 'strongpassword' })
  password: string;
}
