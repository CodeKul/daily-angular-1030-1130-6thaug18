import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: LoginComponent
})
export class LoginService {

  constructor() { }
}
