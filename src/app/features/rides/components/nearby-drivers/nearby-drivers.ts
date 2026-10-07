import { Component } from '@angular/core';
import { SuregeHighlight } from '../../../shared/directives/surege-highlight';

@Component({
  selector: 'app-nearby-drivers',
  imports: [SuregeHighlight],
  templateUrl: './nearby-drivers.html',
  styleUrl: './nearby-drivers.css',
})
export class NearbyDrivers {
  selectedCategory = 'Bike';

  bikeDrivers = [
    {
      id: 1,
      name: 'Arun',
      rating: 4.7,
      isOnline: true,
    },

    {
      id: 2,
      name: 'Rahul',
      rating: 4.5,
      isOnline: false,
    },
  ];

  autoDrivers = [
    {
      id: 3,
      name: 'Sathish',
      rating: 4.6,
      isOnline: true,
    },

    {
      id: 4,
      name: 'Mohan',
      rating: 4.4,
      isOnline: true,
    },
  ];

  cabDrivers = [
    {
      id: 5,
      name: 'Divya',
      rating: 4.9,
      isOnline: true,
    },

    {
      id: 6,
      name: 'Sneha',
      rating: 4.8,
      isOnline: false,
    },
  ];
}
