import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ListBookmarkMovieComponent } from './list-bookmark-movie/list-bookmark-movie.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MainModule} from "../main/main.module";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [
    ListMovieComponent,
    DetailMovieComponent,
    ListBookmarkMovieComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MainModule,
    CoreModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
