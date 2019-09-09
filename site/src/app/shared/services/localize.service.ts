import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import localeRu from '@angular/common/locales/ru';
import localeUz from '@angular/common/locales/uz';
import localeEn from '@angular/common/locales/en';
import localeRuExtra from '@angular/common/locales/extra/ru';
import localeUzExtra from '@angular/common/locales/extra/uz';
import localeEnExtra from '@angular/common/locales/extra/en';
import { registerLocaleData } from '@angular/common';
import { AppService } from './app.service';
import { async } from 'q';

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
      { value: 'ru', text: 'Русский' },
      { value: 'uz', text: 'O\'zbekcha' },
      { value: 'en', text: 'English' },
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

    setTimeout(async () => {

      const language = await this.app.getLanguage(lang);
      localStorage.setItem('langId', language.id + '');

    }, 500);

    setTimeout(async () => {

      const langauges = await this.app.getLanguages();
      for (const item of langauges) {
        localStorage.setItem('lang' + item.code + 'Id', item.id + '');
      }

    }, 500);

    this.translate.use(lang);
  }

}
