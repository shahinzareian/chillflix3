import { Category } from '../models/category';
export class Movie {
  public title: string;
  public year: number;
  public id?: number;
  public comments: string;
  public movieUrl: string;
  public picUrl: string;
  public category: Category;
}
