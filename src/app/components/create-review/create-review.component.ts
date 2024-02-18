import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../models/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  movie: any;
  reviewText: string = '';
  reviewTitle: string = '';
  rating: number = 1;
  searchTitle: string = '';
  searchResults: any[] = [];
  externalMovies: any[] = [];
  movies: Movies[] = [];

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];

      this.movieService.getMoviesByID(movieId).subscribe(
        (data: any) => {
          this.movie = data;
          console.log('Movie:', this.movie);
        },
        error => {
          console.log('Error fetching movie:', error);
        }
      );
    });
  }


  addReviewToDatabase(event: Event): void {
    event.preventDefault();

    const review = {
      movieId: this.movie.id,
      imgUrl: this.movie.imageUrl || '',
      TextBody: this.reviewText,
      MovieRating: this.rating
    };

    this.movieService.addReviewToDatabase(review).subscribe(
      (response: any) => {
        console.log('Review added to database:', response);
        this.reviewText = '';
        this.reviewTitle = '';
        this.rating = 1;
      },
      (error: any) => {
        console.error('Error adding review to database:', error);
      }
    );
  }

  logRating(): void {
    console.log('Current rating:', this.rating);
  }

  setSearchTitle(title: string): void {
    this.searchTitle = title;
  }



  reviewMovie(movie: any): void {
    const { id, imageUrl, titleText } = movie;
    this.router.navigate(['create-review', id], { queryParams: { imageUrl, title: titleText.text } });
  }


  addToDatabase(movie: any) {
    
    const movieToSendToBackend = {
      ExternalMovieId: movie.id,
      MovieTitle: movie.titleText.text,
      
    };
  
    
    this.movieService.addMovieToDatabase(movieToSendToBackend).subscribe(
      (response) => {
        console.log('Movie added to database:', response);
      },
      (error) => {
        console.error('Error adding movie to database:', error);
      }
    );
  }

  searchMovies(): void {
    if (this.searchTitle.trim() !== '') {
      this.movieService.searchMovies(this.searchTitle).subscribe(
        (response: any) => {
          console.log(response);
          if (response && response.results && Array.isArray(response.results)) {
            this.searchResults = response.results;
          } else {
            this.searchResults = [];
          }
        },
        (error) => {
          console.error('Error searching movies:', error);
        }
      );
    } else {
      console.log('A movie title is required to search.');
    }
  }

}

