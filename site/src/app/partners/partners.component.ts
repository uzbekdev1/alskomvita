import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PartnerEntity } from '../shared/entities/partner.entity';
import { AppService } from '../shared/services/app.service';

declare var $: any;

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  baseUrl = environment.adminUrl + '/upload/';
  items: PartnerEntity[];

  constructor(private service: AppService) {
  }

  ngOnInit() {

    this.service.getPartners().subscribe(data => {

      console.log('Partners ', data);

      this.items = data;

      setInterval(() => {

        $('.owl-carousel').owlCarousel({
          dotsitems: 1,
          autoplay: true,
          autoWidth: true,
          loop: false,
          dots: true,
          center: false
        });

      }, 1000);


    });

  }
}
