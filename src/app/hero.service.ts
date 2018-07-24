import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'
import { Temp } from './temp'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor里面添加的数据默认是service。所以引用的服务需要带有provider
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // 把service当作存储数据的地方了（这里添加了，在组件里面也可以访问到，因为是单一实例）
    this.messageService.add('HeroService: fetched heroes.');

    // 简单的类，别的地方在new出来就获取不到这里的数据（上面的服务可以哦）
    const temp = new Temp()
    temp.data = ['1']


    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // 把service当作存储数据的地方了（这里添加了，在组件里面也可以访问到，因为是单一实例）
    this.messageService.add(`HeroService: fetched hero id=${id}.`);

    return of(HEROES.find(hero => hero.id === id));
  }
}
