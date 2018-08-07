import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  values = ''

  constructor() { }

  ngOnInit() {
  }

  // 1.最初版本
  /* onKey(event: any) {
    this.values += event.target.value + '|';
  } */

  // 2.对上面的进行改进，any当然可以，但是会有额外的代价
  /* onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + '|';
  } */

  // 3.上面耦合性太高，最好不要传入event
  // 在前端自动完成

  // 4.使用传入value直接运行
  update(value: string) {
    this.values += value + '|';
  }

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
  
}
