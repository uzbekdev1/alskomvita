import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
export declare class ProductsService {
    private readonly postRepository;
    constructor(postRepository: Repository<Product>);
    findAll(): Observable<Product[]>;
    getProduct(id: number): Promise<Product>;
}
