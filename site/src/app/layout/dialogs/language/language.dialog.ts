import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LocalizeService} from '../../../shared/services/localize.service';

@Component({
    selector: 'app-language-dialog',
    templateUrl: './language.dialog.html',
    styleUrls: ['./language.dialog.scss']
})
export class LanguageDialog implements OnInit {

    selectedLanguage: string;
    languages: { value: string; text: string; }[];

    constructor(private dialogRef: MatDialogRef<LanguageDialog>,
                private  localize: LocalizeService) {
        this.languages = this.localize.getList();
    }

    dialogOff(): void {
        this.dialogRef.close(null);
    }

    ngOnInit(): void {
        this.selectedLanguage = this.localize.getLang();
    }

    onSubmit() {

        this.localize.changeLang(this.selectedLanguage);
        this.dialogRef.close({lang: this.selectedLanguage});

    }

}
