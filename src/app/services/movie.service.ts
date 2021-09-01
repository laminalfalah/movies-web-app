import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Filter} from "../models/filter";
import {Movie} from "../models/movie";
import {Observable} from "rxjs";
import {Response} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService: HttpService) { }

  public getMovies(filter: Filter): Observable<Response<Array<Movie>>> {
    return this.httpService.get('popular', filter);
  }

  public getMovieById(id: string): Observable<Movie> {
    return this.httpService.getId(id);
  }

}
