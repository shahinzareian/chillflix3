import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  getMovieInfo(id: number) {
    throw new Error("Method not implemented.");
  }
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/movies`;
  private readonly apiUrlShow = `${this.serverUrl}/api/movies/show`;
  private readonly apiUrlsearch = `${this.serverUrl}/api/movies/search`;

  constructor(private readonly http: HttpClient) {}

  public addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie);
  }
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
  public deleteMovie(movie: Movie): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${movie.id}`);
  }
  public getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  public updateMovie(movie: Movie): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${movie.id}`, movie);
  }
  public movieShow(category: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrlShow}/${category}`);
  }
  public searchMovie(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrlsearch}/${title}`);
  }
}
