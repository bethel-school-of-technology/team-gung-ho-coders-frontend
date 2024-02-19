import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieReview } from '../../models/movie-review'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  movieTitle: string = '';
  imgURL: string = '';
  reviewList: MovieReview[] = []; 
  

  constructor(private movieService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.loadReviews();
    this.fetchMovieInfo();
  }

  fetchMovieInfo(): void {
    
    this.movieTitle = history.state.movieTitle || '';
    this.imgURL = history.state.imgURL || '';
  }

  loadReviews(): void {
    this.movieService.getAllReviews().subscribe(
      (reviews: any[]) => {
        reviews.forEach(review => {
          this.movieService.getMoviesByID(review.movieId).subscribe(
            (movie: any) => {
              const newReview = new MovieReview(
                review.movieReviewId,
                review.textBody,
                review.movieRating,
                movie.title, 
                movie.imageUrl 
              );
              this.reviewList.push(newReview);
            },
            (error) => {
              console.error('Error fetching movie details:', error);
            }
          );
        });
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }
  
  editReview(review: MovieReview): void {
    if (this.router) {
        this.router.navigate(['/edit-review', review.movieReviewId]);
    }
}

  


  deleteReview(reviewId: number): void {
    const reviewIdString = reviewId.toString(); 
    this.movieService.deleteReviewFromDatabase(reviewIdString).subscribe(
      () => {
        
        this.reviewList = this.reviewList.filter(review => review.movieReviewId !== reviewId);
        console.log('Review deleted successfully');
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }
  
  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? 1 : 0);
    }
    return stars;
}

  

}
