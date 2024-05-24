import { Body, Controller, Post } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { CatalogDTO } from './dtos/catalog.dto';

@Controller('catalogs')
export class CatalogsController {
  constructor(private readonly catalogsService: CatalogsService) {}

  @Post()
  async create(@Body() catalog: CatalogDTO){
    return this.catalogsService.create(catalog)
  }
}
