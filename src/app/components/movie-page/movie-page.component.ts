import { Component} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent {

  movieTitle: string = 'hobbit';
  movies: Movies[] = [];

  constructor(private moviesService: MoviesService) {}

  searchAllMovies() {
    if (this.movieTitle.trim() !== '') {
      this.moviesService.getAllMovies(this.movieTitle).subscribe(
        (data) => {
          this.movies = data;
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );
    }
  }
}
  
