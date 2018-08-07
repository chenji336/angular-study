import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";
import { Directive, Input } from "@angular/core";

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbidden = nameRe.test(control.value);
        // forbiddenName就是errors中的属性
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    }
}

@Directive({
    selector: '[appForbiddenName]',
    // 不能使用useClass，因为会重新创建一个新实例，我们需要在该实例本身
    providers: [{
        provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true
    }]
})
export class ForbiddenValidatorDirective implements Validator {
    // 别名（而且errors属性也是forbiddenName）
    @Input('appForbiddenName') forbiddenName: string;

    validate(control: AbstractControl): { [key: string]: any } | null {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
    }
}

