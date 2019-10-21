import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../../Services/todo-service/todo.service';

@Component({
    selector: 'app-todo-details',
    templateUrl: 'todo-details.component.html',
    styleUrls: ['todo-details.component.scss']
})

export class TodoDetailsComponent implements OnInit {

  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: TodoService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.route.paramMap.subscribe(params => {
    });
  }
}
