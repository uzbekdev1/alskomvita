import {NgModule} from '@angular/core';
import {
    MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatDialogModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({

    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatRadioModule,
        MatGridListModule,
        MatMenuModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTooltipModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatRadioModule,
        MatGridListModule,
        MatMenuModule,
    ]
})
export class Material2Module {
}
