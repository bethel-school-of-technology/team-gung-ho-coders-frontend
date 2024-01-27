export class Movies {
    movieId?: string;
    movieTitle?: string;

    constructor(Id?: string, movieTitle?: string ) {
        this.movieId = Id;
        this.movieTitle = movieTitle;
    }
}
