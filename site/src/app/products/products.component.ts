import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {ProductEntity} from '../shared/entities/product.entity';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: ProductEntity[];
  baseUrl = environment.adminUrl + '/upload/';

  constructor(private  service: AppService) {
  }

  ngOnInit() {

    this.service.getProducts().subscribe(data => {

      console.log('Products ', data);

      this.items = data;
    });

  }

}
