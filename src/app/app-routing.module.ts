import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 启动路由
  exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class AppRoutingModule { }
