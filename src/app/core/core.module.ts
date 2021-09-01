import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardViewComponent } from './card-view/card-view.component';
import {RouterModule} from "@angular/router";
import {NgbModule, NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardViewComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CardViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbRatingModule
  ]
})
export class CoreModule { }
