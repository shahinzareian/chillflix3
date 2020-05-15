import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';
import { Router } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input()
  public movie: Movie;
  public title: string;
  constructor(
    private readonly movieservice: MovieService,
    private readonly router: Router
  ) {}

  public searchMovie(): void {
    this.movieservice.searchMovie(this.title).subscribe((movie) => {
      if (movie == null) {
        alert(`there is no movie with this title!`);
      } else {
        // this.router.navigate(['/serach', );
      }
    });
  }
}
