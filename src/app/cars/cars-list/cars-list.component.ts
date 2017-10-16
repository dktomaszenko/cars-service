import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  grossCost: number;
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
      isFullyDemaged: false
    }
  ];

  constructor() {
  }

  ngOnInit() {
    this.countTotalCost();
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShowGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
