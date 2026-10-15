import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RideBasedService {
  private rides: any[] = [
    {
      id: '101',
      pickup: 'T Nagar',
      destination: 'OMR',
      fare: 240,
      driver: 'Arun',
      vehicle: 'Bike',
      Vehiclenumber: 8900,
    },
    {
      id: '102',
      pickup: 'Velachery',
      destination: 'Airport',
      fare: 320,
      driver: 'Sathish',
      vehicle: 'Auto',
    },
    {
      id: '103',
      pickup: 'Anna Nagar',
      destination: 'Marina Beach',
      fare: 280,
      driver: 'Divya',
      vehicle: 'Cab',
    },
  ];

  getAllRides() {
    return this.rides;
  }

  getRideById(id: string) {
    return this.rides.find((ride: any) => ride.id === id);
  }
}