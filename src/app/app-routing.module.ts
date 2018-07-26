import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  // {path: 'guide', redirectTo: '/guide', pathMatch: 'full'},
  // {path: 'study', redirectTo: '/study', pathMatch: 'full'},
  {
    path: 'guide',
    loadChildren: 'src/app/hero-guide/hero-guide.module#HeroGuideModule'
  }, {
    path: 'study',
    loadChildren: 'src/app/study/study.module#StudyModule'
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 启动路由
  exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class AppRoutingModule { }
