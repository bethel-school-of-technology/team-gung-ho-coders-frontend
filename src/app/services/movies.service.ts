import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

   apiUrl = 'https://moviesdatabase.p.rapidapi.com/';

  constructor(private http: HttpClient) {}

  getAllMovies(title: string): Observable<Movies[]> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    return this.http.get<Movies[]>(`${this.apiUrl}titles/search/title/${title}`, { headers });
  }

  getMoviesByID(id: string): Observable<Movies> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');
    
    const options = { headers: headers }; 

    return this.http.get<Movies>(`${this.apiUrl}titles/${id}`, options);
  }

  getRandomMoviesHome(): Observable<Movies[]> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    const options = {
      headers: headers,
      params: {
        limit: '3',
        list: 'top_rated_english_250'
      }
    };
  
    return this.http.get<Movies[]>(`${this.apiUrl}titles/random`, options);
  }

  getRandomMovies(): Observable<Movies[]> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    const options = {
      headers: headers,
      params: {
        limit: '8',
        list: 'top_rated_english_250'
      }
    };
  
    return this.http.get<Movies[]>(`${this.apiUrl}titles/random`, options);
  }

  
 
}
