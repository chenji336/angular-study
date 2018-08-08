import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service'

@Component({
  selector: 'app-hero-form-dynamic',
  templateUrl: './hero-form-dynamic.component.html',
  providers: [ QuestionService ]
})
export class HeroFormDynamicComponent implements OnInit {

  questions: any[];

  constructor(
    private service: QuestionService
  ) { }

  ngOnInit() {
    this.questions = this.service.getQuestions();
  }

}
