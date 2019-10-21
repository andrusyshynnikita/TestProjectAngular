import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { TodosStoreService } from '../../../Services/todosStorage-service/TodosStoreService.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();

  constructor(private todosStorageService: TodosStoreService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.status
    };

    return classes;
  }

  onToggle(todo: Todo) {
    this.todosStorageService.updateTodo(todo);
  }

  onDelete(id: number) {
    this.todosStorageService.removeTodo(id);
}
}
