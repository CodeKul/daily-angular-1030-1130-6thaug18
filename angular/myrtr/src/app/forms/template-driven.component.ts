import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  frmDt = {
    nm : 'xyz pqr',
    eml : 'xyz@gmail.com',
    mb :'9762548833'
  }
  constructor() { }

  ngOnInit() {
  }

  frmSub(frm : NgForm) {
    console.log(`Form Submitted`)
    console.log(frm)
    console.log(frm.value)
    console.log(this.frmDt)
  }
}
