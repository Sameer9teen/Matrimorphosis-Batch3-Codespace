import { CurrencyPipe, DatePipe, TitleCasePipe, UpperCasePipe, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map } from 'rxjs';
import { SurgeLevelPipe } from '../../../shared/pipes/surge-level-pipe';

@Component({
  selector: 'app-fare-summary',
  imports: [TitleCasePipe,CurrencyPipe,DatePipe,UpperCasePipe, AsyncPipe,SurgeLevelPipe],
  templateUrl: './fare-summary.html',
  styleUrl: './fare-summary.css',
})
export class FareSummary {
  customerName = 'sudha valli';

  totalFare = 140.567;

  rideDate = new Date();

  rideStatus = 'ride confirmed';
  liveFare$ = interval(2000).pipe(map((value) => 100 + value * 20));
}
