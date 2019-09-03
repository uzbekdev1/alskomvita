import {Component, OnInit, TemplateRef} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {LeadershipEntity} from '../shared/entities/leadership.entity';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-leaderships',
  templateUrl: './leaderships.component.html',
  styleUrls: ['./leaderships.component.scss']
})
export class LeadershipsComponent implements OnInit {

  items: LeadershipEntity[];
  baseUrl = environment.adminUrl + '/upload/';

  item: LeadershipEntity;
  modalRef: BsModalRef;

  constructor(private service: AppService, private modalService: BsModalService) {
  }

  ngOnInit() {

    this.service.getLeaderships().subscribe(data => {

      console.log('Leaderships ', data);

      this.items = data;
    });

  }

  openModal(item: LeadershipEntity, template: TemplateRef<any>) {

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
