import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  searchTitle: string = '';
  externalMovies: any;
  movies: Movies[] = [];

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {

    this.searchMovies();
  }


  setSearchTitle(title: string): void {
    this.searchTitle = title;
  }

  searchMovies(): void {

    if (this.searchTitle.trim() !== '') {

      this.moviesService.searchMovies(this.searchTitle).subscribe(
        (movies: any) => {
          console.log(movies);
          this.externalMovies = movies;
        },
        (error) => {
          console.error('Error searching movies:', error);
        }
      );
    } else {

      console.log('A movie title is required to search.');
    }
  }

  addToDatabase(movie: any) {
    this.moviesService.addMovieToDatabase(movie).subscribe(
      (response) => {
        console.log('Movie added to database:', response);
      },
      (error) => {
        console.error('Error adding movie to database:', error);
      }
    );
  }




  reviewMovie(movie: any): void {
    const { id, imageUrl, title } = movie;
    this.router.navigate(['create-review', id], { queryParams: { imageUrl, title } });
  }
}
