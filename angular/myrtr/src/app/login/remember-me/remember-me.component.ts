import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remember-me',
  template: `
  <div class="jumbotron">
    <h1 class="display-4">Remember Me {{name}}</h1>
    <p class="lead">Enter your registerd mobile or email ID</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `,
  styles: []
})
export class RememberMeComponent implements OnInit {

  name : string = 'gaga'

  constructor(
    private acRt : ActivatedRoute
  ) {
    console.log(acRt)
   }

  ngOnInit() {

    this.acRt.params.subscribe( prm => {
      console.log(prm)
      this.name = prm['nm'] 
    })
  }
}
