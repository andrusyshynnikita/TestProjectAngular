import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../../models/todo.model';
import { TodosStoreService } from '../../../Services//todosStorage-service/TodosStoreService.service';

import { Location } from '@angular/common';
import { AuthService } from '../../../Services/auth/auth-service/auth.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  todo: Todo;

  constructor(
    private todosStorageService: TodosStoreService,
    private location: Location,
    private authService: AuthService) {

    this.todo = new Todo();
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.todo.user_Id = this.authService.currentUserValue.id;
    await this.todosStorageService.addTodo(this.todo);
    this.location.back();
  }
}
