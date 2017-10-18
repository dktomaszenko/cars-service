import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Car} from '../models/car';
import {TotalCostComponent} from '../total-cost/total-cost.component';
import {CarsService} from '../cars.service';
import {CarInfo} from '../models/car-info';
import {CarsInfoComponent} from '../cars-info/cars-info.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  @ViewChild('infoCarsRef') infoCarsRef: CarsInfoComponent;
  totalCost: number;
  grossCost: number;
  showInfo: CarInfo;
  cars: Car[];
  myswitch = true;

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  ngAfterViewInit() {
    setTimeout(
      () => {
        this.totalCostRef.showGross();
        this.infoCarsRef.showInfoOb();
      }, 0
    );
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

  onShowInfo(text: CarInfo): void {
    this.showInfo = text;
  }

  btnShowInfo() {
    this.myswitch = false;
    setTimeout(() => {
      this.myswitch = true;
    }, 5000);
  }

}
