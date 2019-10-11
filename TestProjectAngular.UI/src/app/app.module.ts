import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './Modules/core/components/top-bar/top-bar.component';
import { ProductListComponent } from './Modules/core/components/product-list/product-list.component';
import {ProductAlertsComponent} from './Modules/core/components/product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './Modules/core/components/product-details/product-details.component';

import {CartService} from './Modules/core/Services/cart-service/cart.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path: 'products/:productId', component: ProductDetailsComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
