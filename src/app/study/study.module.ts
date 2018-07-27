import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule } from '@angular/forms'
import { StudyComponent } from './study.component'
import { StudyRoutingModule } from './study-routing.module';
import { DomComponent } from './dom/dom.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component'

@NgModule({
    declarations: [
        StudyComponent,
        DomComponent,
        LifecycleComponent,
        ChildComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        StudyRoutingModule
    ]
})

export class StudyModule {}