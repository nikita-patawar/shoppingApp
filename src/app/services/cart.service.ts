import { Injectable, signal } from '@angular/core';
import { Iproduct } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems = signal<Iproduct[]>([]);
  private searchTerm: BehaviorSubject<string> = new BehaviorSubject('');

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

  getSearchTerm() {
    return this.searchTerm.asObservable();
  }

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
}
