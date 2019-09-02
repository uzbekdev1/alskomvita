import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {LeadershipEntity} from '../shared/entities/leadership.entity';
import {MatDialog} from '@angular/material/dialog';
import {LeadershipDetailsDialog} from '../layout/dialogs/entities/leadership/details.dialog';

@Component({
    selector: 'app-leaderships',
    templateUrl: './leaderships.component.html',
    styleUrls: ['./leaderships.component.scss']
})
export class LeadershipsComponent implements OnInit {

    items: LeadershipEntity[];
    baseUrl = environment.adminUrl + '/upload/';

    constructor(private  service: AppService,
                public dialog: MatDialog) {
    }

    ngOnInit() {

        this.service.getLeaderships().subscribe(data => {

            console.log('Leaderships ', data);

            this.items = data;
        })

    }

    openDialog(id: number) {
        const dialogRef = this.dialog.open(LeadershipDetailsDialog, {
            data: {id: id},
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
