import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudyComponent } from './study.component'
import { FormComponent } from './form/form.component'
import { TwoBindingComponent } from './two-binding/two-binding.component'

const routes: Routes = [{
    path: '',
    component: StudyComponent,
    children: [
        {
            path: 'form',
            component: FormComponent
        },
        {
            path: 'binding',
            component: TwoBindingComponent
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