import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Subject, Observable }  from 'rxjs'  // Subject也是Obsrvable的一种，不过Subject可以next数据

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>(); // 需要初始化，否则ngOnInit会报错

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),

      // 每次只发送最新的一个Observable（虽然上面有300ms，但是http请求肯定有延时大于300ms的，switchMap只会输出最新的，之前的清空掉）
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }


  search(term: string): void {
    this.searchTerms.next(term);
  }

}
