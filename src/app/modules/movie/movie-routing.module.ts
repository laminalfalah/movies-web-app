import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMovieComponent} from "@/modules/movie/list-movie/list-movie.component";
import {DetailMovieComponent} from "@/modules/movie/detail-movie/detail-movie.component";
import {ListBookmarkMovieComponent} from "@/modules/movie/list-bookmark-movie/list-bookmark-movie.component";

const routes: Routes = [
  {
    path: "",
    component: ListMovieComponent
  },
  {
    path: "detail/:id",
    component: DetailMovieComponent
  },
  {
    path: "bookmarks",
    component: ListBookmarkMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
