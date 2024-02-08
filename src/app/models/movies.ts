export class Movies {
    movieId?: string;
    movieTitle?: string;
    imgUrl: any;
  
    constructor(movieId?: string, movieTitle?: string, imgUrl?: any) {
      this.movieId = movieId;
      this.movieTitle = movieTitle;
      this.imgUrl = imgUrl;
    }
  }
  