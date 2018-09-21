import { FormsComponent } from './forms/forms.component';
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
import { TemplateDrivenComponent } from './forms/template-driven.component';
import { DataDrivenComponent } from './forms/data-driven.component';

const dashRoutes = [
  { path: 'flg', component: FlagComponent },
  { path: 'india', component: IndiaComponent },
  { path: 'america', component: AmericaComponent },
  { path: 'ag', component: AgeCalcComponent }
]

const formsChildren = [
  { path: 'td', component: TemplateDrivenComponent },
  { path: 'dd', component: DataDrivenComponent },
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: WrapperComponent, children: dashRoutes, canActivate: [DashGuard] },
  { path: 'rm/:nm', component: RememberMeComponent },
  { path: 'forms', component: FormsComponent, children: formsChildren },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
