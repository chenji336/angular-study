import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { QuestionBase } from '../question-base'

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    // 下面两个等价
    // return this.form.get(this.question.key).valid;
    return this.form.controls[this.question.key].valid;
  }

}