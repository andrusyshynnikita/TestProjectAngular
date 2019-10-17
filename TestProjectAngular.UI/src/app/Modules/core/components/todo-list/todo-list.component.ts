import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../Services/tasks-service/tasks.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  tasks: Task[];


  constructor(
    private tasksService: TaskService
  ) { }

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => {
      debugger;
      this.tasks = data;
    },
    );
  }
}

