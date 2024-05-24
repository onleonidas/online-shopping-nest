import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Body, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({
    status: 201,
    description: 'O produto foi criado com sucesso',
    type: CreateProductDto,
  })
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

}
