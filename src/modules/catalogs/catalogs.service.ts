import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CatalogDTO } from './dtos/catalog.dto';

@Injectable()
export class CatalogsService {

    constructor (private prisma: PrismaService) {}

    async create(catalog: CatalogDTO) {

        const newCatalog = await this.prisma.catalog.create({
            data: catalog,
        });

        return newCatalog;
        
    }


}
