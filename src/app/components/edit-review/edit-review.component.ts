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
  movieReviewId!: number;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

 ngOnInit(): void {
  this.route.params.subscribe(params => {
    this.movieReviewId = +params['id'];
    const imageUrl = this.route.snapshot.queryParamMap.get('imageUrl');
    const title = this.route.snapshot.queryParamMap.get('title');
    this.movie = { id: this.movieReviewId, imageUrl: imageUrl, title: title };

    this.movieService.getReviewById(this.movieReviewId).subscribe(response => {
      this.reviewText = response.textBody;
      this.rating = response.movieRating;
    });

  });
}


  updateReview() {
    const reviewData = {
      movieReviewId: this.movieReviewId,
      textBody: this.reviewText,
      title: this.reviewTitle,
      movieRating: this.rating
    };
  
    this.movieService.updateReviewInDatabase(reviewData).subscribe(
      (response) => {
        console.log('Review has been updated:', response);
      },
      (error) => {
        console.error('Error updating review:', error);
        
      }
    ); 
  }
}
