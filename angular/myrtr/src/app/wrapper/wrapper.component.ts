import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.queryParams.subscribe(prm => console.log(prm))
  }
}
