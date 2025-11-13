export class OrderEntity {
  id: string;
  productId: string;
  productSnapshot: any;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
}
