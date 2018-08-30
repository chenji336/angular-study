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
import { IdentifyRevealedValidatorDirective } from './form/shared/identify-revealed.directive';
import { HeroFormReactiveNestedComponent } from './form/hero-form-reactive-nested/hero-form-reactive-nested.component';
import { HeroFormDynamicComponent } from './form/hero-form-dynamic/hero-form-dynamic.component';
import { DynamicFormComponent } from './form/hero-form-dynamic/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './form/hero-form-dynamic/dynamic-form-question/dynamic-form-question.component';
import { FormItemComponent } from './form/shared/form-item/form-item.component';
import { TwoBindingComponent } from './two-binding/two-binding.component';
import { CounterComponent } from './two-binding/counter/counter.component';
import { PipeComponent } from './pipe/pipe.component'

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
        IdentifyRevealedValidatorDirective,
        HeroFormReactiveNestedComponent,
        HeroFormDynamicComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent,
        FormItemComponent,
        TwoBindingComponent,
        CounterComponent,
        PipeComponent
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