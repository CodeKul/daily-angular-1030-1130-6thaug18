import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { PricingModule } from './pricing/pricing.module';

@NgModule({
  declarations: [
    AppComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    PricingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
