import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {ProductEntity} from '../shared/entities/product.entity';
import {MatDialog} from '@angular/material/dialog';
import {ProductDetailsDialog} from '../layout/dialogs/entities/product/details.dialog';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    items: ProductEntity[];
    baseUrl = environment.adminUrl + '/upload/';

    constructor(private  service: AppService,
                public dialog: MatDialog) {
    }

    ngOnInit() {

        this.service.getProducts().subscribe(data => {

            console.log('Products ', data);

            this.items = data;
        })

    }

    openDialog(id: number) {
        const dialogRef = this.dialog.open(ProductDetailsDialog, {
            data: {id: id},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
