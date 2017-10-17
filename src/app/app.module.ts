import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CarsModule} from './cars/cars.module';
import {CarsService} from './cars/cars.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
