import { Body, Controller, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { adminDTO } from './dtos/admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async create(@Body() user: adminDTO){
    return this.adminsService.create(user);
  }

}
