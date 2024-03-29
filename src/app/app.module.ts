import { NgModule, createComponent } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateReviewComponent } from './components/create-review/create-review.component';
import { EditReviewComponent } from './components/edit-review/edit-review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    FavoritesComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    MoviePageComponent,
    CreateReviewComponent,
    EditReviewComponent,
    ReviewListComponent,
    MovieListComponent
  ],
  imports: [

    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
