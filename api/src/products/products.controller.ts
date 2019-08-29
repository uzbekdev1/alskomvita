import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './product.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('products')
//@ApiBearerAuth()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
  }

  @Get()
  getAllProducts(): Observable<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  getProduct(@Param('id', new ParseIntPipe()) id) {
    return this.productsService.getProduct(id);
  }

}
