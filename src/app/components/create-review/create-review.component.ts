import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
   movie: any;
  reviewText: any;
  reviewTitle: any;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const movieId = params['id'];
      const imageUrl = this.route.snapshot.queryParamMap.get('imageUrl');
      const title = this.route.snapshot.queryParamMap.get('title');
      this.movie = { id: movieId, imageUrl: imageUrl, title: title };
    });
  }

  addReviewToDatabase(event: Event): void {
    event.preventDefault();
    
    const review = {
      movieId: this.movie.id,
      imgUrl: this.movie.imageUrl || '', 
      reviewText: this.reviewText
    };
  
    this.movieService.addReviewToDatabase(review).subscribe(
      (response: any) => {
        console.log('Review added to database:', response);
        this.reviewText = '';
        
      },
      (error: any) => {
        console.error('Error adding review to database:', error);
      }
    );
  }
  


}
