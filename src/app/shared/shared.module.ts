import { NgModule } from '@angular/core'

import {
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule
    ]
})

export class SharedModule { }