import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders = [];

  create(order) {
    const newOrder = { id: Date.now(), ...order };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.orders;
  }
}
