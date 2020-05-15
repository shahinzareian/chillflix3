import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';
import { Category } from '../shared/models/category';
import { CategorySelectComponent } from '../category-select/category-select.component';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  @ViewChild('categorySelect')
  public categorySelect: CategorySelectComponent;

  @Input()
  public movie: Movie;
  public title: string;
  public year: number;

  public comments: string;
  public movieUrl: string;
  public picUrl: string;
  public category: Category;
  categoryForm: any;

  constructor(private readonly movieService: MovieService) {}

  public addMovie(): void {
    // Get cat
    console.log(this.categorySelect.category);

    const newMovie: Movie = {
      title: this.title,
      year: this.year,
      comments: this.comments,
      movieUrl:  this.movieUrl,
      picUrl: this.picUrl,
      category: this.categorySelect.category,
    };
    this.movieService.addMovie(newMovie).subscribe((movie) => {
      alert(`we added a movie with id ${movie.id}`);
    });
  }

  ngOnInit(): void {}
}
