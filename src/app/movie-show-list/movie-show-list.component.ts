import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { Category } from '../shared/models/category';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movie-show-list',
  templateUrl: './movie-show-list.component.html',
  styleUrls: ['./movie-show-list.component.scss'],
})
export class MovieShowListComponent implements OnInit {
  public movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

 
}
