import { Module } from '@nestjs/common';
import { OrderController } from './orders/order.controller';
import { OrderService } from './orders/order.service';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class AppModule {}
