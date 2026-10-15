import {
  Component,
  OnDestroy,
  computed,
  effect,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-nearby-driver-counter',
  standalone: true,
  imports: [],
  templateUrl: './nearby-driver-counter.html',
  styleUrl: './nearby-driver-counter.css',
})
export class NearbyDriverCounter implements OnDestroy {
  nearbyDrivers = signal(5);

  /*
  availabilityStatus is NOT independent state.
  It depends on nearbyDrivers.
  */

  // Calculate and return a value - purpose of computed()
  availabilityStatus = computed(() => {
    return this.nearbyDrivers() > 3
      ? 'Ample amount of Drivers Available'
      : 'Limited Drivers - High demand';
  });

  private intervalId: ReturnType<typeof setInterval>;

  constructor() {
    this.intervalId = setInterval(() => {
      const randomDrivers = Math.floor(Math.random() * 10);

      this.nearbyDrivers.set(randomDrivers);

      console.log('constructor', this.nearbyDrivers());
    }, 2000);

    // Logging, analytics, external synchronization - effect()
    effect(() => {
      console.log('Nearby Drivers:', this.nearbyDrivers());
    });
  }

  // For checking if this component renders
  trackRender() {
    console.log('trackRender - NearbyDriverCounter Checked');

    return '';
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}