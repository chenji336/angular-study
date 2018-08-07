import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StudyComponent } from './study.component'
import { StudyRoutingModule } from './study-routing.module';
import { DomComponent } from './dom/dom.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './form/input/input.component';
import { HeroFormComponent } from './form/hero-form/hero-form.component';
import { HeroFormReactiveComponent } from './form/hero-form-reactive/hero-form-reactive.component'
import { ForbiddenValidatorDirective } from './form/shared/forbidden-name.directive'
import { IdentifyRevealedValidatorDirective } from './form/shared/identify-revealed.directive'

@NgModule({
    declarations: [
        StudyComponent,
        DomComponent,
        LifecycleComponent,
        ChildComponent,
        FormComponent,
        InputComponent,
        HeroFormComponent,
        HeroFormReactiveComponent,
        ForbiddenValidatorDirective,
        IdentifyRevealedValidatorDirective
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        StudyRoutingModule
    ]
})

export class StudyModule {}