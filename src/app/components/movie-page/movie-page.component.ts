import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  searchTitle: string = '';

  externalMovies: any;

  movieTitle: string = '';
  movies: Movies[] = [];

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  // loadAllMovies() {

  //     this.moviesService.getAllMovies().subscribe(
  //       (data) => {
  //         this.movies = data;
  //       },
  //       (error) => {
  //         console.error('Error fetching movies:', error);
  //       }
  //     );

  // }


  searchMovies(): void {
    if (this.searchTitle.trim() !== '') {
      this.moviesService.searchMovies(this.searchTitle).subscribe(
        (movies: any) => {
          console.log(movies);
          this.externalMovies = movies;
        // },
        // (error) => {
        //   console.error('Error searching movies:', error);
        }
      );
    } else {
      console.log('Please enter a title to search for movies.');
    }
  

}

addToDatabase(movie: any) {
  const movieToSendToBackend = {
    movieTitle: movie.originalTitleText,
    imgUrl: movie.primaryImage.url,
    
  };

  
  const result = this.moviesService.addMovieToDatabase(movieToSendToBackend);

  
  if (result !== void 0) {
    
    result.subscribe(
      (response) => {
        console.log('Movie added to database:', response);
      },
      (error) => {
        console.error('Error adding movie to database:', error);
      }
    );
  } else {
   
    console.error('Error adding movie to database:', 'Invalid response from addMovieToDatabase');
  }
}

reviewMovie(movie: any): void {
  const { id, imageUrl, title } = movie;
  this.router.navigate(['create-review', id], { queryParams: { imageUrl, title } });
}



} 
