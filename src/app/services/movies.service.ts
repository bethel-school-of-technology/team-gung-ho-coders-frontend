import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies(title: string): Observable<Movies[]> {
    return this.http.get<Movies[]>(
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}`
    );
  }

  getMoviesByID(id: string): Observable<Movies> {
    return this.http.get<Movies>(
      `https://moviesdatabase.p.rapidapi.com/titles/${id}`
    );
  }

  getRandomMovies(): Observable<Movies[]> {
    const options = {
      params: {
        limit: '3',
        list: 'top_rated_english_250'
      }
    };
  
    return this.http.get<Movies[]>(
      'https://moviesdatabase.p.rapidapi.com/titles/random',
      options
    );
  }

  deleteMoviesByID(id: string): Observable<Movies> {
    return this.http.delete<Movies>(
      `https://moviesdatabase.p.rapidapi.com/titles/${id}`
    );
  }

  
}
