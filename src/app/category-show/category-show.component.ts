import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss'],
})
export class CategoryShowComponent implements OnInit {
  public categories: Category[] = [];
  public movies: Movie[] = [];
  constructor(
    private categoryService: CategoryService,
    private movieService: MovieService
  ) {}

  public name: string;

  @Input()
  public movie: Movie;

  ngOnInit(): void {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
    });
    const movies$ = this.movieService.getMovies();
    movies$.subscribe((movies) => {
      this.movies = movies;
    });
  }

  public getMoviesForCategory(category: Category): Movie[] {
    return this.movies
      .filter(
        (movie) => !!movie.category && movie.category.name === category.name
      )
      .slice(0, 5);
  }
}
