import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3002);
  console.log('Order Service running at http://localhost:3002/api/orders');
}
bootstrap();
