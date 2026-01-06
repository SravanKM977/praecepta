import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');

  transform(value: any): string | null {
    if (!value) return null;
    // Convert to 12-hour time with AM/PM
    return this.datePipe.transform(value, 'hh:mm a');
  }
}
