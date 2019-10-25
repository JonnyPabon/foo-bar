import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sharedData = 'Foo Shared Data';

  //property that is being initialized
  changeSharedData = () => {
    console.log('changedSharedData');
  }
}
