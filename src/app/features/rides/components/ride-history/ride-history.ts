import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ride-history',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ride-history.html',
  styleUrl: './ride-history.css',
})
export class RideHistory {
  rides = [
    {
      id: 101,
      pickup: 'T Nagar',
      destination: 'OMR',
      fare: 240,
    },
    {
      id: 102,
      pickup: 'Velachery',
      destination: 'Airport',
      fare: 320,
    },
    {
      id: 103,
      pickup: 'Anna Nagar',
      destination: 'Marina Beach',
      fare: 280,
    },
  ];
}