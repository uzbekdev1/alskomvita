import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppService } from '../shared/services/app.service';
import { ProductEntity } from '../shared/entities/product.entity';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  items: ProductEntity[];
  baseUrl = environment.adminUrl + '/upload/';
  item: ProductEntity;
  modalRef: BsModalRef;

  constructor(private service: AppService, private modalService: BsModalService) {
  }

  ngOnInit() {

    this.service.getProducts().subscribe(data => {

      console.log('Products ', data);

      this.items = data;
    });

  }

  openModal(item: ProductEntity, template: TemplateRef<any>) {

    this.item = item;

    this.modalRef = this.modalService.show(template, {
      keyboard: false,
      ignoreBackdropClick: true,
      class: 'modal-lg modal-dialog-centered'
    });

  }

  closeModal() {
    this.item = null;

    this.modalRef.hide();
  }

}
