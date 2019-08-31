import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

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

    }


}
