import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven.component';
import { DataDrivenComponent } from './data-driven.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,

    FormsModule
  ],
  declarations: [FormsComponent, TemplateDrivenComponent, DataDrivenComponent],
  exports: [FormsComponent, TemplateDrivenComponent, DataDrivenComponent]
})
export class MyFormsModule { }
