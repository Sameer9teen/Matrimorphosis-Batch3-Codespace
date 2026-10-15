import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RideBasedService } from '../../services/ride-based-service';

@Component({
  selector: 'app-ride-history-details-page',
  standalone: true,
  imports: [],
  templateUrl: './ride-history-details-page.html',
  styleUrl: './ride-history-details-page.css',
})
export class RideHistoryDetailsPage implements OnInit {
  selectedRide: any;
  rideId = '';

  // Original hardcoded ride data — preserved
  rides = [
    {
      id: '101',
      pickup: 'T Nagar',
      destination: 'OMR',
      fare: 240,
      driver: 'Arun',
      vehicle: 'Bike',
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private objService: RideBasedService,
  ) {}

  ngOnInit() {
    // Get the ride ID from the route
    this.rideId =
      this.activatedRoute.snapshot.paramMap.get('id') ?? '';

    // Original hardcoded-data lookup — preserved
    const hardcodedRide = this.rides.find(
      (ride) => ride.id === this.rideId,
    );

    // Retrieve the ride from the service
    const serviceRide = this.objService.getRideById(this.rideId);

    // Prefer service data; use hardcoded data as a fallback
    this.selectedRide = serviceRide ?? hardcodedRide;
  }
}