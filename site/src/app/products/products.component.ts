import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppService } from '../shared/services/app.service';
import { ProductEntity } from '../shared/entities/product.entity';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

declare var $: any;
declare var onCLickHeaderNav: any;

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

  orderNow(e) {
    this.item = null;

    this.modalRef.hide();

    onCLickHeaderNav($(e.target));
  }

  getTitle(s: string) {
    const str: string[] = [];

    if (!s) {
      for (let i = 0; i < 30; i++) {
        str.push('&nbsp;');
      }
      return str.join('');
    } else {
      if (s.length > 30) {
        return s.substr(0, 27) + '...';
      } else {

        for (let i = 0; i < 30 - s.length; i++) {
          str.push('&nbsp;');
        }

        return s + str.join('');
      }
    }
  }

}
