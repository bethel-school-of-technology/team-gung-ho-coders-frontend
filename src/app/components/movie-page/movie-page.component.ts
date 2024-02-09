import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  movieTitle: string = '';
  movies: Movies[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadAllMovies();
  }

  loadAllMovies() {

      this.moviesService.getAllMovies().subscribe(
        (data) => {
          this.movies = data;
        },
        (error) => {
          console.error('Error fetching movies:', error);
        }
      );

  }
}
  
