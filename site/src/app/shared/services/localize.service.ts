import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import localeRu from '@angular/common/locales/ru';
import localeUz from '@angular/common/locales/uz';
import localeEn from '@angular/common/locales/en';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeUzExtra from '@angular/common/locales/extra/uz';
import localeEnExtra from '@angular/common/locales/extra/en';
import {registerLocaleData} from '@angular/common';
import {AppService} from './app.service';

@Injectable()
export class LocalizeService {

  keyLangCode = 'langCode';
  langPattern = new RegExp(/en|ru|uz/);

  constructor(private translate: TranslateService,
              private app: AppService) {
    this.translate.addLangs(['en', 'ru', 'uz']);

    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && browserLang.match(this.langPattern) ? browserLang : 'ru';

    this.translate.setDefaultLang(defaultLang);
  }

  getList() {
    return [
      {value: 'ru', text: 'Русский'},
      {value: 'uz', text: 'O\'zbekcha'},
      {value: 'en', text: 'English'},
    ];
  }

  getLangCode() {

    const currentLang = localStorage.getItem(this.keyLangCode);

    return currentLang && currentLang.match(this.langPattern) ? currentLang : this.translate.getDefaultLang();
  }

  getLocale() {
    return this.getLangCode().toLowerCase() + '-' + this.getLangCode().toUpperCase();
  }

  changeLang(lang: string) {
    localStorage.setItem(this.keyLangCode, lang);

    if (lang === 'ru') {
      registerLocaleData(localeRu, 'ru-RU', localeRuExtra);
    } else if (lang === 'uz') {
      registerLocaleData(localeUz, 'uz-UZ', localeUzExtra);
    } else {
      registerLocaleData(localeEn, 'en-EN', localeEnExtra);
    }

    this.app.getLanguage(lang).subscribe(data => {
      localStorage.setItem('langId', data.id + '');
    });

    this.app.getLanguages().subscribe(data => {
      for (let item of data) {
        localStorage.setItem('lang' + item.code + 'Id', item.id + '');
      }
    });

    this.translate.use(lang);
  }

}
