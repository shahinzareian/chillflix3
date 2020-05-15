import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CategorySelectComponent } from './category-select/category-select.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { MovieUpdateComponent } from './movie-update/movie-update.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminMovieComponent } from './admin-movie/admin-movie.component';
import { MovieShowComponent } from './movie-show/movie-show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MovieShowListComponent } from './movie-show-list/movie-show-list.component';
import { LoginComponent } from './login/login.component';
import { AdminShowComponent } from './admin-show/admin-show.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CategoryShowComponent } from './category-show/category-show.component';
import { YoutubePlayComponent } from './youtube-play/youtube-play.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    MovieListComponent,
    MovieComponent,
    CategorySelectComponent,
    AdminFormComponent,
    AdminComponent,
    AdminListComponent,
    MovieUpdateComponent,
    AdminUpdateComponent,
    CategoryComponent,
    CategoryFormComponent,
    CategoryListComponent,
    CategoryUpdateComponent,
    AdminMovieComponent,
    MovieShowComponent,
    MenuComponent,
    MovieShowListComponent,
    LoginComponent,
    AdminShowComponent,
    MovieDetailsComponent,
    CategoryShowComponent,
    YoutubePlayComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
