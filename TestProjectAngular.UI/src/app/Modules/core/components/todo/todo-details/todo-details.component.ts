import { switchMap } from 'rxjs/operators';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { TodosStoreService } from '../../../Services//todosStorage-service/TodosStoreService.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: 'todo-details.component.html',
  styleUrls: ['todo-details.component.scss']
})

export class TodoDetailsComponent implements OnInit {

  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  todo: Todo;

  constructor(private todosStorageService: TodosStoreService, private location: Location, private route: ActivatedRoute) {
    this.todo = new Todo();
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.todo = this.todosStorageService.getUserPrivateTask(id);
    debugger;
  }

  onSubmit() {
    this.todo.user_Id = '1';
    debugger;
    this.todosStorageService.updateTodo(this.todo);
    this.location.back();
  }
}
