import { Module } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';
import { CatalogsController } from './catalogs.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [CatalogsController],
  providers: [CatalogsService, PrismaService],
  imports: [PrismaClient]
})
export class CatalogsModule {}
