
import { BrowserModule } from '@angular/platform-browser'; // 包含commonModule--ngIf等；applicationModule应用module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 可以使用：[(ngModel)]
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { HeroGuideRoutingModule } from './hero-guide-routing.module'
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroGuideComponent } from './hero-guide.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module'

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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    HeroGuideRoutingModule,

    BrowserAnimationsModule,
    SharedModule
  ],
  providers: []
})
export class HeroGuideModule { }
