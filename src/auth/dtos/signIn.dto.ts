import { ApiProperty } from "@nestjs/swagger";

export class SignInDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'Email de usuário' })
    email: string;

    @ApiProperty({ example: '123456', description: 'Senha' })
    password: string;
}