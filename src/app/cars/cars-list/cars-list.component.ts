import { Component, OnInit } from '@angular/core';
import {Car} from '../models/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-05-2016',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDemaged: true
    },
    {
      id: 2,
      model: 'Ford Mondeo',
      plate: 'GD2999E',
      deliveryDate: '21-02-2016',
      deadline: '05-02-2016',
      client: {
        firstName: 'Jan',
        surname: 'Nowak'
      },
      cost: 300,
      isFullyDemaged: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
