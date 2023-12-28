import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private cartLengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalBill:any=0;

  getCartItems(): any[] {
    return this.cartItems;
  }

  getCartLengthObservable(): Observable<number> {
    return this.cartLengthSubject.asObservable();
  }

  private updateCartLength(): void {
    this.cartLengthSubject.next(this.cartItems.length);
  }

  addToCart(product: any,remove=false): void {
    if(remove){
      const existingProductIndex = this.cartItems.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
        if(this.cartItems[existingProductIndex].quantity>1){
          this.cartItems[existingProductIndex].quantity -= 1;
        }else{
          this.removeFromCart(existingProductIndex);
        }
   
      }
  
      this.updateCartLength();

    }else{

    
    const existingProductIndex = this.cartItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      this.cartItems[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist in the cart, add it
      const newProduct = { ...product, quantity: 1 };
      this.cartItems.push(newProduct);
    }

    this.updateCartLength();
  }
  }


  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartLength();
  }
  clearCart(){
    this.cartItems=[];
    this.updateCartLength();
  }


  // The favourite products data
  private favItems: any[] = [];
  private favLengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  getFavItems(): any[] {
    return this.favItems;
  }

  getFavLengthObservable(): Observable<number> {
    return this.favLengthSubject.asObservable();
  }

  private updateFavLength(): void {
    this.favLengthSubject.next(this.favItems.length);
  }

  addToFav(product: any): void {
    const existingProductIndex = this.favItems.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      this.favItems[existingProductIndex].quantity += 1;
    } else {
      // Product doesn't exist in the cart, add it
      const newProduct = { ...product, quantity: 1 };
      this.favItems.push(newProduct);
    }

    this.updateFavLength();
  }

  removeFromFav(index: number): void {
    this.favItems.splice(index, 1);
    this.updateFavLength();
  }
}
