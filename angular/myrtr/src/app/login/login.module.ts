import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RememberMeComponent } from './remember-me/remember-me.component';

@NgModule({
  imports: [
    CommonModule,

    AppRoutingModule
  ],
  declarations: [LoginComponent, RememberMeComponent],
  exports : [LoginComponent, RememberMeComponent]
})
export class LoginModule { }
