import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { ProductEntity } from './product.entity';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('products')
//@ApiBearerAuth()
export class ProductsController {

  constructor(private   productsService: ProductsService) {
  }

  @Get(':lang')
  @ApiImplicitParam({ name: 'lang' })
  getAll(@Param('lang', new ParseIntPipe()) lang): Observable<ProductEntity[]> {
    return this.productsService.getAll(lang);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  getItem(@Param('id', new ParseIntPipe()) id) {
    return this.productsService.getItem(id);
  }

}
