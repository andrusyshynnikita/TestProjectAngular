import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo.model';
import { TodoService } from '../../../Services/todo-service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter();

  constructor(private todoService: TodoService) { }

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
    this.todo.status = !this.todo.status;
    this.todoService.toggeleCompleted(todo).subscribe(
      (responce) =>
        console.log(responce),
      error => {
        console.error(error);
      },

      () => {
        debugger;
        console.log('success');
      }
    );
  }

  onDelete(id: number) {
    this.todoService.deleteTask(id).subscribe(
      (responce) => {

      },

      error => {
        console.error(error);
      },

      () => {
        debugger;
        this.deleteTodo.emit(id);
      }
    );
  }
}
