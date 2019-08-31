import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DirectivesModule} from './shared/directives/directives.module';
import {Material2Module} from './material2.module';

import {AppComponent} from './app.component';
import {LeadershipsComponent} from './leaderships/leaderships.component';
import {AboutComponent} from './about/about.component';
import {HeaderComponent} from './layout/header/header.component';
import {ServicesComponent} from './services/services.component';
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {LanguageDialogComponent} from './layout/dialogs/language/language-dialog.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BranchesComponent} from './branches/branches.component';
import {ResourcesComponent} from './resources/resources.component';
import {ProductsComponent} from './products/products.component';
import {VacanciesComponent} from './vacancies/vacancies.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LeadershipsComponent,
        AboutComponent,
        HeaderComponent,
        ServicesComponent,
        NewsComponent,
        ContactComponent,
        LanguageDialogComponent,
        BranchesComponent,
        FooterComponent,
        ResourcesComponent,
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
    providers: [],
    entryComponents: [LanguageDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
