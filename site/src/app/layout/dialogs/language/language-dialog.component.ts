import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-language-dialog',
    templateUrl: './language-dialog.component.html',
    styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent {

    selectedLanguage: string;
    languages = [
        {value: 'ru', text: 'Русский'},
        {value: 'uz', text: 'O\'zbekcha'},
        {value: 'en', text: 'English'},
    ];

    constructor(private dialogRef: MatDialogRef<LanguageDialogComponent>) {
    }

    dialogOff(): void {
        this.dialogRef.close();
    }

    onSubmit() {


    }

}
