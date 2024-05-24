import { Controller } from '@nestjs/common';
import { ShoppingCartsService } from './shopping-carts.service';

@Controller('shopping-carts')
export class ShoppingCartsController {
  constructor(private readonly shoppingCartsService: ShoppingCartsService) {}
}
