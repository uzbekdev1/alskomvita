import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, Inject, OnInit} from '@angular/core';
import {SE} from './shared/directives/scroll.directive';
import {MatDialog} from '@angular/material';
import {LanguageDialog} from './layout/dialogs/language/language.dialog';
import {DOCUMENT} from '@angular/common';
import {LocalizeService} from './shared/services/localize.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

    contactFabButton: any;
    bodyelement: any;
    isActive = false;
    isActivefadeInDown = true;
    fixedTolbar = true;
    mobileQuery: MediaQueryList;
    _mobileQueryListener: () => void;
    currentLang: string;

    constructor(@Inject(DOCUMENT) document,
                changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher,
                public dialog: MatDialog,
                private localize: LocalizeService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        this.currentLang = this.localize.getLang();

        this.localize.changeLang(this.currentLang);
    }

    detectScroll(event: SE) {

        if (event.header) {
            this.isActive = false;
            this.isActivefadeInDown = true;
            this.fixedTolbar = true;
        }

        if (event.bottom) {
            this.isActive = true;
            this.isActivefadeInDown = false;
            this.fixedTolbar = false;
        }

    }

    openDialog(): void {
        const result = this.dialog.open(LanguageDialog, {
            width: '250px'
        });
        result.afterClosed().subscribe(params => {

            if (params) {
                this.currentLang = params.lang;

                console.log('Current lang ', params)

            }
        });
    }

    setToggleOn() {

        this.bodyelement = document.getElementById('nglpage');
        this.bodyelement.classList.add('scrollOff');
        this.contactFabButton = document.getElementById('contact-fab-button');
        this.contactFabButton.style.display = 'none';

    }

    setToggleOff() {

        this.bodyelement = document.getElementById('nglpage');
        this.bodyelement.classList.remove('scrollOff');
        this.contactFabButton = document.getElementById('contact-fab-button');
        this.contactFabButton.removeAttribute('style');

    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
    }

}
