import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminDTO } from './dtos/admin.dto';
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
@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar um novo administrador' })
  @ApiBody({ type: AdminDTO })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @ApiBearerAuth('ADMIN')
  @ApiResponse({
    status: 201,
    description: 'O administrador foi registrado com sucesso',
    type: AdminDTO,
  })
  async create(@Body() user: AdminDTO) {
    return this.adminsService.create(user);
  }
}
