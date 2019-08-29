import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly postRepository: Repository<Product>,
  ) {
  }

  public findAll(): Observable<Product[]> {
    return from(this.postRepository.find());
  }

  public getProduct(id: number) {
    return this.postRepository.findOne(id);
  }
}
