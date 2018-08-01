import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
  // {path: 'guide', redirectTo: '/guide', pathMatch: 'full'},
  // {path: 'study', redirectTo: '/study', pathMatch: 'full'},
  {
    path: 'guide',
    loadChildren: 'src/app/hero-guide/hero-guide.module#HeroGuideModule'
  }, {
    path: 'study',
    loadChildren: 'src/app/study/study.module#StudyModule'
  }, {
    path: '', 
    redirectTo: 'study', 
    pathMatch: 'full'
  }, {
    path: '**', // 通配符
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      // {enableTracing: true} // 可以日志里查看路由事件
    )
  ], // 启动路由
  exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class AppRoutingModule { }
