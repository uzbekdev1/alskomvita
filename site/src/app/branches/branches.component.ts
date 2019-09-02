import {Component, OnInit} from '@angular/core';
import {AppService} from '../shared/services/app.service';
import {BranchEntity} from '../shared/entities/branch.entity';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-branches',
    templateUrl: './branches.component.html',
    styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {

    items: BranchEntity[];
    baseUrl = environment.adminUrl + '/upload/';

    constructor(private  service: AppService) {
    }

    ngOnInit() {

        this.service.getBranches().subscribe(data => {

            console.log('Branches ', data);

            this.items = data;
        })

    }

}
