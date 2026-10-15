import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RideBasedService } from '../../services/ride-based-service';

@Component({
  selector: 'app-ride-history',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ride-history.html',
  styleUrl: './ride-history.css',
})
export class RideHistory implements OnInit {
  // Original hardcoded ride data — preserved
  rides: any[] = [
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

  // Service-based ride data
  serviceRides: any[] = [];

  constructor(private objService: RideBasedService) {}

  ngOnInit() {
    // Retrieve rides from the service
    this.serviceRides = this.objService.getAllRides();

    // Use service data for the ride history display
    this.rides = this.serviceRides;
  }
}