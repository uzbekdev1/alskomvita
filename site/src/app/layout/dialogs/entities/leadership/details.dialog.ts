import {Component, Inject, OnInit} from '@angular/core';
import {LeadershipEntity} from '../../../../shared/entities/leadership.entity';
import {AppService} from '../../../../shared/services/app.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-leadership-details',
    templateUrl: './details.dialog.html'
})
export class LeadershipDetailsDialog implements OnInit {

    item: LeadershipEntity = new LeadershipEntity();

    constructor(private  service: AppService,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {

        this.service.getLeadership(this.data.id).subscribe(data => {

            console.log('Leadership ', data);

            this.item = data;
        })

    }

}
