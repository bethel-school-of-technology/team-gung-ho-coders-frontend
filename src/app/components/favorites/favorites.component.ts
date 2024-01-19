import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favorites = [
    {
      movieTitle: 'Zootopia',
      imgUrl: 'https://external-preview.redd.it/wtlDFrvnyTyPUPiLYgZ8sqg57PCVyGsKeJ153K4KDoA.jpg?auto=webp&s=5e3b665764fa1bac64bebfd30545d143e0ac1000',
      parentalRating: 'PG',
      yearFilmed: '2016',
      genre: 'Animated',
      runTime: '1h 48min',
    },
    {
      movieTitle: 'Skyscraper',
      imgUrl: 'https://th.bing.com/th/id/OIP.CJ0s0YFwRUJC7yHkChw0ngHaKj?rs=1&pid=ImgDetMain',
      parentalRating: 'PG-13',
      yearFilmed: '2018',
      genre: 'Action/Thriler',
      runTime: '1h 43min',
    },
    {
      movieTitle: 'The Amazing Spider-Man',
      imgUrl: 'https://th.bing.com/th/id/OIP.RnP4LRUYnFGLkCW5EdWFBAHaKn?rs=1&pid=ImgDetMain',
      parentalRating: 'PG-13',
      yearFilmed: '2012',
      genre: 'Animated',
      runTime: '2h 16min',
    },
    {
      movieTitle: 'Joker',
      imgUrl: 'https://www.tfw2005.com/boards/attachments/a56782626a65f8c3a784efc7cf9ed81c-1-jpg.28585173/',
      parentalRating: 'R',
      yearFilmed: '2019',
      genre: 'Thriller/Crime',
      runTime: '2h 2min',
    },
    {
      movieTitle: 'Taken 3',
      imgUrl: 'https://th.bing.com/th/id/R.295e753b563e7ccff047cf5b19fe1800?rik=8D%2fwQ%2buIW6c5RQ&pid=ImgRaw&r=0',
      parentalRating: 'PG-13',
      yearFilmed: '2014',
      genre: 'Action/Thriller',
      runTime: '1h 49min',
    },
    {
      movieTitle: 'Captain Marvel',
      imgUrl: 'https://image.tmdb.org/t/p/original/sYlZGOsRkgn1prig4S2I2tZBise.jpg',
      parentalRating: 'PG-13',
      yearFilmed: '2019',
      genre: 'Action/SuperHero',
      runTime: '1h 48min',
    },
    {
      movieTitle: 'The Karate Kid',
      imgUrl: 'https://i.pinimg.com/736x/47/8f/ab/478fab18a451df61678331a96f4a9da5.jpg',
      parentalRating: 'PG',
      yearFilmed: '1984',
      genre: 'Action/Sport',
      runTime: '2h 6min',
    },
    {
      movieTitle: 'Moana',
      imgUrl: 'https://whatsondisneyplus.com/wp-content/uploads/2018/11/moana-cover.jpg',
      parentalRating: 'PG',
      yearFilmed: '2016',
      genre: 'Animated',
      runTime: '1h 43min',
    },
    ];
}
