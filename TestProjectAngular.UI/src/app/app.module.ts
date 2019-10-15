import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/core/components/top-bar/top-bar.component';
import { ProductListComponent as TasksListComponent } from './Modules/core/components/product-list/product-list.component';
import {ProductAlertsComponent} from './Modules/core/components/product-alerts/product-alerts.component';
import {ProductDetailsComponent as TaskDetailsComponent} from './Modules/core/components/product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TasksListComponent },
      {path: 'products/:productId', component: TaskDetailsComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    TasksListComponent,
    ProductAlertsComponent,
    TaskDetailsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
