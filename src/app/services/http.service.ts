import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Filter} from "@/models/filter";
import {Observable} from "rxjs";
import {Response} from "../models/response";

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = 'f67ab82603585fb9db875c2cf86c809d';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http: HttpClient) {
  }

  public get(url: string, filter: Filter): Observable<Response<any>> {
    let params = new HttpParams({
      fromObject: {
        api_key: API_KEY,
        page: filter.page
      }
    })

    return this.http.get<Response<any>>(`${API_URL}/${url}`, { headers: this.httpHeaders, params });
  }

  public getId(url: string): Observable<any> {
    return this.http.get<Response<any>>(`${API_URL}/${url}`, { headers: this.httpHeaders, params: { api_key: API_KEY } });
  }

}
