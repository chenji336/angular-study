
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

@NgModule({
  declarations: [
    HeroGuideComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    HeroGuideRoutingModule,
  ],
  providers: []
})
export class HeroGuideModule { }
