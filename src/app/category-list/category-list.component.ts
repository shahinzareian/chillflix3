import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }

  public onDelete(categoryToDelete: Category) {
    if (
      confirm(`Are you sure you want to delete category
    ${categoryToDelete.name} with id ${categoryToDelete.id}?`)
    ) {
      this.categoryService.deleteCategory(categoryToDelete).subscribe(() => {
        // Delete admin with id {adminToDelete.id}
        this.categories = this.categories.filter(
          (category) => category.id !== categoryToDelete.id
        );
      });
    }
  }
}
