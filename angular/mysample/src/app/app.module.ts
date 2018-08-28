import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { PricingModule } from './pricing/pricing.module';
import { AlertMyComponent } from './jumbo/alert-my/alert-my.component';
import { BtnPnlComponent } from './jumbo/btn-pnl/btn-pnl.component';

@NgModule({
  declarations: [
    AppComponent,
    JumboComponent,
    AlertMyComponent,
    BtnPnlComponent
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
