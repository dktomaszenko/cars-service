/*import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';

const APP_ROUTES: Routes = [
  {path: 'cars', component: CarsListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cars'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);*/

import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';


const CARS_ROUTES: Route[] = [
  /*{path: 'cars/:id', component: CarsDetailsComponent}*/
];

@NgModule({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class CarsRoutingModule {}
