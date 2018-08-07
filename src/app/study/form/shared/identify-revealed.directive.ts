import { ValidatorFn, FormGroup, ValidationErrors, NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

export const identifyRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const name = control.get('name')
    const alterEgo = control.get('alterEgo')
    return name && alterEgo && name.value === alterEgo.value ? {'identifyRevealed': true} : null;
}

@Directive({
    selector: '[appIdentifyRevealed]',
    providers:[{
        provide: NG_VALIDATORS, useExisting: IdentifyRevealedValidatorDirective, multi: true
    }]
})
export class IdentifyRevealedValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors {
        return identifyRevealedValidator(control);
    }
}