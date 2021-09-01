import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "@/models/movie";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @Input() movie!: Movie;

  private imageBaseUrl = "https://image.tmdb.org/t/p/w500"

  public posterImageUrl!: string;

  constructor() { }

  ngOnInit(): void {
    this.posterImageUrl = `${this.imageBaseUrl}${this.movie.poster_path}`
  }

}
