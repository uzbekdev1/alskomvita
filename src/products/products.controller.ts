import { Controller, Get, Post, Delete, Patch, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from '../dtos/productDto';
import { Observable } from 'rxjs';
import { Product } from '../entities/product.entity';

@Controller('api/products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(): Observable<Product[]> {
        return this.productsService.findAll();
    }
    @Get(':id')
    getProduct(@Param('id', new ParseIntPipe()) id) {
        return this.productsService.getProduct(id);
    }
    @Post()
    createNewProduct(@Body() product: ProductDto) {
        return this.productsService.createNewProduct(product);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id) {
        return this.productsService.deleteProduct(id);
    }

    @Put(':id')
    updateProduct(@Param('id', new ParseIntPipe()) id, @Body() product: Product) {
        return this.productsService.updateProduct(id, product);
    }
}
