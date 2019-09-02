import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppService} from '../shared/services/app.service';
import {VacancyEntity} from '../shared/entities/vacancy.entity';

@Component({
    selector: 'app-vacancies',
    templateUrl: './vacancies.component.html',
    styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

    items: VacancyEntity[];
    baseUrl = environment.adminUrl + '/upload/';

    constructor(private  service: AppService) {
    }

    ngOnInit() {

        this.service.getVacancies().subscribe(data => {

            console.log('Vacancies ', data);

            this.items = data;
        })

    }

}
