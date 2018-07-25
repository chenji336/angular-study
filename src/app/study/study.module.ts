import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { StudyComponent } from './study.component'
import { StudyRoutingModule } from './study-routing.module'

@NgModule({
    declarations: [
        StudyComponent
    ],
    imports: [
        SharedModule,
        StudyRoutingModule
    ]
})

export class StudyModule {}