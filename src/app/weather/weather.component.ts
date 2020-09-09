import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import * as moment from 'moment';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ViewMoreComponent } from '../view-more/view-more.component';
import { from } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() searchInput: string;

  public place: string;
  public weather: any[] = [];

  constructor(private weatherService: WeatherService,
              private modalService: BsModalService) {

    this.weatherService.textChangeObservable.subscribe(data => {
      if (data) {
        this.place = data.city.name;
        // tslint:disable-next-line: variable-name
        this.weather = data.list.map((_weatherData: any) => {
          const date = moment(_weatherData.dt * 1000).format('DD/MM/YYYY');
          return {
            place: this.place,
            exactdate: date,
            temperature: {
              day: _weatherData.temp.day,
              min: _weatherData.temp.min,
              max: _weatherData.temp.max,
              night: _weatherData.temp.night,
              eve: _weatherData.temp.eve,
              morn: _weatherData.temp.morn
            },
            pressure: _weatherData.pressure,
            humidity: _weatherData.humidity,
            weather: _weatherData.weather[0].main,
            description: _weatherData.weather[0].description
          };
        });
        console.log(this.weather);
        localStorage.setItem('weatherdetails', JSON.stringify(this.weather));
      } else {
        this.weather = null;
        localStorage.setItem('weatherdetails', JSON.stringify(this.weather));
      }
    });
   }

  ngOnInit(): void {
    this.weather = JSON.parse(localStorage.getItem('weatherdetails'));
  }

  onViewMore(row) {
    const initialState = {
      weather: row,
      title: 'More Details'
    };
    this.modalService.show(ViewMoreComponent, {initialState});
  }
}
