import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private textChangeListener: Subject<any> = new Subject();
  public textChangeObservable: Observable<any> = this.textChangeListener.asObservable();

  private historyListener: Subject<any> = new Subject();
  public historyObservable: Observable<any> = this.historyListener.asObservable();

  public searchArray: any[] = [];

  constructor(private httpClient: HttpClient) { }

  setSearchText(searchText: any) {
    this.textChangeListener.next(searchText);
  }

  getWeatherData(searchPlace: string) {
    // tslint:disable-next-line: prefer-const
    let params = {
      q: searchPlace,
      APPID: '279b4be6d54c8bf6ea9b12275a567156'
    };
    const requestUrl = `http://api.openweathermap.org/data/2.5/forecast/daily`;
    return this.httpClient.get(requestUrl, {params});
  }

  setHistory(searchPlace: any, flag: boolean) {
    const history = {
      searchPlace,
      flag
    };
    this.historyListener.next(history);
  }
}
