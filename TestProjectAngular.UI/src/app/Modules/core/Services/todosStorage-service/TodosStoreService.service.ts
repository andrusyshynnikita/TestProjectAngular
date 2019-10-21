import { Injectable } from '@angular/core';
import { TodoService } from '../todo-service/todo.service';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosStoreServiceService {
  private readonly _todos = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todos.asObservable();

  constructor(private todosService: TodoService) {
    this.fetchAll();
  }

  get todos(): Todo[] {
    return this._todos.getValue();
  }

  set todos(val: Todo[]) {
    this._todos.next(val);
  }

  async addTodo(todo: Todo) {
    try {
      await this.todosService
        .addTask(todo)
        .toPromise();
      this.todos = [
        ...this.todos,
        todo
      ];
    } catch (e) {
      // is server sends back an error, we revert the changes
      console.error(e);
      this.removeTodo(todo.id, false);
    }
  }

  async removeTodo(id: number, serverRemove = true) {
    // optimistic update
    const todo = this.todos.find(t => t.id === id);
    this.todos = this.todos.filter(todo => todo.id !== id);

    if (serverRemove) {
      try {
        await this.todosService.deleteTask(id).toPromise();
      } catch (e) {
        console.error(e);
        this.todos = [...this.todos, todo];
      }
    }
  }

  async updateTodo(todo: Todo) {

    if (todo) {
      // optimistic update
      const index = this.todos.indexOf(todo);

      this.todos[index] = {
        ...todo,
        status: todo.status
      };

      this.todos = [...this.todos];

      try {
        await this.todosService
          .toggeleCompleted(todo)
          .toPromise();

      } catch (e) {

        console.error(e);
        this.todos[index] = {
          ...todo,
          status: !todo.status
        };
      }
    }
  }

  fetchAll() {
    this.todosService.getTodos().subscribe(data =>
      this.todos = data);
  }
}
