import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private   postRepository: Repository<ProductEntity>,
  ) {
  }

  getAll(lang: number): Observable<ProductEntity[]> {
    return from(this.postRepository.find({
      languageId: lang,
    }));
  }

  getItem(id: number) {
    return this.postRepository.findOne(id);
  }
}
