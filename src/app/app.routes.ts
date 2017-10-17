import {RouterModule, Routes} from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';

const APP_ROUTES: Routes = [
  {path: 'cars', component: CarsListComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'cars'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
