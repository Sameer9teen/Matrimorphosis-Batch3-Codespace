import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surgeLevel',
})
export class SurgeLevelPipe implements PipeTransform {
  transform(fare: number): string {
    if (fare < 150) {
      return 'Low Surge';
    }

    if (fare < 300) {
      return 'Medium Surge';
    }

    return 'High Surge';
  }
}
