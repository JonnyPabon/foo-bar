import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  //dependency inject
  constructor(private bigCat: SharedDataService) { }

  ngOnInit() {
  }

  get kitten() {
    return this.bigCat.data;

  }
  badKitty() {
    this.bigCat.data = 'Meow';
  }

}
