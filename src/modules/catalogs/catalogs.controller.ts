import { Body, Controller, Post } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { CatalogDTO } from './dtos/catalog.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo catálogo' })
  @ApiBody({ type: CatalogDTO })
  @ApiResponse({
    status: 201,
    description: 'O catálogo foi criado com sucesso',
    type: CatalogDTO,
  })
  async create(@Body() catalog: CatalogDTO){
    return this.catalogsService.create(catalog)
  }
}
