import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { BaseComponent } from './base/base.component';
import { WeatherService } from './services/weather.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ViewMoreComponent } from './view-more/view-more.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { from } from 'rxjs';
import { HistoryComponent } from './history/history.component';
import { ViewHistoryComponent } from './view-history/view-history.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    BaseComponent,
    ViewMoreComponent,
    HistoryComponent,
    ViewHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
