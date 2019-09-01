import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-language-dialog',
    templateUrl: './language-dialog.component.html',
    styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent implements OnInit {

    selectedLanguage: string;
    languages = [
        {value: 'ru', text: 'Русский'},
        {value: 'uz', text: 'O\'zbekcha'},
        {value: 'en', text: 'English'},
    ];

    constructor(private dialogRef: MatDialogRef<LanguageDialogComponent>,
                private  translate: TranslateService) {
    }

    dialogOff(): void {
        this.dialogRef.close(null);
    }

    ngOnInit(): void {
        this.selectedLanguage = this.translate.getDefaultLang();
    }

    onSubmit() {

        localStorage.setItem('lang', this.selectedLanguage);

        this.translate.setDefaultLang(this.selectedLanguage);
        this.translate.use(this.selectedLanguage);

        this.dialogRef.close({lang: this.selectedLanguage});

    }

}
