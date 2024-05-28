import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './dtos/user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Usuários')
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

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @ApiBearerAuth('ADMIN')
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: [UserDTO],
  })
  async findAll() {
    return this.usersService.findAll();
  }
}
