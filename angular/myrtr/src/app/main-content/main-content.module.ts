import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { AppRoutingModule } from '../app-routing.module';
import { FlagComponent } from './flag.component';
import { IndiaComponent } from './india.component';
import { AmericaComponent } from './america.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [MainContentComponent, FlagComponent, IndiaComponent, AmericaComponent],
  exports :[MainContentComponent]
})
export class MainContentModule { }
