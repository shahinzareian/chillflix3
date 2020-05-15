import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../shared/models/category';
import { MovieService } from '../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/models/movie';
import { CategorySelectComponent } from '../category-select/category-select.component';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css'],
})
export class MovieUpdateComponent implements OnInit {
  @ViewChild('categorySelect')
  public categorySelect: CategorySelectComponent;

  public title: string;
  public year: number;
  public Id: number;
  public comments: string;
  public movieUrl: string;
  public picUrl: string;
  public category: Category;
  constructor(
    private readonly movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  public updateMovie(): void {
    console.log(this.categorySelect.category);
    const newMovie: Movie = {
      title: this.title,
      year: this.year,
      comments: this.comments,
      id: this.Id,
      picUrl: this.picUrl,
      movieUrl: this.movieUrl,
      category: this.categorySelect.category,
    };
    this.movieService.updateMovie(newMovie).subscribe(() => {
      alert(`We update a movie with id ${this.Id}!`);
    });
  }
  ngOnInit(): void {
    this.Id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.movieService.getMovie(this.Id).subscribe(
      (movie) => {
        // Prefill the form
        this.year = movie.year;
        this.title = movie.title;

        this.movieUrl = movie.movieUrl;
        this.picUrl = movie.picUrl;
        this.comments = movie.comments;
      },
      (error) => {
        alert(`we couldn't find the movie you are looking for! The error
  is: ${error}`);
      }
    );
  }
}
