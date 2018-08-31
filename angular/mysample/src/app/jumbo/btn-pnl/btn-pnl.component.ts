import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-pnl',
  templateUrl: './btn-pnl.component.html',
  styleUrls: ['./btn-pnl.component.css']
})
export class BtnPnlComponent implements OnInit {

  @Output()
  onAlert: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onBtn(btn: number) {
    switch (btn) {
      case 1:
        this.onAlert.emit('alert alert-primary')
        break;
      case 2:
        this.onAlert.emit('alert alert-secondry')
        break;
      case 3:
        this.onAlert.emit('alert alert-success')
        break;
      case 4:
        this.onAlert.emit('alert alert-danger')
        break;
      case 5:
        this.onAlert.emit('alert alert-warning')
        break;
      case 6:
        this.onAlert.emit('alert alert-info')
        break;
      default:
        break;
    }
  }
}
