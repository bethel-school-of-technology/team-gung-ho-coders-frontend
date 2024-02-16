import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrl: './edit-review.component.css'
})
export class EditReviewComponent implements OnInit {
  movie: any;
  reviewText: string = '';
  reviewTitle: string = '';
  rating: number = 1; 

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      const imageUrl = this.route.snapshot.queryParamMap.get('imageUrl');
      const title = this.route.snapshot.queryParamMap.get('title');
      this.movie = { id: movieId, imageUrl: imageUrl, title: title };
    });
  }

  UpdateReview () {
    const reviewData = {
      movieId: this.movie.id,
      TextBody: this.reviewText,
      Title: this.reviewTitle,
      MovieRating: this.rating
    };
  
    this.movieService.updateReviewInDatabase(reviewData).subscribe(
      (response) => {
        
        console.log('Review has been updated :', response);
        
      },
      (error) => {
        
        console.error('Error updating review:', error);
        
      }
    ); 
  }
}
