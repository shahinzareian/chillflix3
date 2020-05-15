import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input()
  public category: Category;
  public name: string;


  constructor(private readonly categoryService: CategoryService) {}


  public addCategory(): void {
    const newCategory: Category = {
      name: this.name,
    };
    this.categoryService.addCategory(newCategory).subscribe((category) => {
      alert(`we added a category with id ${category.id}`);
    });
  }

  ngOnInit(): void {}
}
