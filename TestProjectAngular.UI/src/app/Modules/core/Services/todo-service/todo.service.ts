import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

import { BaseHttpService } from '../baseHttp-service/baseHttp.service';

@Injectable({
  providedIn: 'root'
})

export class TodoService extends BaseHttpService {

  constructor(http: HttpClient) {
    super(http, 'tasks/');
  }

  getTodos(): Observable<Todo[]> {
    return this.get<Todo[]>('GetTasks/6');
  }

  deleteTask(id: number) {
    return this.delete(`DeleteTasks/${id}`);
  }

  toggeleCompleted(todo: Todo): Observable<any> {
    return this.post<any>('PostTask', todo);
  }

  addTask(todo: Todo): Observable<Todo> {
    return this.post<Todo>('PostTask', todo);
  }
}
