
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 可以使用：[(ngModel)]

// 不要再这里使用httpClinet，再AppModule里面使用即可
// import { HttpClientModule } from '@angular/common/http'
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
// import { InMemoryDataService } from './in-memory-data.service'

import { HeroGuideRoutingModule } from './hero-guide-routing.module'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroGuideComponent } from './hero-guide.component';
import { CrisisCneterComponent } from './crisis-cneter/crisis-cneter.component' ;

import { HeroService } from './hero.service'
// import { httpInterceptorProviders } from './http-interceptors/index'
// import { NoopInterceptor } from './http-interceptors/noop-interceptor'


@NgModule({
  declarations: [
    HeroGuideComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CrisisCneterComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    HeroGuideRoutingModule,
  ],
  providers: [
    HeroService,

    // 拦截器应该放在httpmodule那边，一般放在app.module里面。放在其他位置会发现没有效果
    // httpInterceptorProviders,
  ]
})
export class HeroGuideModule { }
