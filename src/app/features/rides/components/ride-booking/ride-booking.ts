import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ride-booking',
  imports: [FormsModule],
  templateUrl: './ride-booking.html',
  styleUrl: './ride-booking.css',
})
export class RideBooking {
  pickupLocation = 'T ';

  destination = 'OMR';

  rideType = 'Car';
  estimatedFare = 120;

  isPremiumRide = false;

  bookingMessage = 'waiting for message';
  constructor() {}
  confirmRide() {
    this.bookingMessage = `Ride booked successfully from ${this.pickupLocation} to ${this.destination}`;
  }
  togglePremiumRide() {
    this.isPremiumRide = !this.isPremiumRide;
    this.bookingMessage = '';
    if (this.isPremiumRide) {
      console.log('premium ride');
      this.estimatedFare = 200;
    } else this.estimatedFare = 120;
  }
}
