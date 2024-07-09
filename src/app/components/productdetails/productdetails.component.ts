import { Component, OnInit } from '@angular/core';
import { AppWideService } from '../../services/app-wide.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../interfaces/product';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatFormFieldModule,FormsModule,MatButtonModule,MatInputModule,MatToolbarModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit {
   private productId!: number;
  productDetails!: Iproduct;
   //private:!productDetails:any;
  constructor(private appwide :AppWideService,private route: ActivatedRoute){
    
  }
  ngOnInit(){
    // this.route.params.subscribe(param=>{
    //   this.productId=param['id'];
    // })
    this.productId=this.route.snapshot.params['id']
    console.log(this.productId)
    this.getProductDetails(this.productId)
    
  }
  getProductDetails(id:number) {
    this.appwide.getProductById(id).subscribe(
      product => {
        this.productDetails = product;
        console.log('Found Product:', this.productDetails);
      },
      error => {
        console.error('Error fetching product by ID:', error);
      }
    );
  }
}
