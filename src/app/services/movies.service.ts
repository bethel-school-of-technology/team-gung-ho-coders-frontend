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
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${title}?exact=false`,
      { headers: {
        'X-RapidAPI-Key': '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }}
    );
  }

  getMoviesByID(id: string): Observable<Movies> {
    return this.http.get<Movies>(
      `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
      { headers: {
        'X-RapidAPI-Key': '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }}
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
      { ...options, headers: {   
        'X-RapidAPI-Key': '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }}
    );
  }
}