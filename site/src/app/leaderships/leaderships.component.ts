import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {LeadershipEntity} from '../shared/entities/leadership.entity';

@Component({
  selector: 'app-leaderships',
  templateUrl: './leaderships.component.html',
  styleUrls: ['./leaderships.component.scss']
})
export class LeadershipsComponent implements OnInit {

  items: LeadershipEntity[];
  baseUrl = environment.adminUrl + '/upload/';

  constructor(private  service: AppService) {
  }

  ngOnInit() {

    this.service.getLeaderships().subscribe(data => {

      console.log('Leaderships ', data);

      this.items = data;
    });

  }
}
