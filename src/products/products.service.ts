import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { ProductDto } from '../dtos/productDto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly postRepository: Repository<Product>,
      ) {}
     public findAll(): Observable<Product[]> {
        return  from(this.postRepository.find());
      }

     public getProduct(id: number) {
          return this.postRepository.findOne(id);
      }

      public createNewProduct(product: ProductDto) {
          return this.postRepository.save(
              product,
          );
      }

      updateProduct(id: number, product: Product ) {
          product.id = id;
          this.postRepository.save(product);
          return product;
      }

      deleteProduct(id: number) {
          this.postRepository.delete(id);
      }
}
