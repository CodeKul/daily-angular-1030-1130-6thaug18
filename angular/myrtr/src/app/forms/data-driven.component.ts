import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      nm: this.fb.control('', Validators.required),
      eml: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      mbl: this.fb.control('', Validators.required)
    })
  }

  frmSub() {
    console.log(this.fg)
    console.log(this.fg.value)
  }
}
