import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {
  constructor() {}

  addMonths(date: Date, num: number) {
    const month = date.getMonth();
    const newDate = new Date(date);

    newDate.setMonth(month + num);
    return newDate;
  }

  addDays(date: Date, num: number) {
    const dayOfMonth = date.getDate();
    const newDate = new Date(date);

    newDate.setDate(dayOfMonth + num);
    return newDate;
  }

  addYears(date: Date, num: number) {
    const year = date.getFullYear();
    const newDate = new Date(date);

    newDate.setFullYear(year + num);
    return newDate;
  }

  formatForDomInput(date:Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const leftPad = (s: string, maxDigits = 2) => s.padStart(maxDigits, '0');

    return `${year}-${leftPad(String(month))}-${leftPad(String(day))}`;
  }
}
