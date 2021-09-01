import {Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Movie} from "@/models/movie";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "@/services/movie.service";
import title from "@/utils/title";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  title = 'Detail';

  public movie!: Movie;

  private sub!: any;

  private baseImageUrl = 'https://image.tmdb.org/t/p/original/';

  public imageUrl!: string;

  constructor(private titleService: Title, private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.titleService.setTitle(title(this.title));
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(params => {
      this.getData(params.get('id') as any);
    });
  }

  private getData(id: any) {
    this.movieService.getMovieById(id).subscribe(movieResponse => {
      this.movie = movieResponse;
      this.imageUrl = `${this.baseImageUrl}${this.movie.backdrop_path}`;
    });
  }

  onSave(): void {
    let alreadySaved = false;
    let data = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.movie.id) {
        alreadySaved = true;
        break;
      }
    }

    if (alreadySaved) {
      alert("Film sudah disimpan !");
    } else {
      let temp = {...this.movie}
      data.push(temp);
      localStorage.setItem("bookmarks", JSON.stringify(data))
      alert("Film telah di simpan");
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
