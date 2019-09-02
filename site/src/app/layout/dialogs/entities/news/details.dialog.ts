import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from '../../../../shared/services/app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NewsEntity} from '../../../../shared/entities/news.entity';

@Component({
    selector: 'app-news-details',
    templateUrl: './details.dialog.html'
})
export class NewsDetailsDialog implements OnInit {

    item: NewsEntity=new NewsEntity();

    constructor(private  service: AppService,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {

        this.service.getNew(this.data.id).subscribe(data => {

            console.log('News ', data);

            this.item = data;
        })

    }

}
