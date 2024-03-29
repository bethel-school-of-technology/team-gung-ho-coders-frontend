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
  imgUrl: string = '';
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
    if (!movie) {
      console.error('Movie object is missing.');
      return;
    }
  
    const imgUrl = movie.primaryImage ? movie.primaryImage.url : '';
    const movieToSendToBackend = {
      id: movie.id,
      titleText: movie.originalTitleText,
      primaryImage: {
        url: imgUrl
      }
    };
    
    this.moviesService.addMovieToDatabase(movieToSendToBackend).subscribe(
      (response) => {
        console.log('Movie added to database:', response);
        
        this.router.navigate(['/movie-list']);
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
