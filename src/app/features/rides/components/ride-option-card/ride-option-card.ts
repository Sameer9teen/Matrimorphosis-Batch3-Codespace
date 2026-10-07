import { Component, input, output } from '@angular/core';
import { SuregeHighlight } from '../../../shared/directives/surege-highlight';

@Component({
  selector: 'app-ride-option-card',
  imports: [SuregeHighlight],
  templateUrl: './ride-option-card.html',
  styleUrl: './ride-option-card.css',
})
export class RideOptionCard {
  rideType = input<string>(''); //input function - signal based   //read value from parent

  fare = input<number>(0);

  image = input<string>('');

  rideSelected = output<string>();//output function - signal based //to send value to the parent

  selectRide() {
    this.rideSelected.emit(this.rideType()); //ride type is signal based  variable
  }
}
