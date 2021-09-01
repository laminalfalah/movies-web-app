import { Component, OnInit } from '@angular/core';
import {Movie} from "@/models/movie";
import {Title} from "@angular/platform-browser";
import {MovieService} from "@/services/movie.service";
import {NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
import title from "@/utils/title";
import {Filter} from "@/models/filter";

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

  title = 'Home';

  private _currentPage = 1;
  public totalNumberOfResults!: number;
  private totalNumberOfPages!: number;
  public nrOfPagesToDisplay = 5;
  public pageSize = 20;

  public movies: Movie[] = new Array<Movie>();

  constructor(private titleService: Title, private movieService: MovieService, pagination: NgbPaginationConfig) {
    this.titleService.setTitle(title(this.title));

    pagination.size = "sm";
    pagination.rotate = true;
    pagination.ellipses = false;
    pagination.boundaryLinks = true;
  }

  public get currentPage() {
    return this._currentPage;
  }

  public set currentPage(page: number) {
    this._currentPage = page;
    this.getMovies();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.movieService.getMovies(this.getFilter()).subscribe(moviesResponse => {
      this.movies = moviesResponse.results;
      this._currentPage = moviesResponse.page;
      this.totalNumberOfPages = moviesResponse.total_pages;
      this.totalNumberOfResults = moviesResponse.total_results;
    });
  }

  private getFilter(): Filter {
    return {
      page: this.currentPage,
    };
  }

}
