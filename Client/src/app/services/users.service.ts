import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

const url = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${url}all`);
  }

  getUser(id:string) {
    return this.http.get(`${url}get/${id}`);
  }

  saveUser(newUser: User) {
    return this.http.post<Response>(`${url}add`, newUser);
  }

  deleteUser(id: string){
    return this.http.delete(`${url}delete/${id}`);
  }

  updateUser(id: string|number, updatedUser: User){
    return this.http.put(`${url}update/${id}`, updatedUser);
  }
}
