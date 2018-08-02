
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { AnimationStudyRoutingModule } from './animation-study-routing.module'
import { AnimationStudyComponent } from './animation-study.component'


@NgModule({
  declarations: [
    AnimationStudyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnimationStudyRoutingModule
  ],
  providers: []
})
export class AnimationStudyModule { }
