import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { WeatherService } from '../services/weather.service';
import * as moment from 'moment';
import { ViewMoreComponent } from '../view-more/view-more.component';

@Component({
  selector: 'app-view-history',
  templateUrl: './view-history.component.html',
  styleUrls: ['./view-history.component.css']
})
export class ViewHistoryComponent implements OnInit {

  public exactdata: any;
  public date: any;
  public place: any;
  public weatherDetails: any[];
  // modalRef: NgbModalRef;

  constructor(private activatedRouter: ActivatedRoute,
              private modalService: BsModalService,
              private weatherService: WeatherService) {
    console.log(this.activatedRouter.snapshot.params.city);
   }

  ngOnInit(): void {
    this.onHistoryView(this.activatedRouter.snapshot.params.city);
  }

  onHistoryView(historyText) {
    this.weatherService.getWeatherData(historyText).subscribe(data => {
      this.exactdata = data;
      this.place = this.exactdata.city.name;
      // tslint:disable-next-line: variable-name
      this.weatherDetails = this.exactdata.list.map((_weather: any) => {
        // const dat = new Date(_weatherData.dt * 1000);
        const date = moment(_weather.dt * 1000).format('Do MMMM, YYYY');
        return {
          // exactdate: `${dat.getDate()} - ${dat.getMonth()} - ${dat.getFullYear()}`,
          exactdate: date,
          temperature: {
            day: _weather.temp.day,
            min: _weather.temp.min,
            max: _weather.temp.max,
            night: _weather.temp.night,
            eve: _weather.temp.eve,
            morn: _weather.temp.morn
          },
          pressure: _weather.pressure,
          humidity: _weather.humidity,
          weather: _weather.weather[0].main,
          description: _weather.weather[0].description
        };

      });
    });
  }
  onViewMore(row) {
    const initialState = {
      weather: row,
      title: 'More Details'
    };
    this.modalService.show(ViewMoreComponent, {initialState});
  }
}
