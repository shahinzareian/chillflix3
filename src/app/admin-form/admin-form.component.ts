import { Component, OnInit, Input } from '@angular/core';
import { Admin } from '../shared/models/admin';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  @Input()
  public admin: Admin;
  public name: string;
  public lastName: string;
  public password: string;
  public username: string;

  constructor(private readonly adminService: AdminService) {}

  public addAdmin(): void {
    const newAdmin: Admin = {
      name: this.name,
      lastName: this.lastName,
      password: this.password,
      username: this.username,
    };
    this.adminService.addAdmin(newAdmin).subscribe((admin) => {
      alert(`we added a movie with id ${admin.id}`);
    });
  }

  ngOnInit(): void {}
}
