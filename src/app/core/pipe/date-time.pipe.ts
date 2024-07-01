import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(value: Date, type: 'date' | 'time' | 'dateTime' = 'date'): string {
    const date = value.toLocaleDateString();
    const time = value.toLocaleTimeString().split(' ')[0];

    const formate = {
      date: date,
      time: time,
      dateTime: date + ' ' + time
    };

    return formate[type];
  }
}
