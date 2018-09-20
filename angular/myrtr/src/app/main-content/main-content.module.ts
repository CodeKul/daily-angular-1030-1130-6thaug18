import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlagComponent } from './flag.component';
import { IndiaComponent } from './india.component';
import { AmericaComponent } from './america.component';
import { AgeCalcComponent } from './age-calc.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [MainContentComponent, FlagComponent, IndiaComponent, AmericaComponent, AgeCalcComponent],
  exports :[MainContentComponent]
})
export class MainContentModule { }
