import {Component, OnInit} from '@angular/core';

declare var scrollToAnchor: any;
declare var $: any;

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
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
