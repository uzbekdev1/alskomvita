import { Component, OnInit, TemplateRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppService } from '../shared/services/app.service';
import { NewsEntity } from '../shared/entities/news.entity';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  items: NewsEntity[];
  baseUrl = environment.adminUrl + '/upload/';
  item: NewsEntity;
  modalRef: BsModalRef;

  constructor(private service: AppService, private modalService: BsModalService) {
  }

  ngOnInit() {

    this.service.getNews().subscribe(data => {

      console.log('News ', data);

      this.items = data;
    });

  }

  openModal(item: NewsEntity, template: TemplateRef<any>) {

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
