import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';
import { CategorySelectComponent } from '../category-select/category-select.component';
import { Category } from '../shared/models/category';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  // @ViewChild('categorySelect')
  // public categorySelect: CategorySelectComponent;
  // public movies: Movie[] = [];
  public movie: Movie;

  public id: number;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.movieService.getMovie(this.id).subscribe(
      (movie) => {
        this.movie = movie;
      },
      (error) => {
        alert(`we couldn't find the movie you are looking for! The error
  is: ${error}`);
      }
    );
  }
}
