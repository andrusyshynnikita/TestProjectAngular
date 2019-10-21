import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule  } from './Modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/core/components/layout/top-bar/top-bar.component';
import { TodoListComponent } from './Modules/core/components/todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './Modules/core/components/todo/todo-details/todo-details.component';
import { TodoItemComponent } from './Modules/core/components/todo/todo-item/todo-item.component';
import { AddTodoComponent } from './Modules/core/components/todo/add-todo/add-todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoListComponent },
      { path: 'products/:productId', component: TodoDetailsComponent },
      { path: 'addTodo', component: AddTodoComponent },
    ]),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
