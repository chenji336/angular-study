import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AdminComponent } from './admin.component'
import { AdminDashboardComponent } from './admin-dashboard.component'
import { ManageCrisesComponent } from './manage-crises.component'
import { ManageHeroesComponent } from './manage-heroes.component'

import { AuthGuard } from '../auth-guard.service'

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard], // 如果这里不注释掉，第一次进入child时候，会进入两次。当然，如果下面是直接使用children而不是children->children的话就不会
        children: [
            {
                path: '', // 这里添加这个是不是多余了？为了更好的路由子守卫？
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)], // 启动路由
    exports: [RouterModule] // 不导出的话，外面就使用不了router-outlet组件了 routerLink指令
})
export class AdminRoutingModule { }
