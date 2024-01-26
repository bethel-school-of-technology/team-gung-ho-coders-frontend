import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'movies', component: MoviePageComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
