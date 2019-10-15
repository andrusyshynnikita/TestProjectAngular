import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from '../../Services/tasks-service/tasks.service';

@Component({
    selector: 'app-product-details',
    templateUrl: 'product-details.component.html',
    styleUrls: ['product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: TaskService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.route.paramMap.subscribe(params => {
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
