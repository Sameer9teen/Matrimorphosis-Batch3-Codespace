import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Tracking {
  getLiveDriverUpdates(): Observable<any> {
    const locations = [
      'T Nagar',
      'Velachery',
      'OMR',
      'Tambaram',
      'Guindy',
    ];

    return interval(2000).pipe(
      map((count) => {
        console.log(count);

        return {
          driverName: 'Arun',
          currentLocation: locations[count % locations.length],
          activeRides: 5 + count,
          status: count % 2 === 0 ? 'Available' : 'On Ride',
        };
      }),
    );
  }
}