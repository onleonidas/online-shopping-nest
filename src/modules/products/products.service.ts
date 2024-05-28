import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { PrismaService } from '@src/database/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}


  /**
   * Function to create a new product
   * @param createProductDto 
   * @returns 
   */
  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.prisma.product.create({
      data: createProductDto,
    });

    return newProduct;
  }


  /**
   * Function to remove a product
   * @param index 
   * @returns 
   */
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


  /**
   * Function to list all products
   * @returns 
   */
  async findAll() {
    return this.prisma.product.findMany();
  }


  /**
   * Function to find a product by id
   * @param id 
   * @returns 
   */
  async findOne(id: number) {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  /**
   * Function to update a product
   * @param id 
   * @param updateProductDto 
   * @returns 
   */
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

  /**
   * Function to find a product by name
   * 
   * @param name 
   * @returns 
   */
  async findByName(name: string) {
    return this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  /**
   *  Function to find a product by category id
   * @param categoryId 
   * @returns 
   */
  async findByCategoryId(categoryId: number) {
    return this.prisma.product.findMany({
      where: {
        categoryId,
      },
    });
  }

  /**
   * Function to find a product by name and category id
   * @param name 
   * @param categoryId 
   * @returns 
   */
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
