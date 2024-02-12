export class Movies {
    movieId?: string;
    MovieTitle?: string;
    imgUrl: any;
  
    constructor(movieId?: string, MovieTitle?: string, imgUrl?: any) {
      this.movieId = movieId;
      this.MovieTitle = MovieTitle;
      this.imgUrl = imgUrl;
    }
  }
  