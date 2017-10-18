import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarInfo} from '../models/car-info';

@Component({
  selector: 'app-cars-info',
  templateUrl: './cars-info.component.html',
  styleUrls: ['./cars-info.component.less']
})
export class CarsInfoComponent {

  @Input() showinfo: boolean;
  @Output() shownInfo: EventEmitter<CarInfo> = new EventEmitter<CarInfo>();

  showInfoOb(): void {
    this.shownInfo.emit(
      {
        text1: 'Special title treatment',
        text2: 'With supporting text below as a natural lead-in to additional content.',
        text3: 'Go somewhere',
        myswitch: this.showinfo
      }
    );
  }

}


