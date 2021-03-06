import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { ComposeMessageComponent } from './compose-message/compose-message.component'
import { CanDeactiveGuard } from './can-deactive-guard.service'

// 暂时先放在这里使用(最好放在LoginModule，因为在这个module中才会调用)
import { AuthGuard } from './auth-guard.service' 
import { AuthService } from './auth.service' 
import { SelectivePreloadingStrategy } from './selective-preloading-strategy'

const routes: Routes = [
  // {path: 'guide', redirectTo: '/guide', pathMatch: 'full'},
  // {path: 'study', redirectTo: '/study', pathMatch: 'full'},
  {
    path: 'guide',
    loadChildren: 'src/app/hero-guide/hero-guide.module#HeroGuideModule'
  }, 
  {
    path: 'study',
    loadChildren: 'src/app/study/study.module#StudyModule',
    data: {
      preload: true,
      keep: true
    }
  }, 
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard], // 当进入的时候才会加载admin-module,会阻塞预加载（下面虽然为preload，但是不会进行预加载）
    data: {
      preload: true
    }
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: '',
    redirectTo: 'study',
    pathMatch: 'full'
  },
  // 如果定义了material在forChild中，这里无需定义
  // 注意点：引入的material.module需要在AppRouting.module前面，否则会有限匹配**而不是material 
  // {
  //   path: 'material',
  //   redirectTo: 'material',
  //   pathMatch: 'full'
  // }, 
  {
    path: '**', // 通配符
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // enableTracing: true // 可以日志里查看路由事件
        // preloadingStrategy: PreloadAllModules // 在加载首屏后立刻加载后面的module，但是canLoad守卫保护的除外
        preloadingStrategy: SelectivePreloadingStrategy // 自定义加载路由
      } 
    )
  ], // 启动路由
  exports: [RouterModule], // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
  providers: [
    AuthGuard,
    AuthService,
    CanDeactiveGuard,
    SelectivePreloadingStrategy,
  ]
})
export class AppRoutingModule { }
