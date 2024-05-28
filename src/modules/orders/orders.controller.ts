import { Body, Controller, Post, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto, OrderDTO } from './dtos/order.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Pedidos')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo pedido' })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'O pedido foi criado com sucesso',
    type: CreateOrderDto,
  })
  create(@Body() order: CreateOrderDto) {
    return this.ordersService.create(order);
  }

  @Put('finalizar-pedido')
  @ApiOperation({ summary: 'Finalizar um pedido/compra' })
  @ApiBody({ type: OrderDTO })
  @ApiResponse({
    status: 200,
    description: 'O status do pedido foi atualizado com sucesso',
    type: OrderDTO,
  })
  updateStatus(@Body() order: OrderDTO) {
    return this.ordersService.updateStatus(order);
  }
}
