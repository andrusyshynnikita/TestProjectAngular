import { switchMap } from 'rxjs/operators';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Todo } from '../../../models/todo.model';
import { TodosStoreService } from '../../../Services//todosStorage-service/TodosStoreService.service';

import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  todo: Todo;

  constructor(private todosStorageService: TodosStoreService, private location: Location, private route: ActivatedRoute) {
    this.todo = new Todo();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.todo.user_Id = '1';
    debugger;
    this.todosStorageService.addTodo(this.todo);
    this.location.back();
  }
}
