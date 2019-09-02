import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {NewsEntity} from '../shared/entities/news.entity';
import {MatDialog} from '@angular/material/dialog';
import {NewsDetailsDialog} from '../layout/dialogs/entities/news/details.dialog';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    items: NewsEntity[];
    baseUrl = environment.adminUrl + '/upload/';

    constructor(private  service: AppService,
                public dialog: MatDialog) {
    }

    ngOnInit() {

        this.service.getNews().subscribe(data => {

            console.log('News ', data);

            this.items = data;

            setTimeout(() => {

                jQuery(function ($) {

                    let owl = $('.owl-carousel');

                    owl.owlCarousel({
                        margin: 10,
                        touchDrag: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            }
                        }
                    });

                    $('.customNextBtn').click(function () {
                        owl.trigger('next.owl.carousel');
                    });

                    $('.customPrevBtn').click(function () {
                        owl.trigger('prev.owl.carousel');
                    });

                });

            }, 2000)
        });

    }

    openDialog(id: number) {
        const dialogRef = this.dialog.open(NewsDetailsDialog, {
            data: {id: id},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
