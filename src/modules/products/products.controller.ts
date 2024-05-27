import { Controller, Delete, Param, ParseIntPipe, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Body, Post } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Roles } from 'src/authorization/roles.decorator';
import { Role } from 'src/authorization/enums/role.enum';
import { RolesGuard } from 'src/authorization/roles.guard';

@Controller('products')
@UseGuards(RolesGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @Roles(Role.Admin)
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
  @Roles(Role.Admin)
  @ApiOperation({ summary: 'Deletar um produto' })
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


}
