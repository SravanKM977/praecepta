import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate',
  standalone: true,
})
export class ShortDatePipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');

  transform(value: any): string | null {
    if (!value) return null;
    // Format: 28 Jan
    console.log(this.datePipe.transform(value, 'dd MMM'));
    return this.datePipe.transform(value, 'dd MMM');
  }
}
