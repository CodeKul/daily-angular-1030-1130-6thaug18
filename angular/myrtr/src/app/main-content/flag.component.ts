import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  template: `
    <img [src]="url" width="500" height="500">
  `,
  styles: []
})
export class FlagComponent implements OnInit {

  url : string
  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.queryParams.subscribe( prm => {
      if(prm['fl'] == 'in') {
        this.url = `https://media.istockphoto.com/photos/indian-flag-picture-id177387875?k=6&m=177387875&s=612x612&w=0&h=y0yvOQZeqfvxR1oYXTEZyNbwW28ZiJTEIR8dkSTpaus=`
      }
      else {
        this.url = `https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX19270240.jpg`
      }
    })
  }
}
