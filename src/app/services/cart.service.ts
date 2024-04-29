import { Injectable, signal } from '@angular/core';
import { Iproduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems = signal<Iproduct[]>([]);

  public products: Iproduct[]=[]

  constructor() { }

  addProductSignal(product: Iproduct){
   this.cartItems.update((val)=>{
   return[...val , product] 
   })
  }

  removeProductsignal(id: number){
    this.cartItems.update((val)=>{
      val.splice(id, 1)
      return val;

    })
  }
}
