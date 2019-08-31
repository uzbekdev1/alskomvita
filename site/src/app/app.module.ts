import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DirectivesModule} from './shared/directives/directives.module';
import {Material2Module} from './material2.module';

import {AppComponent} from './app.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {HeadingComponent} from './layout/heading/heading.component';
import {PricingComponent} from './pricing/pricing.component';
import {BlogComponent} from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import {LanguageDialogComponent} from './layout/dialogs/language/language-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {FooterComponent} from './layout/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        PortfolioComponent,
        AboutComponent,
        HeadingComponent,
        PricingComponent,
        BlogComponent,
        ContactComponent,
        LanguageDialogComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        Material2Module,
        FlexLayoutModule,
        DirectivesModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule
    ],
    providers: [],
    entryComponents: [LanguageDialogComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
