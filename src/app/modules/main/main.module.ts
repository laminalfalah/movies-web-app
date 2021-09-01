import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "@/modules/main/main.component";
import {RouterModule} from "@angular/router";
import {CoreModule} from "@/core/core.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpService} from "@/services/http.service";
import {MovieService} from "@/services/movie.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MainComponent,
  ],
  exports: [
    MainComponent,
    NgbModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CoreModule
  ],
  providers: [
    HttpService,
    MovieService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MainModule { }
