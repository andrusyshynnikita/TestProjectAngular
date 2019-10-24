import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TodosStoreService } from '../../../Services/todosStorage-service/TodosStoreService.service';
import { AuthService } from '../../../Services/auth/auth-service/auth.service';
import { Todo } from '../../../models/todo.model';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todosTrackFn = (i, todo) => todo.id;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public todoStorage: TodosStoreService
  ) { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
  }

  addTodo() {
    this.router.navigate(['addTodo']);
  }

  deleteTodo(id: number) {
  }

  showTodoDetails(todo: Todo) {
    debugger;
    this.router.navigate(['todoDetails', todo.id]);
  }
}
