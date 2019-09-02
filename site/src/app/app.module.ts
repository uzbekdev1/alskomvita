import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DirectivesModule} from './shared/directives/directives.module';
import {Material2Module} from './material2.module';

import {AppComponent} from './app.component';
import {LeadershipsComponent} from './leaderships/leaderships.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './layout/header/header.component';
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {LanguageDialog} from './layout/dialogs/language/language.dialog';
import {FooterComponent} from './layout/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BranchesComponent} from './branches/branches.component';
import {ProductsComponent} from './products/products.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {LocalizeService} from './shared/services/localize.service';
import {AppService} from './shared/services/app.service';
import {LeadershipDetailsDialog} from './layout/dialogs/entities/leadership/details.dialog';
import {ProductDetailsDialog} from './layout/dialogs/entities/product/details.dialog';
import {NewsDetailsDialog} from './layout/dialogs/entities/news/details.dialog';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HeaderComponent,
        NewsComponent,
        ContactComponent,
        LanguageDialog,
        LeadershipDetailsDialog,
        ProductDetailsDialog,
        NewsDetailsDialog,
        BranchesComponent,
        FooterComponent,
        LeadershipsComponent,
        ProductsComponent,
        VacanciesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        Material2Module,
        FlexLayoutModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [LocalizeService, AppService,
        {
            provide: LOCALE_ID,
            deps: [LocalizeService],
            useFactory: (sessionService) => sessionService.getLocale()
        }],
    entryComponents: [LanguageDialog, LeadershipDetailsDialog, ProductDetailsDialog, NewsDetailsDialog],
    bootstrap: [AppComponent]
})
export class AppModule {
}
