import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { QuriesService } from './services/quries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: QuriesService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
