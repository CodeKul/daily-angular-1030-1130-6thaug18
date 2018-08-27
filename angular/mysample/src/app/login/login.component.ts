import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {

  pTxt: string = 'android'
  tp = 'text'
  tgl = false
  brd = '1px solid '

  constructor() { }

  ngOnInit() {
  }

  onLogin(txt: string) {
    console.log(`Button clicked`)
    this.pTxt = txt.toUpperCase()
  }

  onEnter() {
    console.log(`Entered in div`)
  }
  tglJmb() {
    this.tgl = !this.tgl
  }
}
