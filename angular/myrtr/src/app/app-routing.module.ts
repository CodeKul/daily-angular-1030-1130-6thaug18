import { AgeCalcComponent } from './main-content/age-calc.component';
import { AmericaComponent } from './main-content/america.component';
import { FlagComponent } from './main-content/flag.component';
import { RememberMeComponent } from './login/remember-me/remember-me.component';
import { LoginComponent } from './login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaComponent } from './main-content/india.component';
import { DashGuard } from './dash.guard';

const dashRoutes = [
  { path: 'flg', component: FlagComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'america', component: AmericaComponent },
  { path: 'ag', component: AgeCalcComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: WrapperComponent, children: dashRoutes, canActivate: [DashGuard] },
  { path: 'rm/:nm', component: RememberMeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
