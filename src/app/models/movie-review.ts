export class MovieReview {
    movieReviewId: number = 0;
    textBody: string = '';
    movieRating: number = 0;
    movieTitle: string = ''; 
    imgUrl: string = ''; 
  
    constructor(movieReviewId: number, textBody: string, movieRating: number, movieTitle: string, ImgUrl: string) {
      this.movieReviewId = movieReviewId;
      this.textBody = textBody;
      this.movieRating = movieRating;
      this.movieTitle = movieTitle;
      this.imgUrl = ImgUrl;
    }
  }
  