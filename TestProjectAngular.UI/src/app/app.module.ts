import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './Modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/core/components/layout/top-bar/top-bar.component';
import { TodoListComponent } from './Modules/core/components/todo/todo-list/todo-list.component';
import { TodoDetailsComponent } from './Modules/core/components/todo/todo-details/todo-details.component';
import { TodoItemComponent } from './Modules/core/components/todo/todo-item/todo-item.component';
import { AddTodoComponent } from './Modules/core/components/todo/add-todo/add-todo.component';
import { LoginComponent } from './Modules/core/components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Modules/core/Services/auth/token.interceptor/token.interceptor';
import { ErrorInterceptor } from './Modules/core/Services/auth/error.interceptor/error.interceptor';
import { AuthGuard } from './Modules/core/Services/auth/auth.guard/auth.guard';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: TodoListComponent, canActivate: [AuthGuard] },
      { path: 'todoDetails/:id', component: TodoDetailsComponent },
      { path: 'addTodo', component: AddTodoComponent },
    ]),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoItemComponent,
    AddTodoComponent,
    LoginComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
