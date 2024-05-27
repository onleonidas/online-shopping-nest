import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/category.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CategoriesService {

    constructor(private prisma: PrismaService) {}

  create(category: CreateCategoryDto) {
    const newCategory = this.prisma.category.create({
        data: category
    })

    return newCategory;
  }
}
