import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../hero.service'
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  hero$: Observable<Hero>;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    console.log('this.route.snapshot:', this.route.snapshot); // ActivateRoute是获取路由事件中： ActionStart的里面参数
    /* const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        console.log('hero:', hero);
        this.hero = hero
      }) */

    // 如果会复用该组件（比如navigate到另外一个英雄id），就需要使用下面的代码替换(因为复用组件不会触发ngOnInit)
    // route.paramMap本身就是Observalbe，可以进行监听，因此路由改变的时候还是在监听着的
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.heroService.getHero(+params.get('id'))
      })
    )
    this.hero$.subscribe(hero => {
      console.log('hero:', hero);
      this.hero = hero
    })
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => {
        this.goBack();
      })
  }

  goBack(): void {
    // this.location.back();

    let heroId = this.hero ? this.hero.id : null;
    // navigate第二个参数为可选,可有可无，不影响（返回的时候可以看浏览器的url，会以分号隔开matrix）
    // this.router.navigate(['/guide/heroes',{id: heroId, foo: 'foo'}]); // 如果想要指定相对路径，必须relativeTo设为当前的ActiveatedRoute
    this.router.navigate(['../../heroes', { id: heroId, foo: 'foo' }], { relativeTo: this.route }); // 使用../../因为detail后面还有/id
  }

  navigate(): void {
    // 探索如何监听路由变化，这样可以触发initData??---使用router.paramMap--Observable
    // this.router.navigateByUrl('/guide/detail/15'); // 必须指定完整路径
    this.router.navigate(['/guide/detail/15']); 
    
  }

}
