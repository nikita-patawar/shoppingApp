import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { AppWideService } from '../../services/app-wide.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  all_products: any;

  constructor(private appwide :AppWideService){
    this.getAllProduct();
  }

  getAllProduct() {
    this.appwide.getProducts().subscribe(data => {
      this.all_products = data;
      //console.log(this.all_products)
    }, error => {
      console.log("My error", error);
    })
  }


}
