import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/categories`;

  constructor(private readonly http: HttpClient) {}

  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }
  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
  public deleteCategory(category: Category): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${category.id}`);
  }
  public getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  public updateCategory(category: Category): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${category.id}`, category);
  }
}
