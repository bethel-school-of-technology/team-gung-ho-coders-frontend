import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'movies', component: MoviePageComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: '', component: SignInComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
