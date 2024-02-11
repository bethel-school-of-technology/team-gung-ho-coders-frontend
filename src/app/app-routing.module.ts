import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
  {path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  {path: 'movies', component: MoviePageComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: "signup", component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
