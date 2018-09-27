import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
 // https://bootsnipp.com/snippets/featured/message-chat-box
  fg: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
   }

  ngOnInit() {
    this.fg = this.fb.group({
      nm: this.fb.control('', Validators.required, this.sampleAsync),
      eml: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      mbl: this.fb.control('', Validators.compose([Validators.required, this.tenDigitsMob]))
    })
  }

  frmSub() {
    console.log(this.fg)
    console.log(this.fg.value)
  }

  tenDigitsMob(control: AbstractControl): ValidationErrors | null {
    console.log(control.value.length)
    if (control.value.length > 10) return { length: control.value.length }
    return null
  }

  sampleAsync(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>(
      (res, rej) => setTimeout(
        () => {
          if (control.value.charAt(0) == 'a') res(null)
          else res({ nota: control.value.charAt(0) })
        }, 2500
      )
    )
  }
}
