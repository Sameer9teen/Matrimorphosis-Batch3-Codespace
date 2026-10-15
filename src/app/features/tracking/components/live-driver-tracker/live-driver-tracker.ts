import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Tracking } from '../../services/tracking';

@Component({
  selector: 'app-live-driver-tracker',
  standalone: true,
  imports: [],
  templateUrl: './live-driver-tracker.html',
  styleUrl: './live-driver-tracker.css',
})
export class LiveDriverTracker implements OnInit, OnDestroy {
  liveDriverData: any;

  driverSubscription!: Subscription;

  /*
  The ! is called the definite assignment assertion operator in TypeScript.
  It tells TypeScript: "I know this property will be initialized later.
  Don't give me an error for not initializing it here."
  */

  constructor(
    private trackingService: Tracking,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.driverSubscription = this.trackingService
      .getLiveDriverUpdates()
      .subscribe({
        next: (response) => {
          console.log(response);
          console.log('live tracking');

          this.liveDriverData = response;

          // Zoneless Angular
          this.cdr.detectChanges();
        },
      });
  }

  ngOnDestroy() {
    console.log('Subscription Destroyed');

    this.driverSubscription.unsubscribe();
  }
}