import { Body, Controller, Post } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrderItemDto } from './dtos/orderItems.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo item de pedido' })
  @ApiBody({ type: OrderItemDto })
  @ApiResponse({
    status: 201,
    description: 'O item de pedido foi criado com sucesso',
    type: OrderItemDto,
  })
  create(@Body() orderItem: OrderItemDto) {
    return this.orderItemsService.create(orderItem);
  }
}
