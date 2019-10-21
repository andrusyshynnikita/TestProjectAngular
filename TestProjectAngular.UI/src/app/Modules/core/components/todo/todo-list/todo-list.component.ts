import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TodoService } from '../../../Services/todo-service/todo.service';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      debugger;
      this.todos = todos;
    },
    );
  }

  addTodo() {
    this.router.navigate(['addTodo']);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  showTodoDetails(todo: Todo) {
    this.router.navigate(['addTodo']);
  }
}
