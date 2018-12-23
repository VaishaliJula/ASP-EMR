import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateMaxValidator(maxDate: string): ValidatorFn {
  const isDate = date => /\d{4}-\d{2}-\d{2}/.test(date);

  if (!isDate(maxDate)) {
    throw new Error('Invalid date format. it should follow yyyy-MM-dd format');
  }

  return (control: AbstractControl): { [key: string]: any } | null => {
    const withinMaxDate = isDate(control.value) && control.value <= maxDate;
    console.log(
      withinMaxDate,
      isDate(control.value) && control.value <= maxDate
    );
    return withinMaxDate ? null : { maxDate: { value: control.value } };
  };
}
