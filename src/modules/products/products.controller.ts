import { Controller, Delete, Get, Param, ParseIntPipe, Put, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Body, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

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

  @Delete('delete/:id')
  @ApiOperation({ summary: 'Deletar um produto' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @ApiResponse({
    status: 204,
    description: 'O produto foi deletado com sucesso',
  })
  async remove(@Param('id', ParseIntPipe) id: number) {
    console.log('Deleting product with ID:', id);
    return this.productsService.remove(id);
  }

  @Put('update/:id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @ApiBody({ type: CreateProductDto })
  @ApiResponse({
    status: 200,
    description: 'O produto foi atualizado com sucesso',
    type: CreateProductDto,
  })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateProductDto: CreateProductDto) {
    console.log('Updating product with ID:', id);
    return this.productsService.update(id, updateProductDto);
  }

  @Get('find')
  @ApiOperation({ summary: 'Encontrar produtos com base em critérios' })
  @ApiQuery({ name: 'name', required: false, description: 'Nome do produto' })
  @ApiQuery({ name: 'category', required: false, description: 'Categoria do produto' })
  async find(@Query('name') name?: string, @Query('category') category?: number) {
    if (name && category) {
      return this.productsService.findByNameAndCategoryId(name, category);
    } else if (name) {
      return this.productsService.findByName(name);
    } else if (category) {
      return this.productsService.findByCategoryId(category);
    } else {
      return this.productsService.findAll();
    }
  }


}
