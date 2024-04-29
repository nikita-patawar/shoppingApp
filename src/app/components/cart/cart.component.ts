import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatDialogClose],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    console.log('Cart Data:', JSON.stringify(this.data));

  }

}
