import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import localeRu from '@angular/common/locales/ru';
import localeUz from '@angular/common/locales/uz';
import localeEn from '@angular/common/locales/en';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeUzExtra from '@angular/common/locales/extra/uz';
import localeEnExtra from '@angular/common/locales/extra/en';
import {registerLocaleData} from '@angular/common';

@Injectable()
export class LocalizeService {

  keyLang = 'lang';
  langPattern = new RegExp(/en|ru|uz/);

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'ru', 'uz']);

    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang.match(this.langPattern) ? browserLang : 'ru';

    this.translate.setDefaultLang(defaultLang);
  }

  getList() {
    return [
      {value: 'ru', text: 'Русский'},
      {value: 'uz', text: 'O\'zbekcha'},
      {value: 'en', text: 'English'},
    ];
  }

  getLang() {

    const currentLang = localStorage.getItem(this.keyLang);

    return currentLang.match(this.langPattern) ? currentLang : this.translate.getDefaultLang();
  }

  getLocale() {
    return this.getLang().toLowerCase() + '-' + this.getLang().toUpperCase();
  }

  changeLang(lang: string) {
    localStorage.setItem(this.keyLang, lang);

    if (lang === 'ru') {
      registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
    } else if (lang === 'uz') {
      registerLocaleData(localeUz, 'uz-UZ', localeUzExtra);
    } else {
      registerLocaleData(localeEn, 'en-EN', localeEnExtra);
    }

    this.translate.use(lang);
  }

}
