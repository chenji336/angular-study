import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service' // 不需要关系数据到底是怎么来的（模拟、http请求....）

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes // 如果只有next可以这样处理
      /* {
        next: heroes => this.heroes = heroes
      } */
    );
  }

}
