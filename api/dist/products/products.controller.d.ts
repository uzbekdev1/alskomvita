import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Observable<Product[]>;
    getProduct(id: any): Promise<Product>;
}
