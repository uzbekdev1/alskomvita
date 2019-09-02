import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {NewsEntity} from '../shared/entities/news.entity';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  items: NewsEntity[];
  baseUrl = environment.adminUrl + '/upload/';

  constructor(private  service: AppService) {
  }

  ngOnInit() {

    this.service.getNews().subscribe(data => {

      console.log('News ', data);

      this.items = data;
    });

  }

}
