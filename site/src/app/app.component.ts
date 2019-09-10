import { Component, OnDestroy, OnInit, AfterViewChecked } from '@angular/core';
import { LocalizeService } from './shared/services/localize.service';

declare var initMenu: any;
declare var $: any;
declare var onCLickHeaderNav: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {

  constructor(private localize: LocalizeService) {

    this.localize.changeLang(this.localize.getLangCode());
  }

  ngOnDestroy(): void {
  }

  ngAfterViewChecked(): void {
  }

  ngOnInit(): void {

    setTimeout(() => {

      initMenu();

      $('#mobile-nav a[data-target]').on('click', function () {

        onCLickHeaderNav($(this));
      });

      $('#mobile-nav a[data-lang]').on('click', function () {

        const langCode = $(this).data('lang');
        const langId = localStorage.getItem('lang' + langCode + 'Id');

        localStorage.setItem('langId', langId);
        localStorage.setItem('langCode', langCode);

        location.reload(true);
      });

    }, 1000);


  }
}
