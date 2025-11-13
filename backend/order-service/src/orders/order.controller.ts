import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() orderData: any) {
    return this.orderService.create(orderData);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
