import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from '../../../../shared/services/app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ProductEntity} from '../../../../shared/entities/product.entity';

@Component({
    selector: 'app-product-details',
    templateUrl: './details.dialog.html'
})
export class ProductDetailsDialog implements OnInit {

    item: ProductEntity = new ProductEntity();

    constructor(private  service: AppService,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {

        this.service.getProduct(this.data.id).subscribe(data => {

            console.log('Product ', data);

            this.item = data;
        })

    }

}
