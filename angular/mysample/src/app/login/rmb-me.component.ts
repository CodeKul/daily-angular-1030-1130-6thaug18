import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rmb-me',
  template: `
  <div class="alert alert-primary" role="alert">
      <a>Remember me</a>
  </div>
  `,
  styles: []
})
export class RmbMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
