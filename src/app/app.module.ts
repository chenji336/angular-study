
import { BrowserModule } from '@angular/platform-browser'; // 包含commonModule--ngIf等；applicationModule应用module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 可以使用：[(ngModel)]

// 懒加载不需要引入这些module，否则一开始就会加载它们
// import { StudyModule } from './study/study.module'
// import { HeroGuideModule } from './hero-guide/hero-guide.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { MaterialComponent } from './material/material.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // material需要BrowserAnimationsModule（跟BrowserMOdule一样，其他地方不需要引入了）
import { SharedModule } from './shared/shared.module' // 因为使用到了material一些component，所以需要引入

// HttpClientModule需要放在最AppModule里面，就算没有使用到（一开始放在hero-guide.module里面使用的会报错）
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    // StudyModule,
    // HeroGuideModule,

    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
