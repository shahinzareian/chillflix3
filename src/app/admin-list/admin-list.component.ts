import { Component, OnInit } from '@angular/core';
import { Admin } from '../shared/models/admin';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  public admins: Admin[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    const admins$ = this.adminService.getAdmins();
    admins$.subscribe((admins) => {
      this.admins = admins;
    });
  }

  public onDelete(adminToDelete: Admin) {
    if (
      confirm(`Are you sure you want to delete admin
    ${adminToDelete.name} with id ${adminToDelete.id}?`)
    ) {
      this.adminService.deleteAdmin(adminToDelete).subscribe(() => {
        // Delete admin with id {adminToDelete.id}
        this.admins = this.admins.filter(
          (admin) => admin.id !== adminToDelete.id
        );
      });
    }
  }
}
