import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css']
})
export class PriceCardComponent implements OnInit {

  @Input()
  type: string

  @Input()
  cost: string

  @Input()
  info: string[]

  @Output()
  onSignUp : EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  plsSignUp() {
    this.onSignUp.emit(this.type)
  }

}
