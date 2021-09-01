import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { errorRouting } from './error.routing';
import { ErrorComponent } from "./error.component";


@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    errorRouting
  ]
})
export class ErrorModule { }
