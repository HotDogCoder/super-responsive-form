import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MainComponent } from './main.component';
import { SharedModule } from "../../core/shared/shared.module";


@NgModule({
    declarations: [
        ContactFormComponent,
        MainComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        SharedModule
    ]
})
export class MainModule { }
