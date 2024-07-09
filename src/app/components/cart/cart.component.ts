import { AsyncPipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatDialogClose,AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public cartData: any){
    console.log('Cart Data:', JSON.stringify(this.cartData));

  }

}
