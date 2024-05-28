import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/product.dto';
import { PrismaService } from '@src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('ProductsController', () => {
  let controller: ProductsController;
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService, JwtService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new product', async () => {
      const productDto: CreateProductDto = {
        name: 'Mac book pro 2021',
        description: 'Lançamento da Apple',
        price: 5000.0,
        stock: 23,
        image: 'https://imgs.casasbahia.com.br/55065306/1g.jpg',
        categoryId: 1,
      };

      const productWithId = {
        id: 1,
        categoryId: 1,
        ...productDto,
      };

      const expectedPartialDto = {
        name: 'Mac book pro 2021',
        description: 'Lançamento da Apple',
        price: 5000.0,
        stock: 23,
        image: 'https://imgs.casasbahia.com.br/55065306/1g.jpg',
        categoryId: 1,
      };

      jest.spyOn(productService, 'create').mockResolvedValue(productWithId);

      const result = await controller.create(productDto);
      expect(result).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove a product by id', async () => {
      const productId = 10;
  
      jest.spyOn(productService, 'remove').mockResolvedValue({
        "id": 10,
        "name": "Iphone 20",
        "description": "Lançamento da Apple",
        "price": 5000,
        "image": "https://imgs.casasbahia.com.br/55065306/1g.jpg",
        "stock": 23,
        "categoryId": 1
      });
  
      const result = await controller.remove(productId);
  
      expect(result).toEqual({
        "id": 10,
        "name": "Iphone 20",
        "description": "Lançamento da Apple",
        "price": 5000,
        "image": "https://imgs.casasbahia.com.br/55065306/1g.jpg",
        "stock": 23,
        "categoryId": 1
      });
    });
  });

  describe('update', () => {
    it('should update a product by id', async () => {
      const productId = 1;
      const updatedProductDto = {
        id: 6,
        name: 'Iphone 12225',
        description: 'Lançamento da Apple',
        price: 5000,
        image: 'https://imgs.casasbahia.com.br/55065306/1g.jpg',
        stock: 23,
        categoryId: 1,
      };

      jest.spyOn(productService, 'update').mockResolvedValue(updatedProductDto);

      const result = await controller.update(productId, updatedProductDto);

      expect(result).toEqual(updatedProductDto);
    });
  });

  describe('find', () => {
    it('should find all products if no query params are provided', async () => {
      jest.spyOn(productService, 'findAll').mockResolvedValue([]);

      const result = await controller.find();

      expect(result).toEqual([]);
    });

    it('should find products by name if name query param is provided', async () => {
      const productName = 'Product';

      jest.spyOn(productService, 'findByName').mockResolvedValue([]);

      const result = await controller.find(productName);

      expect(result).toEqual([]);
    });

    it('should find products by category if category query param is provided', async () => {
      const productCategory = 1;

      jest.spyOn(productService, 'findByCategoryId').mockResolvedValue([]);

      const result = await controller.find(undefined, productCategory);

      expect(result).toEqual([]);
    });

    it('should find products by name and category if both query params are provided', async () => {
      const productName = 'Product';
      const productCategory = 1;

      jest
        .spyOn(productService, 'findByNameAndCategoryId')
        .mockResolvedValue([]);

      const result = await controller.find(productName, productCategory);

      expect(result).toEqual([]);
    });
  });
});
