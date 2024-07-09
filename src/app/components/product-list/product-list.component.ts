import { ChangeDetectorRef, Component, OnInit, effect, signal } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { AppWideService } from '../../services/app-wide.service';
import { CartService } from '../../services/cart.service';
import { Iproduct } from '../../interfaces/product';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  all_products: Iproduct[] = [];
  currentSearchTerm: string = '';
  private searchTermSubscription: Subscription = new Subscription;
  copy_data: Iproduct[] = [];



  constructor(private appwide :AppWideService,private cart: CartService,private cdRef: ChangeDetectorRef){

    // effect(() => {
    //   if(this.cart.searchTearm()!=""){
    //     this.getAllProduct();
    //     let search=this.cart.searchTearm()
    //     console.log(search)
    //    let data=this.copy_data.filter((product: any)=>product.category.includes(search))
    //     this.all_products=data
    //     console.log(this.all_products,data)
    //   }
    //   else{
    //     this.getAllProduct();
    //   }
    //   //console.log('User effect invoked ' + this.cart.searchTearm());
    // },{ allowSignalWrites: true });
    
  }
  ngOnInit(): void {
    this.getAllProduct();
    console.log(this.currentSearchTerm);

  }

  getAllProduct() {
      this.searchTermSubscription = this.cart.getSearchTerm().subscribe((term) => {
      this.currentSearchTerm = term;
      this.appwide.getProducts().subscribe(data => {
      this.all_products=data
      this.copy_data=data;
      if (this.currentSearchTerm !== "") {
        let data = this.copy_data.filter((product: Iproduct) => product.category.includes(this.currentSearchTerm));
        this.all_products = data;
        console.log(this.all_products, data);
      }
    }, error => {
      console.log("My error", error);
    })
  });
  }

  ngOnDestroy() {
    this.searchTermSubscription.unsubscribe();
  }


}
