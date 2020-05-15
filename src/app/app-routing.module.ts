import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminShowComponent } from './admin-show/admin-show.component';
import { LoginGuard } from './shared/services/login.guard';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { YoutubePlayComponent } from './youtube-play/youtube-play.component';
import { MovieShowListComponent } from './movie-show-list/movie-show-list.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/add', component: MovieFormComponent },
  { path: 'admins', component: AdminListComponent },
  { path: 'admins/add', component: AdminFormComponent },
  { path: '', redirectTo: 'movieShow', pathMatch: 'full' },
  { path: 'movies/edit/:id', component: MovieUpdateComponent },
  { path: 'admins/edit/:id', component: AdminUpdateComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/add', component: CategoryFormComponent },
  { path: 'category/edit/:id', component: CategoryUpdateComponent },
  {
    path: 'adminMovie',
    component: AdminMovieComponent,
    canActivate: [LoginGuard],
  },
  { path: 'movieShow', component: MovieShowComponent },
  { path: 'login', component: LoginComponent },
  { path: 'showMovie/:id', component: MovieDetailsComponent },
  { path: 'playMovie/:id', component: YoutubePlayComponent },
  { path: 'search/:search', component: MovieShowListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
