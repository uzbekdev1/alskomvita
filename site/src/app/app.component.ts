import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalizeService} from './shared/services/localize.service';

declare var initMenu: any;
declare var $: any;
declare var onCLickHeaderNav: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private localize: LocalizeService) {

    this.localize.changeLang(this.localize.getLangCode());
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    setTimeout(() => {

      initMenu();

      $('#mobile-nav a').on('click', function() {

        onCLickHeaderNav($(this));
      });

    }, 1000);


  }
}
