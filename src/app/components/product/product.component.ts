import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatCardModule,MatFormFieldModule,FormsModule,MatButtonModule,MatInputModule,MatToolbarModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
   @Input() product: any;
   constructor(private router: Router){

   }

   viewDetails(productId: any){
    console.log(productId)
    this.router.navigate(['/productdetails',productId]);
   }

   addToCart(product:any){
    console.log(product);

   }

}
