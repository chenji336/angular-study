import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../hero'
import { forbiddenNameValidator } from '../shared/forbidden-name.directive'
import { identifyRevealedValidator } from '../shared/identify-revealed.directive'

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  newHero() {
    this.model = new Hero(42, '', '');
  }

  heroForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.model.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.model.alterEgo),
      'power': new FormControl(this.model.power, Validators.required)
    }, {
      validators: identifyRevealedValidator
    })
  }

 

  onSubmit() { 
    console.log('heroForm:', this.heroForm);
    this.submitted = true; 
  }

  // 为什么使用get不使用下面的 1.get让其只读 2.下面直接赋值，当model改变的时候diagnostic不会改变
  // diagnostic = JSON.stringify(this.model)
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model)
  }
  
  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }

}
