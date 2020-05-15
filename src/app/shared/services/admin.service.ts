import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/admins`;
  private readonly apiUrlAdmin = `${this.serverUrl}/api/admins/password`;

  constructor(private readonly http: HttpClient) {}

  public addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, admin);
  }
  public getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }
  public deleteAdmin(admin: Admin): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${admin.id}`);
  }
  public getAdmin(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${id}`);
  }
  public updateAdmin(admin: Admin): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${admin.id}`, admin);
  }
  public passCheck(username: string, password: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrlAdmin}/${username}/${password}`);
  }



}
