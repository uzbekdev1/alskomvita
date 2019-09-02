import { Module } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
  ],
  providers: [
    ProductsService,
  ],
  controllers: [
    ProductsController,
  ],
})
export class ProductsModule {
}
