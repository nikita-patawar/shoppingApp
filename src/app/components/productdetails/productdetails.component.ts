import { Component, OnInit } from '@angular/core';
import { AppWideService } from '../../services/app-wide.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit {
   private productId!: number;
  productDetails!: void;
   //private:!productDetails:any;
  constructor(private appwide :AppWideService,private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.productId=param['id'];
    })
    this.productDetails=this.getProductDetails(this.productId);
    console.log( this.productDetails)
   
  }
  getProductDetails(id:number) {
    this.appwide.getProduct(id).subscribe(data => {
    }, error => {
      console.log("My error", error);
    })
  }
}
