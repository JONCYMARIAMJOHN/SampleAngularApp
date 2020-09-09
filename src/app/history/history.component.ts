import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';
//import { parse } from 'path';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private searchPlace: any;
  private flag: boolean;
  public list: any[] = [];

  constructor(private weatherService: WeatherService,
              private router: Router) {
    this.weatherService.historyObservable.subscribe(data => {
      this.searchPlace = data.searchPlace;
      this.flag = data.flag;

      if (!this.flag && this.searchPlace) {
      this.searchPlace = `${this.searchPlace} ( Notfound )`;
      }
      if (!this.searchPlace) {
      this.searchPlace = `Nothing entered !!!`;
      }

      this.list = [...this.list, {place : this.searchPlace, flag : this.flag}];
      localStorage.setItem('lst', JSON.stringify(this.list));
      console.log(this.list);
    });
  }

  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('lst'));
  }

  onHistoryCheck(historyText, historyFlag) {
    if (historyFlag) {
      this.router.navigate(['/view-history', historyText]);
    }
  }

}
