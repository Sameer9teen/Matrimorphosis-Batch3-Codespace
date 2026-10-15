import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tracking } from '../../services/tracking';

@Component({
  selector: 'app-ride-status-board',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './ride-status-board.html',
  styleUrl: './ride-status-board.css',
})
export class RideStatusBoard {
  liveDriverData$: Observable<any>;

  constructor(private trackingService: Tracking) {
    this.liveDriverData$ =
      this.trackingService.getLiveDriverUpdates();
  }
}