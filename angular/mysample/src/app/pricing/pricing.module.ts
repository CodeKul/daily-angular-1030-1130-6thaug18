import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { NvbrComponent } from './nvbr/nvbr.component';
import { InfoComponent } from './info/info.component';
import { PriceCardComponent } from './price-card/price-card.component';
import { FtrItmComponent } from './ftr-itm/ftr-itm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PricingComponent, NvbrComponent, InfoComponent, PriceCardComponent, FtrItmComponent],
  exports :[PricingComponent]
  
})
export class PricingModule { }
