import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/core/components/top-bar/top-bar.component';
import { TodoListComponent  } from './Modules/core/components/todo-list/todo-list.component';
import {TodoDetailsComponent} from './Modules/core/components/todo-details/todo-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TodoListComponent },
      {path: 'products/:productId', component: TodoDetailsComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TodoListComponent,
    TodoDetailsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
