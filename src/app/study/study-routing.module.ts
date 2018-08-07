import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudyComponent } from './study.component'
import { FormComponent } from './form/form.component'

const routes: Routes = [{
    path: '',
    component: StudyComponent,
    children: [
        {
            path: 'form',
            component: FormComponent
        }
    ]
}]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class StudyRoutingModule {}