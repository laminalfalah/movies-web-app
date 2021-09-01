import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import title from "@/utils/title";
import {Movie} from "@/models/movie";

@Component({
  selector: 'app-list-bookmark-movie',
  templateUrl: './list-bookmark-movie.component.html',
  styleUrls: ['./list-bookmark-movie.component.scss']
})
export class ListBookmarkMovieComponent implements OnInit {

  title = "Bookmarks"

  public movies: Movie[] = new Array<Movie>();

  constructor(private titleService: Title) {
    this.titleService.setTitle(title(this.title));
  }

  ngOnInit(): void {
    this.movies = JSON.parse(localStorage.getItem("bookmarks") || "[]");
  }

}
