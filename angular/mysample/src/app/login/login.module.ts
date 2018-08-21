import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RmbMeComponent } from './rmb-me.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RmbMeComponent],
  exports :[LoginComponent]
})
export class LoginModule { }
