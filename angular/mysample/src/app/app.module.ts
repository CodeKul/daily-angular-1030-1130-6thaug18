import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { PricingModule } from './pricing/pricing.module';
import { AlertMyComponent } from './jumbo/alert-my/alert-my.component';
import { BtnPnlComponent } from './jumbo/btn-pnl/btn-pnl.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { MagicDirective } from './directives/magic.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    JumboComponent,
    AlertMyComponent,
    BtnPnlComponent,
    LifecycleComponent,
    DirectivesComponent,
    MagicDirective,
    UnlessDirective
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
