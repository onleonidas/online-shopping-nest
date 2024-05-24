import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiBody({ type: UserDTO })
  @ApiResponse({
    status: 201,
    description: 'O usuário foi criado com sucesso',
    type: UserDTO,
  })
  async create(@Body() user: UserDTO) {
    return this.usersService.create(user);
  }

}
