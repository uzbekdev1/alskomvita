import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './layout/header/header.component';
import {ContactComponent} from './contact/contact.component';
import {NewsComponent} from './news/news.component';
import {FooterComponent} from './layout/footer/footer.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {ProductsComponent} from './products/products.component';
import {LeadershipsComponent} from './leaderships/leaderships.component';
import {LocalizeService} from './shared/services/localize.service';
import {AppService} from './shared/services/app.service';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ModalModule} from 'ngx-bootstrap';
import {PartnersComponent} from './partners/partners.component';

export function localeIdFactory(localeService: LocalizeService) {
  return localeService.getLocale();
}

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NewsComponent,
    ContactComponent,
    FooterComponent,
    LeadershipsComponent,
    ProductsComponent,
    VacanciesComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: '**', redirectTo: '/home'}
    ]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ModalModule.forRoot()
  ],
  providers: [
    LocalizeService,
    AppService,
    {
      provide: LOCALE_ID,
      useFactory: localeIdFactory,
      deps: [LocalizeService]
    }],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
