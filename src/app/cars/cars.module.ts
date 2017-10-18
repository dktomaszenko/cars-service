import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import {SharedModule} from '../shared-module/shared.module';
import { CarsInfoComponent } from './cars-info/cars-info.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CarsListComponent],
  declarations: [CarsListComponent, TotalCostComponent, CarsInfoComponent]
})
export class CarsModule { }
