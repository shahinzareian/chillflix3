import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { AdminService } from '../shared/services/admin.service';
import { Admin } from '../shared/models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Input()
  public admin: Admin;

  public password: string;
  public username: string;

  constructor(
    private readonly adminService: AdminService,
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  public get loggedIn(): boolean {
    return this.loginService.loggedIn;
  }
  public login(): void {
    this.loginService.login();
  }
  public logout(): void {
    this.loginService.logout();
  }

  public passCheck(): void {
    this.adminService
      .passCheck(this.username, this.password)
      .subscribe((pass) => {
        if (pass === true) {
          this.loginService.login();
          this.router.navigate(['/adminMovie']);
        } else {
          alert(`USERNAME AND PASSWORD IS NOT MATCH!`);
        }
      });
  }
}
