import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { json } from 'express';
import * as cors from 'cors';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(json(), cors())
      .forRoutes('*');
  }
}
