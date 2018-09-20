import { AmericaComponent } from './main-content/america.component';
import { FlagComponent } from './main-content/flag.component';
import { RememberMeComponent } from './login/remember-me/remember-me.component';
import { LoginComponent } from './login/login.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiaComponent } from './main-content/india.component';

const dashRoutes = [
  { path: 'india', component: IndiaComponent },
  { path: 'america', component: AmericaComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dash', component: WrapperComponent, children : dashRoutes },
  { path: 'rm/:nm', component: RememberMeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
