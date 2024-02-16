import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Movies } from '../models/movies';
import { tap, catchError } from 'rxjs/operators';
import { MovieReview } from '../models/movie-review';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {


   apiUrl = 'https://moviesdatabase.p.rapidapi.com/';
   baseUrl = 'http://localhost:5205/api/movie';
   reviewUrl = 'http://localhost:5205/api/MovieReview';

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
 
  addReviewToDatabase(review: { movieId: any; TextBody: string; MovieRating: any; }): Observable<any> {
    
     

    return this.http.post<any>(`http://localhost:5205/api/MovieReview`, review, ).pipe(
      tap((response: any) => {
        console.log('Review added to database:', response);
      }),
      catchError((error: any) => {
        console.error('Error adding review to database:', error);
        return throwError(error);
      })
    );
  }

updateReviewInDatabase (review:{ movieId: any; TextBody: string; MovieRating: any; }) {Observable<any>

return this.http.put<any>('http://localhost:5205/api/MovieReview', review, ).pipe(
  tap((response: any) => {
    console.log('Review Updated in database:', response);
  }),
  catchError((error: any) => {
    console.error('Error updating review to database:', error);
    return throwError(error);
  })
);

}

deleteReviewFromDatabase (Id: string): Observable<any> {

  return this.http.delete(`${this.reviewUrl}/${Id}`,);

}

getAllReviews(): Observable<MovieReview[]> {
  return this.http.get<MovieReview[]>(this.reviewUrl);
}

}
