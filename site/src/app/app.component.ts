import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocalizeService} from './shared/services/localize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private localize: LocalizeService) {

    this.localize.changeLang(this.localize.getLang());
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
