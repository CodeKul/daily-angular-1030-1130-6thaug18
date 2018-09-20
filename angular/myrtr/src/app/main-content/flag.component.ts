import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  template: `
    <img src="http://www.codekul.com/images/codekul.png" width="500" height="500">
  `,
  styles: []
})
export class FlagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
