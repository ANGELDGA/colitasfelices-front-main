import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Pets } from './Pets';

@Injectable({
  providedIn: 'root'
})
export class AppService {
//http://localhost:8080
  //private url = "http://localhost:8080/api/v1/pets/";

  private url = "https://peats2023.azurewebsites.net/api/v1/pets/";

  constructor(private http: HttpClient) { }

  // Add User - Create
  adduser(user: Pets){
    return this.http.post<Pets>(`${this.url}add`, user)
  }

  // Get Users - Read
  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'users')
  }

  // Get User by Id - Read
  getUserById(id: number): Observable<Pets>{
    return this.http.get<Pets>(`${this.url}user/${id}`)
  }

  // Update User - Update
  updateUser(id?: number ,user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, user)
  }

  // Delete User - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}
