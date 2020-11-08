import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Task } from '../models/task';

const url = 'http://localhost:3000/tasks/';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  byUser(id:string|number) {
    return this.http.get(`${url}byuser/${id}`);
  }

  saveTask(newTask: Task) {
    return this.http.post<Response>(`${url}add`, newTask);
  }

  deleteTask(id: string){
    return this.http.delete(`${url}delete/${id}`);
  }

  updateTask(id, updatedTask){
    return this.http.put(`${url}update/${id}`, updatedTask);
  }
}
