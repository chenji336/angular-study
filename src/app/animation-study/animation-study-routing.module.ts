import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AnimationStudyComponent } from './animation-study.component'

const routes: Routes = [
  {path: 'animation', component: AnimationStudyComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)], // 启动路由
  exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class AnimationStudyRoutingModule { }
