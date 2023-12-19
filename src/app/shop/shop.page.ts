import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage{

  cartItems: any[] = [];
  totalBill: number = 0;

  constructor(private cartService: CartService) {}


  ngOnInit(): void {
    console.log("itn the constrcutor",);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }

  updateTotalBill(): void {
    console.log("items in bill",this.cartItems);
    this.totalBill = this.cartItems.reduce((total, item) => {
      console.log("total bil 1 iteration:",total + (item.price * (+item.quantity)));
      return total + (item.price * (+item.quantity));
    }, 0);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotalBill();
  }

}
