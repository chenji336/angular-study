import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { StudyComponent } from './study.component'
import { StudyRoutingModule } from './study-routing.module'

@NgModule({
    declarations: [
        StudyComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StudyRoutingModule
    ]
})

export class StudyModule {}