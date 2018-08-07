
import { BrowserModule } from '@angular/platform-browser'; // 包含commonModule--ngIf等；applicationModule应用module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 可以使用：[(ngModel)]
import { Router } from '@angular/router'

// 懒加载不需要引入这些module，否则一开始就会加载它们
// import { StudyModule } from './study/study.module'
// import { HeroGuideModule } from './hero-guide/hero-guide.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // material需要BrowserAnimationsModule（跟BrowserMOdule一样，其他地方不需要引入了）
import { SharedModule } from './shared/shared.module' // 因为使用到了material一些component，所以需要引入
import { MaterialModule } from './material/material.module'
import { AnimationStudyModule } from './animation-study/animation-study.module'
// import { AdminModule } from './admin/admin.module' // 做懒加载
import { LoginModule } from './login/login.module'

// HttpClientModule需要放在最AppModule里面，就算没有使用到（一开始放在hero-guide.module里面使用的会报错）
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './in-memory-data.service'

import { DialogService } from './dialog.service'

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    MaterialModule, // 定义在AppRoutingModule前面，这样就可以先去匹配material路径
    AnimationStudyModule,
    // AdminModule,
    LoginModule,

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
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
