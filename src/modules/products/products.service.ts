import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/product.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto) {
        const newProduct = await this.prisma.product.create({
            data: createProductDto,
        })

        return newProduct;
    }
}
