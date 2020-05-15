import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Admin } from '../shared/models/admin';

@Component({
  selector: 'app-admin , [app-admin]',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  @Input()
  public admin: Admin;

  @Output()
  public delete = new EventEmitter<Admin>();

  public onDeleteClick() {
    this.delete.emit(this.admin);
  }
}
