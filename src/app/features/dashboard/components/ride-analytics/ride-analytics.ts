import { Component } from '@angular/core';

@Component({
  selector: 'app-ride-analytics',
  standalone: true,
  imports: [],
  templateUrl: './ride-analytics.html',
  styleUrl: './ride-analytics.css',
})
export class RideAnalytics {
  ngOnInit() {
    console.log('RideAnalytics chunk just loaded from network!');
  }

  // Check when Angular evaluates this template expression
  trackRender() {
    console.log('RideAnalytics Checked');
    return '';
  }
}