import { Component } from '@angular/core';
import { RideOptionCard } from '../ride-option-card/ride-option-card';

@Component({
  selector: 'app-ride-selection',
  imports: [RideOptionCard],
  templateUrl: './ride-selection.html',
  styleUrl: './ride-selection.css',
})
export class RideSelection {
  userSelectedRide = '';

  rideOptions = [
    {
      type: 'Bike',
      fare: 120,
      image: '/images/bike.png',
    },
    {
      type: 'Auto',
      fare: 180,
      image: '/images/auto.png',
    },

    {
      type: 'Cab',
      fare: 320,
      image: '/images/premium-car.png',
    },
  ];

  selectRide(rideType: string) {
    this.userSelectedRide = rideType;
  }
}
