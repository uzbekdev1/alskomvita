import {Component, OnInit} from '@angular/core';
import {LocalizeService} from '../../shared/services/localize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang: string;
  langs: { text: string, value: string }[];

  constructor(private localize: LocalizeService) {

    this.currentLang = this.localize.getLang();
    this.langs = this.localize.getList();

    this.localize.changeLang(this.currentLang);
  }

  ngOnInit() {

  }

  changeLang(lang: string) {
    this.localize.changeLang(lang);

    location.reload(true);
  }
}
