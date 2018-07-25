import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroGuideComponent } from './hero-guide.component'
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  {path: 'guide', component: HeroGuideComponent}, 
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)], // 启动路由
  exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class HeroGuideRoutingModule { }
