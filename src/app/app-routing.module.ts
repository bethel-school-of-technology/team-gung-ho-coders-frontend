import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { EditReviewComponent } from './components/edit-review/edit-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home by default
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviePageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'create-review', component: CreateReviewComponent },
  { path: 'create-review/:id', component: CreateReviewComponent }, // Define before the route without the id parameter
  { path: 'edit-review', component: EditReviewComponent },
  { path: 'edit-review/:id', component: EditReviewComponent },
  { path: 'review-list', component: ReviewListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
