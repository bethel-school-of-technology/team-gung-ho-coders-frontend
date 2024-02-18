export class Movies {
  movieId?: string;
  movieTitle?: string;
  imgUrl: any;

  constructor(movieId?: string, movieTitle?: string, ImgUrl?: any) {
    this.movieId = movieId;
    this.movieTitle = movieTitle;
    this.ImgUrl = ImgUrl;
  }
}

export interface Movies {
  movieId?: string;
  movieTitle?: string;
  ImgUrl: any;
}
