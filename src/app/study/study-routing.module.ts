import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudyComponent } from './study.component'
import { FormComponent } from './form/form.component'
import { TwoBindingComponent } from './two-binding/two-binding.component'
import { PipeComponent } from './pipe/pipe.component';
import { DirectiveComponent } from './directive/directive.component'

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
        },
        {
            path: 'pipe',
            component: PipeComponent
        },
        {
            path: 'directive',
            component: DirectiveComponent
        },
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