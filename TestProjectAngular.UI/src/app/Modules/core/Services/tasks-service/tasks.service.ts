import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: string[];

  constructor(private httpService: HttpClient) { }

  addToCart(product) {
    this.tasks.push(product);
  }

  getItems(): Observable<Task[]> {
    return this.httpService.get<Task[]>('http://localhost:3010/api/tasks/GetTasks/1', );
  }

  clearCart() {
    this.tasks = [];
    return this.tasks;
  }
}
