import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent implements OnInit {
  public name: string;

  public id: number;
  constructor(
    private readonly categoryService: CategoryService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  public updateCategory(): void {
    const newCategory: Category = {
      name: this.name,

      id: this.id,
    };
    this.categoryService.updateCategory(newCategory).subscribe(() => {
      alert(`We update a category with id ${this.id}!`);
    });
  }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.categoryService.getCategory(this.id).subscribe(
      (category) => {
        this.name = category.name;
      },
      (error) => {
        alert(`we couldn't find the category you are looking for! The error
is: ${error}`);
      }
    );
  }
}
