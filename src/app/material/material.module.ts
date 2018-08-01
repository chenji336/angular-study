
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { MaterialRoutingModule } from './material-routing.module'
import { MaterialComponent } from './material.component'


@NgModule({
  declarations: [
    MaterialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialRoutingModule
  ],
  providers: []
})
export class MaterialModule { }
