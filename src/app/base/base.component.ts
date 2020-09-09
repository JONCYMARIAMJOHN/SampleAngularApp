import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  public searchTextValue: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onSearchTextChange(searchText) {
    this.searchTextValue = searchText;
  }
}
