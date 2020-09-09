import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  weather: any;
  title: string;
  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
    console.log(this.weather);
  }

}
