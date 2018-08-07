import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  onSubmit(heroForm) { 
    console.log('heroForm:', heroForm);
    this.submitted = true; 
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model)
  }
  // 为什么使用get不使用下面的 1.get让其只读 2.下面直接赋值，当model改变的时候diagnostic不会改变
  // diagnostic = JSON.stringify(this.model)

}
