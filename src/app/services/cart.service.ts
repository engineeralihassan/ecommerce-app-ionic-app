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

  addToCart(product: any): void {
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

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
    this.updateCartLength();
  }
  clearCart(){
    this.cartItems=[];
    this.updateCartLength();
  }
}
