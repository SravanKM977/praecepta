import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  standalone: true,
})
export class DateTimePipe implements PipeTransform {
  private dateTimePipe = new DatePipe('en-US');

  transform(value: any): string | null {
    if (!value) return null;
    // Replace space before AM/PM with a comma for desired format
    return this.dateTimePipe.transform(value, 'dd MMM, hh:mm a');
  }

  // transform(value: any): string | null {
  //   if (!value) return null;
  //   // Format: 28 Jan
  //   return this.dateTimePipe.transform(value, 'dd MMM');
  // }
}
