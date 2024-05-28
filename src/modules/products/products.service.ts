import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { PrismaService } from '@src/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.prisma.product.create({
      data: createProductDto,
    });

    return newProduct;
  }

  async remove(index: number) {
    const findProduct = await this.prisma.product.findFirst({
      where: {
        id: index,
      },
    });

    if (!findProduct) {
      throw new Error('Product not found');
    }

    await this.prisma.product.delete({
      where: {
        id: index,
      },
    });

    return findProduct;
  }

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProductDto: CreateProductDto) {
    const findProduct = await this.prisma.product.findFirst({
      where: {
        id,
      },
    });

    if (!findProduct) {
      throw new Error('Product not found');
    }

    const updatedProduct = await this.prisma.product.update({
      where: {
        id,
      },
      data: updateProductDto,
    });

    return updatedProduct;
  }

  async findByName(name: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async findByCategoryId(categoryId: number) {
    return this.prisma.product.findMany({
      where: {
        categoryId,
      },
    });
  }

  async findByNameAndCategoryId(name: string, categoryId: number) {
    return this.prisma.product.findMany({
      where: {
        AND: [
          {
            name: {
              contains: name,
            },
          },
          {
            categoryId,
          },
        ],
      },
    });
  }
}
