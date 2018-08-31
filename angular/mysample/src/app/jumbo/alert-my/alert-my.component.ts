import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-my',
  templateUrl: './alert-my.component.html',
  styleUrls: ['./alert-my.component.css']
})
export class AlertMyComponent implements OnInit {

  @Input()
  alCls : string

  constructor() { }

  ngOnInit() {
  }
}
