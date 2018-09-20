import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { LeftMenuModule } from '../left-menu/left-menu.module';
import { MainContentModule } from '../main-content/main-content.module';

@NgModule({
  imports: [
    CommonModule,

    LeftMenuModule,
    MainContentModule,
   
  ],
  declarations: [WrapperComponent],
  exports :[WrapperComponent]
})
export class WrapperModule { }
