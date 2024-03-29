import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';




@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  searchTitle: string = '';

  randomMovies: any;

  externalMovies: any;
  movie: any;
  imgUrl: string = '';

  constructor(private movieService: MoviesService, private router: Router) {}

   
  ngOnInit(): void {
    this.loadRandomMovies();
  }

  loadExternalMovies(): void {
    if (this.searchTitle.trim() !== '') {
      const apiUrl = `${this.movieService.apiUrl}titles/search/title/${this.searchTitle}`;

      this.movieService.searchMovies(apiUrl).subscribe(
        (response: any) => {
          if (Array.isArray(response)) {
            this.externalMovies = response;
          } else {
            console.error('Response is not an array:', response);
          }
        },
        (error) => {
          console.error('Error fetching external movies:', error);
        }
      );
    } else {
      console.log('Please enter a title to search for movies.');
    }
  }

  loadRandomMovies(): void {
    this.movieService.getRandomMovies().subscribe(
      (movies: any[]) => {
        this.randomMovies = movies;
        console.log(this.randomMovies);
      },
      (error) => {
        console.error('Error fetching random movies:', error);
      }
    );
  }

  searchMovies(): void {
    if (this.searchTitle.trim() !== '') {
      this.movieService
        .searchMovies(this.searchTitle)
        .subscribe((movies: any) => {
          console.log(movies);
          this.externalMovies = movies;
        });
    } else {
      console.log('Please enter a title to search for movies.');
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
    
    this.movieService.addMovieToDatabase(movieToSendToBackend).subscribe(
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
    const { imageUrl, title, id } = movie;
    this.router.navigate(['/create-review'], {
      queryParams: { imgURL: imageUrl, movieTitle: title, movieId: id },
    });
  }

  reviewList(movie: any): void {
    const { imageUrl, title } = movie;
    this.router.navigate(['/review-list'], {
      queryParams: { imgURL: imageUrl, movieTitle: title },
    });
  }
}
