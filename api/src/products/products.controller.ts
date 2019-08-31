import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {ProductsService} from './products.service';
import {Observable} from 'rxjs';
import {ProductEntity} from './product.entity';
import {ApiImplicitParam, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('products')
@Controller('products')
//@ApiBearerAuth()
export class ProductsController {

    constructor(private   productsService: ProductsService) {
    }

    @Get()
    getAll(): Observable<ProductEntity[]> {
        return this.productsService.getAll();
    }

    @Get(':id')
    @ApiImplicitParam({name: 'id'})
    getItem(@Param('id', new ParseIntPipe()) id) {
        return this.productsService.getItem(id);
    }

}
