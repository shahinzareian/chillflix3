import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css'],
})
export class CategorySelectComponent implements OnInit {
  public categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  @Input()
  public category: Category;

  public name: string;

  public addCategory(): void {
    const newCategory: Category = {
      name: this.name,
    };
    this.categoryService.addCategory(newCategory).subscribe((category) => {
      alert(`we added a category with id ${category.id}`);
    });
  }

  ngOnInit(): void {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
    });
  }
}
