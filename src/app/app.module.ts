import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from '@/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@/environment';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DatePipe} from "@angular/common";
import {CoreModule} from "@/core/core.module";
import {HttpClientModule} from "@angular/common/http";
import {MainModule} from "@/modules/main/main.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    MainModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    Title,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
