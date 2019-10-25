import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  //DI via typescript automatic property
  //access specifier of private 
  constructor(private sdSvc: SharedDataService) { }

  ngOnInit() {
  }
  //initialized because we wanted to see our binding work
  //temporary property just to show the data binding was working
  //sharedData = 'Foo Shared Data';

  //TS getter property - getter is we can run code when it is requested.
  get sharedData() {
    return this.sdSvc.data;
  }

  //property that is being initialized
  changeSharedData = () => {
    console.log('changedSharedData');
    this.sdSvc.data='Foo';
  }
}
