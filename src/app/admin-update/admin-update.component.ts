import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../shared/models/admin';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css'],
})
export class AdminUpdateComponent implements OnInit {
  public name: string;
  public lastName: string;
  public password: string;
  public username: string;
  public id: number;
  constructor(
    private readonly adminService: AdminService,
    private readonly activatedRoute: ActivatedRoute
  ) {}
  public updateAdmin(): void {
    const newAdmin: Admin = {
      name: this.name,
      lastName: this.lastName,
      password: this.password,
      username: this.username,
      id: this.id,
    };
    this.adminService.updateAdmin(newAdmin).subscribe(() => {
      alert(`We update a admin with id ${this.id}!`);
    });
  }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // Get the movie details from the server and prefill the form
    this.adminService.getAdmin(this.id).subscribe(
      (admin) => {
        // Prefill the form
        this.name = admin.name;
        this.lastName = admin.lastName;
        this.password = admin.password;
        this.username = admin.username;
      },
      (error) => {
        alert(`we couldn't find the movie you are looking for! The error
is: ${error}`);
      }
    );
  }
}
