import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { TodosStoreService } from '../../../Services/todosStorage-service/TodosStoreService.service';
import { AuthService } from '../../../Services/auth/auth-service/auth.service';
import { Todo } from '../../../models/todo.model';
import { trigger, transition, style, animation, animateChild, animate } from '@angular/animations';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)',
         style({
           transform: 'scale(0.5)', opacity: 0,
           height: '0px', margin: '0px'
         }))
    ])
  ])
  ]
})
export class TodoListComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public todoStorage: TodosStoreService
  ) { }

  todosTrackFn(index, todo) {
    return todo.id;
  }

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
    this.router.navigate(['todoDetails', todo.id]);
  }
}
