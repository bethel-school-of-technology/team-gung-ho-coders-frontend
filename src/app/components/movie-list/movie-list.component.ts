import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  savedMovies: Movies[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.loadSavedMovies();
  }

  loadSavedMovies(): void {
    this.moviesService.getSavedMovies().subscribe(
      (movies: Movies[]) => {
        this.savedMovies = movies;
      },
      (error: any) => {
        console.error('Error fetching saved movies:', error);
      }
    );
  }

  deleteMovie(movieId: string | undefined): void {
    if (!movieId) {
      console.error('Movie ID is undefined.');
      return;
    }
  
    this.moviesService.deleteMovieFromDatabase(movieId).subscribe(
      () => {
       
        this.savedMovies = this.savedMovies.filter(movie => movie.movieId !== movieId);
        console.log('Movie deleted successfully');
      },
      (error: any) => {
        console.error('Error deleting movie:', error);
      }
    );
  }
}
