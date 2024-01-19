import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <nav class="navbar">
    <a routerLink="/home">Home</a>|
    <a routerLink="/movies">Movies</a>|
    <a routerLink="/favorites">Favorites</a>
    <a routerLink="/signin">Sign in</a>|
    <a routerLink="/signup">Sign up</a>|
    <a routerLink="/aboutus">About us</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'silverscreen';
}
