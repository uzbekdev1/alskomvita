import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isHeading = true;
    isSubheading = true;
    isHeadingBtn = true;

    constructor() {
    }

    ngOnInit() {

        setTimeout(() => {

            $('#owl-demo').owlCarousel({
                autoPlay: 3000,
                items: 1
            });

        }, 5000)

    }

}
