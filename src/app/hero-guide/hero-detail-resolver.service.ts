import { Injectable, Inject } from '@angular/core'
import { 
    Router,
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router'
import { Hero } from './hero'
import { HeroService } from './hero.service'
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable()
export class HeroDetailResolver implements Resolve<Hero> {
    constructor(
        private router: Router,
        private heroService: HeroService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
        let id = +route.paramMap.get('id')
        return this.heroService.getHero(id).pipe(
            take(1),
            map(hero => {
                if (hero) {
                    return hero;
                } else {
                    this.router.navigate(['heroes']);
                    return null;
                }
            })
        )
    }
}