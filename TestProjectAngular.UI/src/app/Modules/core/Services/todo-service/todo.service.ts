import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string =
    'http://localhost:3010/api/tasks/';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}GetTasks/1`);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.todosUrl}DeleteTasks/${id}`);
  }

  toggeleCompleted(todo: Todo): Observable<any> {
    return this.http.post<any>(`${this.todosUrl}PostTask`, todo, httpOptions);
    // return this.http.delete<any>(`${this.todosUrl}DeleteTasks/1`);
  }
}
