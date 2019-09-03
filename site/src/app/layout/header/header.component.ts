import {Component, OnInit} from '@angular/core';
import {LocalizeService} from '../../shared/services/localize.service';

declare var scrollToAnchor: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang: { text: string, value: string };
  langList: { text: string, value: string }[];

  constructor(private localize: LocalizeService) {

    this.langList = this.localize.getList().filter(a => a.value != this.localize.getLangCode());
    this.currentLang = this.localize.getList().find(a => a.value == this.localize.getLangCode());
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

  changeLang(lang: string) {

    this.localize.changeLang(lang);

    location.reload(true);
  }

}
