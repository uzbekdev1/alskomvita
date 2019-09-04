import {Component, OnInit} from '@angular/core';

declare var scrollToAnchor: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    this.loadJQuery();
  }

  loadJQuery() {

    setTimeout(() => {

      $('a[data-target]').on('click', function() {
        scrollToAnchor($(this).data('target'));
      });

    }, 100);

  }


}
