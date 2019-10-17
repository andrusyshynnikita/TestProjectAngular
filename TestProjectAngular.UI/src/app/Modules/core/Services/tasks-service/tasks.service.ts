import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpService: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpService.get<Task[]>('http://localhost:3010/api/tasks/GetTasks/1', );
  }

deleteTask(id: number){
  return this.httpService.delete('http://localhost:3010/api/tasks/DeleteTasks{}')
}
}
