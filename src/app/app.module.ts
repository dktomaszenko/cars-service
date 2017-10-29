import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CarsModule} from './cars/cars.module';
import {CoreModule} from './core-module/core.module';
import {CarsService} from './cars/cars.service';
import {AppRoutingModule} from './app-routing.module';
import {CarsRoutingModule} from './cars/cars-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
