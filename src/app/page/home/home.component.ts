import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any;
  constructor() { }
  ngOnInit() {
    this.home = moment().format('DD/MM/YYYY H:mm');
  }
}
