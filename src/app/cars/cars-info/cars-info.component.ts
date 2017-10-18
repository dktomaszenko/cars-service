import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarInfo} from '../models/car-info';

@Component({
  selector: 'app-cars-info',
  templateUrl: './cars-info.component.html',
  styleUrls: ['./cars-info.component.less']
})
export class CarsInfoComponent {

  myswitch: boolean;

  @Input() showinfo: any;
  @Output() shownInfo: EventEmitter<CarInfo> = new EventEmitter<CarInfo>();


  constructor() {
    this.myswitch = true;
  }

  btnShowInfo(): void {
    this.myswitch = !this.myswitch;
  }

  showInfoOb(): void {
    this.shownInfo.emit(
      {
        value1: 'bla bla bla',
        value2: 50,
        value3: true
      }
    );
  }


}


