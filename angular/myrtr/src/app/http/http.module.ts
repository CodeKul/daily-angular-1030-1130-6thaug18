import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FstUpPipe } from './fst-up.pipe';
import { SortingPipe } from './sorting.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [HttpComponent, FstUpPipe, SortingPipe]
})
export class HttpModule { }
