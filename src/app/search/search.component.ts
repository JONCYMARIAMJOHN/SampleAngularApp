import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchText: string;
  public flag: boolean;
  public errormessage: string;

  @Output() emitSearch = new EventEmitter();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.searchText = JSON.parse(localStorage.getItem('text'));
  }

  public onSearch(event) {
    this.weatherService.getWeatherData(event.target.value).subscribe( data => {
      this.errormessage = null;
      this.weatherService.setSearchText(data);
      this.flag = true;
      this.weatherService.setHistory(event.target.value, this.flag);
      localStorage.setItem('text', JSON.stringify(event.target.value));
    }, (err) => {
      this.errormessage = err.error.message;
      this.weatherService.setSearchText(null);
      this.flag = false;
      this.weatherService.setHistory(event.target.value, this.flag);
      localStorage.setItem('text', JSON.stringify(event.target.value));
    });
  }
}
