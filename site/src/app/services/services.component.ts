import {Component, OnInit} from '@angular/core';
import {SpectForm} from '../shared/models/spect.form';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    displayedColumns: string[] = ['item', 'cost'];

    specifications: SpectForm[] = [
        {item: '1', cost: 1000000},
        {item: '2', cost: 1000000},
        {item: '3', cost: 1000000},
        {item: '4', cost: 1000000},
        {item: '5', cost: 1000000},
        {item: '6', cost: 1000000},
        {item: '7', cost: 1000000},
        {item: '8', cost: 1000000},
        {item: '9', cost: 1000000},
        {item: '10', cost: 1000000},
        {item: '11', cost: 1000000},
        {item: '12', cost: 1000000}
    ];

    constructor() {
    }

    getTotalCost() {
        return this.specifications.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    ngOnInit() {
    }

}
