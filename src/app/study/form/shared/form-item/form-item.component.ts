import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.css'],
  // 不要忘记下面的providers
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // useExisting: forwardRef(() => FormItemComponent),
      useExisting: FormItemComponent,
      multi: true
    },

    // 如果是响应式表单的话，可以直接在这里定义检验规则 
    // {
    //   provide: NG_VALIDATORS,
    //   useValue: Validators.required,
    //   multi: true
    // }
  ]
})
export class FormItemComponent implements OnInit, ControlValueAccessor {
  @Input() key: string;
  @Input() control: FormControl;
  @Input() heroForm: FormGroup;
  private _value: string = '';

  propagateChange = (_: any) => { };

  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;
    this.propagateChange(this._value);
  }

  constructor() { }

  ngOnInit() {
    console.log('heroForm:', this.heroForm)
    console.log('control:', this.control)
  }

  /* 实现下面四个方法 */
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(value) {
    console.log('registerOnTouched-value:', value);
  }

  // ControlValueAccessor 可选的一个实现函数
  setDisabledState(value) {
    console.log('setDisabledState-value:', value);
  }
  /* **********************实现下面四个方法end */

}
