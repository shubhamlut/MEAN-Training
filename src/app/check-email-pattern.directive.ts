import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { validateEmailPattern } from './ValidatorFunctions/validateEmailPattern';

@Directive({
  standalone: false,
  selector: '[appCheckPasswordPattern]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CheckEMailPatternDirective, multi: true }]
})
export class CheckEMailPatternDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control)
    if (/[A-Z]/.test(control.value) && /[a-z]/.test(control.value) && /[0-9]/.test(control.value)) {

      return null
    }

    else {
      return { passwordPattern: true }
    }
  }
}
