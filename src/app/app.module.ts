
import { BrowserModule } from '@angular/platform-browser'; // 包含commonModule--ngIf等；applicationModule应用module
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 可以使用：[(ngModel)]

import { StudyModule } from './study/study.module'
import { HeroGuideModule } from './hero-guide/hero-guide.module'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { MaterialComponent } from './material/material.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    StudyModule,
    HeroGuideModule,

    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
