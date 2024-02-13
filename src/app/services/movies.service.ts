import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movies } from '../models/movies';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {


   apiUrl = 'https://moviesdatabase.p.rapidapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    return this.http.get<any>(`${this.apiUrl}titles/search/title/${title}?exact=false&titleType=movie`, { headers });
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


  getAllMovies(): Observable<any> {
    return this.http.get<any>('http://localhost:5205/api/movie');


  }

  addMovieToDatabase(movie: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');


    return this.http.post<any>('http://localhost:5205/api/Movie', movie, { headers }).pipe(
      tap((response: any) => {
        console.log('Movie added to database:', response);
      }),
      catchError((error: any) => {
        console.error('Error adding movie to database:', error);
        return throwError(error);
      })
    );
  }

  addReviewToDatabase(review: { movieId: any; imgUrl: any; TextBody: string; }): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-RapidAPI-Key', '21e64905ecmsh0a63d58546d656cp18033bjsn0175b0cfc09f')
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

    return this.http.post<any>(`http://localhost:5205/api/MovieReview`, {...review, MovieRating: 3}, { headers }).pipe(
      tap((response: any) => {
        console.log('Review added to database:', response);
      }),
      catchError((error: any) => {
        console.error('Error adding review to database:', error);
        return throwError(error);
      })
    );
  }


  // addReviewToDatabase(movie: Movies): Observable<any> {
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     // .set('Authorization', 'Bearer YOUR_ACCESS_TOKEN');

  //   return this.http.post<any>('http://localhost:5205/api/movie', movie, { headers });
  // }


}
