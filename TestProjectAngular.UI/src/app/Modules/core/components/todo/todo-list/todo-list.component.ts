import { Component, OnInit } from '@angular/core';

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
    private todoService: TodoService
  ) { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    },
    );
  }

  deleteTodo(id: number) {
    debugger;
     this.todos = this.todos.filter(item => item.id !== id);
  }
}

