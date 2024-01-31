import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'favorites', component: FavoritesComponent},
  {
    path: "signup",
    component: SignUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
